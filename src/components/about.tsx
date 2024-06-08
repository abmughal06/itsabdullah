import Image from "next/image";
import { data } from "../constants/data";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="profile"
      className="bg-foreground rounded-lg p-12 flex text-secondary"
    >
      <div className="w-1/2 mr-12">
        <div className="flex flex-row justify-between items-end mt-2 rouned">
          {/* <FaCode className=" text-clrManhattan h-8 w-8"/> */}
          <Image
            src="/images/my-pic-svg.svg"
            width={220}
            height={220}
            className="opacity-80 hover:opacity-100 rounded-md"
            alt="Abdullah"
          />
        </div>
        <h1 className="text-3xl text-primary pt-2">{data.title}</h1>
        <h1 className="text-md underline font-thin pt-2">
          Flutter & Web Developer
        </h1>

        <div className="h-[0.5px] w-full bg-clrWhite opacity-30" />
      </div>
      <div
        className="
          w-1/2"
      >
        <h1 className="text-2xl text-secondary font-extralight font-sans pt-2">
          Hello!,{" "}
          <span className="font-normal text-primary">I&apos;m Abdullah</span>,
          an Expert Flutter & Web Developer bringing ideas to life with
          innovation,{" "}
          <span className="font-normal text-primary">creativity</span>, and{" "}
          <span className="font-normal text-primary">precision</span>.
        </h1>
        <div className="h-[0.5px] w-full bg-clrWhite opacity-30 my-7"></div>
        <div className="flex items-center">
          <Link href={"/#work"}>
            <button className="bg-primary py-2 px-4 text-sm rounded-lg cursor-pointer mr-3">
              WORK
            </button>
          </Link>
          <Link target="_blank" href="/images/resume.pdf">
            <button className="border border-clrManhattan text-sm border-opactity-30 py-2 px-4 rounded-lg cursor-pointer">
              DOWNLOAD RESUME
            </button>
          </Link>
        </div>
        <div className="border border-clrWhite border-opacity-10 mt-7 rounded-full px-4 py-2 flex items-center">
          <p className="mr-3">Available for work</p>
          <div className="rounded-full h-[10px] w-[10px] bg-green-500"></div>
        </div>
      </div>
    </section>
  );
}
