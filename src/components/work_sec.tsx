import { FaCode } from "react-icons/fa6";
import Image from "next/image";
import { data } from "@/constants/data";

export default function WorkSection() {
  return (
    <>
      <div className="bg-foreground rounded-lg p-8 flex flex-row justify-between mt-1">
        <h3 className="font-normal text-xl text-primary">WORK</h3>
        <FaCode className="text-primary" />
      </div>
      <div className="grid grid-rows-2 grid-cols-2 mt-1 gap-2">
        {data.portfolioData.map((e) => (
          <div
            key={e.title}
            className="rounded-lg h-fit w-full bg-foreground py-2"
          >
            <h5 className="font-normal p-2 text-white text-lg">{e.title}</h5>
            <div>
              <Image
                src={e.img}
                height={450}
                width={700}
                alt="CASARANCHA"
              ></Image>
            </div>
            <h5 className="text-xs p-2 font-semibold text-primary">{e.skills}</h5>
          </div>
        ))}
      </div>
      <div className="bg-foreground rounded-lg p-7 flex flex-row justify-center mt-1">
        <h3 className="font-medium text-white text-lg">
          Curious for More? Explore my agency <a href="https://www.wolfstack.tech" target="_blank" className="underline text-primary font-semibold">Wolf Stack</a>
        </h3>
      </div>
    </>
  );
}
