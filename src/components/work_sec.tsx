import { PortfolioCard } from "./portfolio_card";

export default function WorkSection() {
  return (
    <section id="work">
      <div className="bg-foreground rounded-lg p-8 flex flex-col gap-4 mt-1">
        <div className="flex flex-row justify-between">
          <h3 className="font-normal text-xl text-primary">WORK</h3>
          {/* <FaCode className="text-primary" /> */}
        </div>
        <div className="flex flex-row justify-center">
          <PortfolioCard />
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
