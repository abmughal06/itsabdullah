import { data } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <section id="introduction">
      <div className="flex flex-row justify-between items-start pt-32">
        <div className="text-white flex flex-col gap-8">
          <h2 className="text-4xl">
            Hi, I am <span className="text-4xl text-primary">Abdullah</span>
          </h2>
          <h3 className="text-2xl">
            <span className="text-primary">Mobile</span> &{" "}
            <span className="text-primary">Web</span> Developer
          </h3>
          <h4 className="text-md text-white">
            I love creating things living in digital world!
          </h4>
          <p className="w-1/2">
            <span className="text-primary">Welcome to my portfolio!</span> I am
            a skilled and passionate developer specializing in{" "}
            <span className="text-primary">Flutter</span> and{" "}
            <span className="text-primary">NextJS</span>. With a strong
            background in mobile and web development, I strive to create
            exceptional digital experiences that seamlessly blend functionality,
            aesthetics, and user engagement.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={"/images/my-pic-svg.svg"}
            alt="Abdullah"
            width={550}
            height={550}
            className="rounded-md opacity-80 hover:opacity-100"
          />
          <div className="border border-clrWhite border-opacity-10 rounded-full px-4 py-2 flex items-center text-white">
            <p className="mr-3">Available for work</p>
            <div className="rounded-full h-[10px] w-[10px] bg-green-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
