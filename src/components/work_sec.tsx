"use client"

import { FaCode } from "react-icons/fa6";
import Image from "next/image";
import { data } from "@/constants/data";

export default function WorkSection() {
  return (
    <section id="work">
      <div className="bg-foreground rounded-lg p-8 flex flex-col gap-4 mt-1">
        <div className="flex flex-row justify-between">
          <h3 className="font-normal text-xl text-primary">WORK</h3>
          {/* <FaCode className="text-primary" /> */}
        </div>
        <div className="flex flex-row justify-center">
          <CarouselDemo />
        </div>
        <div className="flex flex-row justify-center mt-1">
          <h3 className="font-medium text-white text-lg">
            Curious for More? Explore my agency{" "}
            <a
              href="https://www.wolfstack.tech"
              target="_blank"
              className="underline text-primary font-semibold"
            >
              Wolf Stack
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
}

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselDemo() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: true ,
        }),
      ]}
      className="w-[90%] text-white"
    >
      <CarouselContent>
        {data.portfolioData.map((portfolio, index) => (
          <CarouselItem key={index} className="basis-1/1 lg:basis-1/2">
            <Card className="bg-black border-none">
              <div>
                <Image
                  src={portfolio.img}
                  height={450}
                  width={700}
                  className=" rounded-t-xl"
                  alt="CASARANCHA"
                ></Image>
              </div>
              <h5 className="font-normal p-2 text-white text-lg">
                {portfolio.title}
              </h5>
              <h5 className="text-xs px-2 pb-2 font-semibold text-primary">
                {portfolio.skills}
              </h5>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

{
  /* <div className="grid grid-rows-2 grid-cols-2 mt-1 gap-2">
            {data.portfolioData.map((e) => (
              <div
                key={e.title}
                className="rounded-lg h-fit w-full bg-foreground py-2"
              >
                <h5 className="font-normal p-2 text-white text-lg">
                  {e.title}
                </h5>
                <div>
                  <Image
                    src={e.img}
                    height={450}
                    width={700}
                    alt="CASARANCHA"
                  ></Image>
                </div>
                <h5 className="text-xs p-2 font-semibold text-primary">
                  {e.skills}
                </h5>
              </div>
            ))}
          </div> */
}
