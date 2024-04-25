"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface dataProps {
  t2: {
    title: string;
    link1: string;
    link2: string;
  };
}

const Obezite = ({ t2 }: dataProps) => {

    const pathname = usePathname();
    const { locale } = useParams();
    const data = [
        {
          name: t2.link1,
          href:"/"+locale+ "/endoskopik-mide-kucultme",
          active: pathname.includes("/endoskopik-mide-kucultme"),
        },
        {
          name: t2.link2,
          href: "/"+locale+ "/mide-balonu",
          active: pathname.includes("/mide-balonu"),
        },
      ];
  return (
    <details>
      <summary className="bg-secondary hover:bg-secondary hover:brightness-75">{t2.title}</summary>
      <ul>
        {data.map((link) => {
          return (
            <li key={link.href} className="flex  bg-secondary/90">
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

export default Obezite;
