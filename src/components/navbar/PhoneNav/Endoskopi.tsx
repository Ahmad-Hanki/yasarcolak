"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface dataProps {
  t1: {
    title: string;
    link1: string;
    link2: string;
    link3: string;
    link4: string;
  };
}

const Endoskopi = ({ t1 }: dataProps) => {
  const pathname = usePathname();
  const { locale } = useParams();

  const data = [
    {
      name: t1.link1,
      href: "/" + locale + "/gastroskopi",
      active: pathname.includes("/gastroskopi"),
    },
    {
      name: t1.link2,
      href: "/" + locale + "/kolonoskopi",
      active: pathname.includes("/kolonoskopi"),
    },
    {
      name: t1.link3,
      href: "/" + locale + "/sigmoidoskopi",
      active: pathname.includes("/sigmoidoskopi"),
    },
    {
      name: t1.link4,
      href: "/" + locale + "/kapsul-endoskop",
      active: pathname.includes("/kapsul-endoskop"),
    },
  ];
  return (
      <details>
        <summary className="bg-secondary hover:bg-secondary hover:brightness-75">{t1.title}</summary>
        <ul className="bg-secondary">
          {data.map((link) => {
            return (
              <li key={link.href} className="flex bg-secondary/90 ">
                <Link
                  className={cn(
                    "z-10  transition-all flex-1 hover:bg-primary p-4",
                    link.active ? "" : ""
                  )}
                  href={link.href}
                >
                  {link.name}
                </Link>{" "}
              </li>
            );
          })}
        </ul>
      </details>
  );
};

export default Endoskopi;
