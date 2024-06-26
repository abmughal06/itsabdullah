import { data } from "../constants/data";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="flex flex-col my-4 items-center ml-5">
      <div className="py-2 px-4 rounded-lg bg-primary text-3xl">A</div>
      <div className="w-[1px] h-72 bg-primary bg-opacity-40 my-5"></div>
      <div className="flex flex-col gap-5">
        <LinkWithIcon url={data.socialLinks.linkedin} icon={<FaLinkedinIn />} />

        <LinkWithIcon url={data.socialLinks.github} icon={<FaGithub />} />

        <LinkWithIcon url={data.socialLinks.instagram} icon={<FaInstagram />} />
      </div>
    </div>
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
