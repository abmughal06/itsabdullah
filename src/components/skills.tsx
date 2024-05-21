import { data } from "@/constants/data";
import { FaGithub, FaNode, FaReact } from "react-icons/fa";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="bg-foreground rounded-lg p-8 mt-1">
      {/* <div className="flex space-x-16 overflow-hidden">
        <div className="flex space-x-16 text-white animate-loop-scroll">
          {data.skills_logos.map((logo) => (
            <Image
              key={logo}
              src={logo}
              height={80}
              width={80}
              alt="Skills"
            ></Image>
          ))}
        </div>
      </div> */}
      <div className="grid grid-rows-2 grid-cols-7 gap-10">
        {data.skills_logos.map((logo) => (
          <Image
            key={logo}
            src={logo}
            height={64}
            width={64}
            alt="Skills"
          ></Image>
        ))}
      </div>
    </section>
  );
}
