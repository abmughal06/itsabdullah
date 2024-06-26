"use client";

import { data } from "@/constants/data";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="bg-foreground rounded-lg p-8 mt-1">
      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite  inline-block w-max">
          {/* <!-- Ensure that the images cover entire screen width for a smooth transition --> */}
          {data.skills_logos.map((logo) => (
            <Image
              className="mx-4 inline"
              key={logo}
              src={logo}
              height={80}
              width={80}
              alt="Skills"
            ></Image>
          ))}
        </div>

        {/* <!-- Duplicate of the above for infinite effect (you can use javascript to duplicate this too) --> */}
        <div className="animate-slide-left-infinite inline-block w-max">
          {/* <!-- Ensure that the images cover entire screen width for a smooth transition --> */}
          {data.skills_logos.map((logo) => (
            <Image
              className="mx-4 inline"
              key={logo}
              src={logo}
              height={80}
              width={80}
              alt="Skills"
            ></Image>
          ))}
        </div>
      </div>
      
    </section>
  );
}
