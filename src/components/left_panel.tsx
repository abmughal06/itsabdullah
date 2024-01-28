import { FaCode, FaMessage, FaUser, FaRProject } from "react-icons/fa6";

export default function LeftPanel() {
  return (
    <section className="fixed top-0 left-[21%] w-[58px]">
      <div className="flex flex-col bg-clrHotCineman my-10 mx-auto px-5 py-7 gap-10 rounded-lg">
        <FaUser />
        <FaCode />
        <FaRProject />
        <FaMessage />
      </div>
    </section>
  );
}
