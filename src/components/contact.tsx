"use client";
import { FaCode } from "react-icons/fa6";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section className="services">
      <div className="bg-foreground text-white rounded-lg p-8 mt-1 flex flex-col gap-5">
        <div className="flex flex-row justify-between ">
          <h3 className="font-normal text-xl text-primary">CONTACT</h3>
          <FaCode className="text-primary" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Image
            src="/images/wolfstack.png"
            alt="Wolf Stack"
            height={256}
            width={256}
          />
          <div className="flex flex-col gap-5 items-end">
            <Input
              type="name"
              placeholder="Name"
              className="bg-white text-black"
            ></Input>
            <Input
              type="name"
              placeholder="Email"
              className="bg-white text-black"
            ></Input>
            <Textarea
              rows={5}
              placeholder="Message"
              className="bg-white text-black"
            ></Textarea>
            <Button className="w-fit hover:bg-white hover:text-black">Send</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/ContactForm.js
