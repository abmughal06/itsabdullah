import Link from "next/link";

export default function Header() {
  return (
    <section id="header" className="mx-24 p-3">
      <header className="flex flex-row justify-between items-center">
        <h1 className="text-4xl font-semibold font-serif text-primary">A.</h1>
        <div>
        {["Introduction", "Skills", "Experience", "Work", "Contact"].map(
          (e) => (
            <Link key={e} href={"#"+e} className="text-white font-light text-md pl-8 hover:underline hover:text-primary">
              {e}
            </Link>
          )
        )}
        </div>
      </header>
    </section>
  );
}
