"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useParams } from "next/navigation";

interface dataProps {
  t1: {
    title: string;
    link1: string;
    link2: string;
    link3: string;
    link4: string;
  };
}

const Endoskopi = ({t1}: dataProps) => {
  const { locale } = useParams();

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  
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
    <details
      open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      role="tab"
      className={cn(
        "tab hover:tab-active",
        pathname.includes("/gastroskopi") ||
          pathname.includes("/kolonoskopi") ||
          pathname.includes("/sigmoidoskopi") ||
          pathname.includes("/kapsul-endoskop")
          ? "tab-active  "
          : "tab"
      )}
    >
      <summary className="w-full">
        <Link
          href={"#"}
          className={cn(
            "z-10 text-secondary-foreground transition-all hover:text-blue-500/90",
            pathname.includes("/gastroskopi") ||
              pathname.includes("/kolonoskopi") ||
              pathname.includes("/sigmoidoskopi") ||
              pathname.includes("/kapsul-endoskop")
              ? "text-blue-500/90"
              : ""
          )}
        >
        {t1.title}
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

export default Endoskopi;
