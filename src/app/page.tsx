import LeftPanel from "@/components/left_panel";
import SocialLinks from "@/components/social_links";
import About from "@/components/about";
import WorkSection from "@/components/work_sec";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="w-full flex mx-auto">
      <section className="hidden fixed left-0 w-[20%] md:flex justify-end">
        <LeftPanel />
      </section>
      <section className="w-[95%] md:w-[60%] mx-auto py-4">
        <About />
        <Skills />
        <Education />
        <Experience />
        <WorkSection />
        <Contact />
      </section>
      <section className="hidden fixed right-0 w-[20%] md:flex justify-start">
        <SocialLinks />
      </section>
    </div>
  );
}
