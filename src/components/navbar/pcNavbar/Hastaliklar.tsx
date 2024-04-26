"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

const Hastaliklar = () => {
  const pathname = usePathname();
  const { locale } = useParams();
  const [open, setOpen] = useState(false);

  if (locale == "en") return null;

  const data = [
    {
      name: "Hasta",
      href: "/fh",
      active: pathname.includes("/fh"),
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
        pathname.includes("/fh")
          ? "tab-active  "
          : "tab"
      )}
    >
      <summary className="w-full">
        <Link
          href={"#"}
          className={cn(
            "z-10 text-secondary-foreground transition-all hover:text-blue-500/90 w-full",

            pathname.includes("/fh")
              ? "text-blue-500/90"
              : ""
          )}
        >
          {"HASTALIKLAR"}
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

export default Hastaliklar;
