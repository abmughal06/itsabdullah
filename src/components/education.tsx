import { FaSchool } from "react-icons/fa";

export default function Education() {
  return (
    <section className="flex flex-col gap-3 bg-foreground rounded-lg p-8 mt-1">
      <div className="flex flex-row justify-between">
        <h3 className="text-primary font-normal text-xl">EDUCATION</h3>
        <FaSchool className="text-primary" />
      </div>
      <div className="flex flex-col text-white">
        <div className="flex flex-row justify-between">
          <a
            href="https://nfciet.edu.pk"
            className="font-medium hover:underline hover:text-primary text-md"
            target="_blank"
          >
            NFC Institute of Engineering & Technology
          </a>
          <p className="text-white font-medium">Multan, Punjab, Pakistan</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-light text-sm">
            Bachlor&apos;s Degree in Computer Science
          </p>
          <p className="font-light text-sm">
          October 2018 - August 2022
          </p>
        </div>
      </div>
    </section>
  );
}
