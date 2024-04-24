'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

interface dataProps {
  t2: {
    title: string;
    link1: string;
    link2: string;

  };
}

const Obezite = ({t2}:dataProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
    <details 
      open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      role="tab"
      className={cn(
        "tab hover:tab-active w-full",
        pathname.includes("/mide-balonu") ||
          pathname.includes("/endoskopik-mide-kucultme")
          ? "tab-active  "
          : "tab"
      )}
    >
      <summary className="w-full">
        <Link
          href={"#"}
          className={cn(
            "z-10 text-secondary-foreground transition-all hover:text-blue-500/90 w-full" ,
            pathname.includes("/mide-balonu") ||
              pathname.includes("/endoskopik-mide-kucultme")
              ? "text-blue-500/90"
              : ""
          )}
        >
          {t2.title}
        </Link>
      </summary>
      <div className="bg-inherit pt-3 cursor-default w-full">
        <ul className=" rounded-2xl bg-secondary-foreground z-20 space-y-3 w-full">
          {data.map((link) => {
            return (
              <li key={link.href} className="flex">
                <Link
                  className={cn(
                    "z-10 text-secondary/80 transition-all hover:text-secondary/90 flex-1 hover:bg-primary p-4",
                    link.active ? "text-secondary" : ""
                  )}
                  href={link.href}
                >
                  {link.name}
                </Link>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
};

export default Obezite;
