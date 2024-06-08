import { data } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function LeftPanel() {
  return (
    <section className="fixed top-0 left-[21%] w-[58px]">
      <div className="flex flex-col bg-primary my-12 mx-auto px-5 py-7 gap-10 rounded-lg">
        {data.icon.map((e, i) => (
          <Link key={e} href={data.sections[i]}>
            <Image key={e} src={e} alt="ICONS" height={32} width={32} />
          </Link>
        ))}
      </div>
    </section>
  );
}
