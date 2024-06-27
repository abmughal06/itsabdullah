"use client";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { data } from "@/constants/data";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact">
      <div className="bg-foreground text-white rounded-lg p-8 mt-1 flex flex-col gap-5">
        <div className="flex flex-row justify-between ">
          <h3 className="font-normal text-xl text-primary">CONTACT</h3>
          {/* <FaCode className="text-primary" /> */}
        </div>
        <div className="flex flex-col lg:flex-row gap-5 w-full items-start justify-between">
          <div className="w-full lg:w-1/2 flex flex-col gap-5 items-start">
            <h3 className="text-2xl">
              Have any <span className="text-primary">Queries</span>?
            </h3>

            <h4 className="text-lg font-semibold">
              Or a project to discuss. i&apos;ll convert your thoughts into
              reality...
            </h4>

            <h4>Follow me on my social handles...</h4>

            <div className="flex flex-row gap-5 justify-start text-primary text-2xl">
              <Link
                href={data.socialLinks.linkedin}
                target="_blank"
                className="hover:scale-110 hover:text-white"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href={data.socialLinks.github}
                target="_blank"
                className="hover:scale-110 hover:text-white"
              >
                <FaGithub />
              </Link>
              <Link
                href={data.socialLinks.instagram}
                target="_blank"
                className="hover:scale-110 hover:text-white"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-end w-full lg:w-1/2 placeholder-white">
            <Input
              type="name"
              placeholder="Name"
              className="bg-transparent"
            ></Input>
            <Input
              type="name"
              placeholder="Email"
              className="bg-transparent"
            ></Input>
            <Textarea
              rows={5}
              placeholder="Message"
              className="bg-transparent"
            ></Textarea>
            <Button className="w-fit text-black hover:text-white">Send</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/ContactForm.js
