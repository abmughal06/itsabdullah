import { FaReact, FaNode, FaGithub, FaCode } from "react-icons/fa6";

import Image from "next/image";
import { data } from "../constants/data";

export default function About() {
  return (
    <>
      <div className="bg-clrBlack rounded-lg p-12 flex">
        <div className="w-1/2 mr-12">
          <h1 className="text-3xl text-clrManhattan pt-2">{data.title}</h1>
          <h1 className="text-xl pt-2">Flutter & Web Developer</h1>
          <div className="border border-clrWhite border-opacity-10 mt-7 rounded-full px-4 py-2 flex items-center">
            <p className="mr-3">available for work</p>
            <div className="rounded-full h-[10px] w-[10px] bg-green-500"></div>
          </div>
          <div className="flex flex-row justify-between items-end">
            <FaCode className=" text-clrManhattan h-8 w-8 mb-1"/>
            <Image
              src="/images/pic.jpeg"
              width={220}
              height={220}
              className="opacity-80 hover:opacity-100"
              alt="Abdullah"
            />
          </div>
          <div className="h-[0.5px] w-full bg-clrWhite opacity-30"></div>
        </div>
        <div
          className="
          w-1/2"
        >
          <h1 className="text-2xl font-extralight font-sans pt-2">
            Hello!,{" "}
            <span className="font-normal text-clrManhattan">
              I&apos;m Abdullah
            </span>
            , an Expert Flutter & Web Developer bringing ideas to life with
            innovation,{" "}
            <span className="font-normal text-clrManhattan">creativity</span>,
            and <span className="font-normal text-clrManhattan">precision</span>
            .
          </h1>
          <div className="h-[0.5px] w-full bg-clrWhite opacity-30 my-7"></div>
          <div className="flex items-center">
            <button className="bg-clrHotCineman py-2 px-4 text-sm rounded-lg cursor-pointer mr-3">
              WORK
            </button>
            <button className="border border-clrManhattan text-sm border-opactity-30 py-2 px-4 rounded-lg cursor-pointer">
              DOWNLOAD RESUME
            </button>
          </div>
        </div>
      </div>
      <div className="bg-clrBlack rounded-lg justify-center py-5 flex flex-row gap-5 mt-1">
        <div className="p-5 border-[0.5px] border-clrWhite border-opacity-30 rounded-full">
          <FaReact className="h-10 w-10" />
        </div>
        <div className="p-4 border-[0.5px] border-clrWhite border-opacity-30 rounded-full">
          <FaNode className="h-12 w-12" />
        </div>
        <div className="p-4 border-[0.5px] border-clrWhite border-opacity-30 rounded-full">
          <FaGithub className="h-12 w-12" />
        </div>
        <div className="p-4 border-[0.5px] border-clrWhite border-opacity-30 rounded-full">
          <FaReact className="h-12 w-12" />
        </div>
        <div className="p-4 border-[0.5px] border-clrWhite border-opacity-30 rounded-full">
          <FaReact className="h-12 w-12" />
        </div>
        <div className="p-4 border-[0.5px] border-clrWhite border-opacity-30 rounded-full">
          <FaReact className="h-12 w-12" />
        </div>
        <div className="p-4 border-[0.5px] border-clrWhite border-opacity-30 rounded-full">
          <FaReact className="h-12 w-12" />
        </div>
        <div className="p-4 border-[0.5px] border-clrWhite border-opacity-30 rounded-full">
          <FaReact className="h-12 w-12" />
        </div>
      </div>
      <div className="bg-clrBlack rounded-lg flex flex-row gap-10 justify-between mt-1 px-10 py-12">
        <AboutInfoComponent
          title="Education"
          description="Bachlor's Degree in Computer Sciece"
          url="https://nfciet.edu.pk"
          urlName="NFC IET"
          duration="2018 - 2022"
        />
        <AboutInfoComponent
          title="Experience"
          description="Sr. Flutter Developer at Wolf Stack"
          url="https://wolfstack.tech"
          urlName="WOLF STACK"
          duration="2022 - Present"
        />
      </div>
    </>
  );
}

interface AboutInfoProps {
  url: string;
  urlName: string;
  duration: string;
  title: string;
  description: string;
}

const AboutInfoComponent: React.FC<AboutInfoProps> = ({
  url,
  duration,
  urlName,
  title,
  description,
}) => {
  return (
    <div className="w-1/2">
      <h3 className="text-clrManhattan font-normal text-xl">{title}</h3>
      <p className="font-extralight text-md my-5">{description}</p>
      <a
        href={url}
        className="font-medium underline hover:text-clrManhattan text-md"
        target="_blank"
      >
        {urlName}
      </a>
      <div className="border-[0.5px] border-clrWhite border-opacity-30 rounded-full w-max px-4 py-2 mt-5 font-extralight text-md">
        {duration}
      </div>
      <div className="w-full h-[0.5px] bg-clrWhite opacity-30 mt-10"></div>
    </div>
  );
};
