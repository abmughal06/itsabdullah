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
    <div className="relative bg-black">
      <LeftPanel />
      <section className="about w-[50%] mx-auto py-12">
        <About />
        <Skills />
        <Education />
        <Experience />
        <WorkSection />
        <Contact />
      </section>
      <SocialLinks />
    </div>
  );
}
