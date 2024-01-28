import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

import { data } from "../constants/data";

export default function SocialLinks() {
  return (
    <section className="fixed top-0 right-[21%] w-[58px]">
      <div className="flex flex-col my-10 items-center">
        <div className="py-2 px-4 rounded-lg bg-clrHotCineman text-3xl mb-5">
          A
        </div>
        <div className="w-[1px] h-72 bg-clrManhattan bg-opacity-40 mb-5"></div>
        <div className="flex flex-col gap-5">
          <LinkWithIcon
            url={data.socialLinks.facebook}
            icon={<FaFacebookF />}
          />
          <LinkWithIcon
            url={data.socialLinks.instagram}
            icon={<FaInstagram />}
          />
          <LinkWithIcon
            url={data.socialLinks.linkedin}
            icon={<FaLinkedinIn />}
          />
          <LinkWithIcon url={data.socialLinks.twitter} icon={<FaXTwitter />} />
          <LinkWithIcon url={data.socialLinks.github} icon={<FaGithub />} />
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
      <div className="p-2 border border-clrWhite bg-clrSteelBlue cursor-pointer bg-opacity-50 hover:bg-opacity-30 rounded-full">
        {icon}
      </div>
    </a>
  );
};
