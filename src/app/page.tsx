import LeftPanel from "@/components/left_panel";
import SocialLinks from "@/components/social_links";
import About from "@/components/about";
import WorkSection from "@/components/work_sec";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="relative">
      {/* navbar */}
      <LeftPanel />
      {/* body */}
      <section className="about w-[50%] mx-auto my-10">
        <About />
        <WorkSection />
        <Services/>
      </section>
      {/* links */}
      <SocialLinks />
    </div>
  );
}
