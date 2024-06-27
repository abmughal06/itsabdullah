"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { data } from "@/constants/data";
import DynamicAlertDialog from "./dynamic_alert_dialog";

export function PortfolioCard() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: true,
        }),
      ]}
      className="w-[90%] text-white"
    >
      <CarouselContent>
        {data.portfolioData.map((portfolio, index) => (
          <CarouselItem key={index} className="basis-1/1 lg:basis-1/2">
            <Card className="bg-black border-none">
              <Image
                src={portfolio.img}
                height={450}
                width={700}
                className=" rounded-t-xl cursor-pointer"
                alt="CASARANCHA"
              ></Image>
              <h5 className="font-normal cursor-pointer hover:underline hover:text-primary p-2 text-white text-lg">
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
