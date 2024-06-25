import LeftPanel from "@/components/left_panel";
// import SocialLinks from "@/components/social_links";
import About from "@/components/about";
import WorkSection from "@/components/work_sec";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="w-[60%] mx-auto bg-black flex flex-row">
      <LeftPanel />
      <section className="w-[85%] mx-auto py-4">
        <About />
        <Skills />
        <Education />
        <Experience />
        <WorkSection />
        <Contact />
      </section>
      {/* <SocialLinks /> */}
    </div>
  );
}
