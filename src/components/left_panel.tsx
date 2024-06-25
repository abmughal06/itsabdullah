import { data } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function LeftPanel() {
  return (
    <section className="fixed w-[58px]">
      
      <div className="flex flex-col items-center">
      <div className="flex flex-col bg-primary mt-4 mx-auto px-5 py-7 gap-10 rounded-lg">
        {data.icon.map((e, i) => (
          <Link key={e} href={data.sections[i]}>
            <Image key={e} src={e} alt="ICONS" height={32} width={32} />
          </Link>
        ))}
      </div>
      <div className="w-[1px] h-48 bg-primary bg-opacity-40 my-5"></div>
        <div className="flex flex-col gap-5">
          <LinkWithIcon
            url={data.socialLinks.linkedin}
            icon={<FaLinkedinIn />}
          />

          <LinkWithIcon url={data.socialLinks.github} icon={<FaGithub />} />

          <LinkWithIcon
            url={data.socialLinks.instagram}
            icon={<FaInstagram />}
          />
        </div>
      </div>
    </section>
  );
}


interface LinkWithIconProps {
  url: string;
  icon: React.ReactNode;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({ url, icon }) => {
  return (
    <a href={url} target="_blank">
      <div className="p-2 border border-primary text-black text-lg bg-primary bg-clrSteelBlue cursor-pointer bg-opacity-50 hover:bg-opacity-30 rounded-full">
        {icon}
      </div>
    </a>
  );
};
