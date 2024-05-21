import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { data } from "@/constants/data";

import { FaCode } from "react-icons/fa6";

export default function Experience() {
  return (
    <section>
      <div className="flex flex-col gap-3 bg-foreground rounded-lg p-8 mt-1">
        <div className="flex flex-row justify-between">
          <h3 className="font-normal text-xl text-primary">EXPERIENCE</h3>
          <FaCode className="text-primary" />
        </div>
        <div>
          <Accordion
            type="single"
            defaultValue={data.experience[0].company}
            className="border-none text-white"
          >
            {data.experience.map((e) => {
              return (
                <AccordionItem
                  key={e.company}
                  value={e.company}
                  className="border-none"
                
                >
                  <AccordionTrigger className="text-md text-white font-medium">
                  <div>
                  {e.job_title} | <a className="text-primary">{e.company}</a> | {e.time_spend}
                  </div>
                  </AccordionTrigger>

                  {e.description.map((d) => (
                    <AccordionContent className="text-sm font-normal text-gray-200 py-1" key={d}>- {d}</AccordionContent>
                  ))}
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
