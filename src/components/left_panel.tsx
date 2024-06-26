import { data } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function LeftPanel() {
  return (
    <div className="w-[58px] flex flex-col bg-primary mt-4 px-5 py-7 gap-10 rounded-lg mr-5">
      {data.icon.map((e, i) => (
        <Link key={e} href={data.sections[i]}>
          <Image key={e} src={e} alt="ICONS" height={32} width={32} />
        </Link>
      ))}
    </div>
  );
}
