import { FaCode } from "react-icons/fa6";
import Image from "next/image";

export default function WorkSection(){
    return(
        <>
        <div className="bg-clrBlack rounded-lg p-8 flex flex-row justify-between mt-12">
          <h3 className="font-normal text-xl text-clrManhattan">WORK</h3>
          <FaCode />
        </div>
        <div className="grid grid-rows-2 grid-cols-2 mt-1 gap-[2px]">
          <div className="rounded-lg h-96 w-full bg-clrBlack">
            <div className=" h-80 w-full mx-auto">
              <Image
                src="/images/casarancha.png"
                height={1024}
                width={1024}
                className="h-80 w-full rounded-t-lg"
                alt="CASARANCHA"
              ></Image>
            </div>
            <div className="flex flex-row justify-between m-5">
              <h5 className="font-normal hover:text-clrManhattan text-lg">
                Casarancha
              </h5>
              <h5>C</h5>
            </div>
          </div>
          <div className="rounded-lg h-96 w-full bg-clrBlack">
            <div className=" h-80 w-full mx-auto">
              <Image
                src="/images/2fliegen.jpg"
                height={1024}
                width={1024}
                className="h-80 w-full rounded-t-lg"
                alt="2FLIEGEN"
              ></Image>
            </div>
            <div className="flex flex-row justify-between m-5">
              <h5 className="font-normal hover:text-clrManhattan text-lg">
                2Fliegen
              </h5>
              <h5>C</h5>
            </div>
          </div>
          <div className="rounded-lg h-96 w-full bg-clrBlack">
            <div className=" h-80 w-full mx-auto">
              <Image
                src="/images/look4city.jpg"
                height={1024}
                width={1024}
                className="h-80 w-full rounded-t-lg"
                alt="LOOK4CITY"
              ></Image>
            </div>
            <div className="flex flex-row justify-between m-5">
              <h5 className="font-normal hover:text-clrManhattan text-lg">
                Look4City
              </h5>
              <h5>C</h5>
            </div>
          </div>
          <div className="rounded-lg h-96 w-full bg-clrBlack">
            <div className=" h-80 w-full mx-auto">
              <Image
                src="/images/fgt.png"
                height={1024}
                width={1024}
                className="h-80 w-full rounded-t-lg"
                alt="2FLIEGEN"
              ></Image>
            </div>
            <div className="flex flex-row justify-between m-5">
              <h5 className="font-normal hover:text-clrManhattan text-lg">
                F-G-T GmbH
              </h5>
              <h5>C</h5>
            </div>
          </div>
        </div>
        <div className="bg-clrBlack rounded-lg p-7 flex flex-row justify-center mt-1">
          <h3 className="font-extralight text-xl">
            Curious for More? Explore our Portfolio of Works.
          </h3>
        </div>
        </>
    );
}