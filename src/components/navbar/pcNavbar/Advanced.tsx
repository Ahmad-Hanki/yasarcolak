"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

interface AdvancedProps {
  t3: {
    title: string;
    link1: {
      title: string;
      link1: string;
      link2: string;
      link3: string;
      link4: string;
      link5: string;
    };
    link2: string;
    link3: string;
    link4: string;
    link5: string;
    link6: string;
    link7: string;
    link8: string;
    link9: string;
    link10: string;
  };
}

const Advanced = ({ t3 }: AdvancedProps) => {
  const { locale } = useParams();

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const data = [
    {
      name: "Poem",
      href: "/" + locale + "/poem",
      active: pathname.includes("/poem"),
    },
    {
      name: "Ercp",
      href: "/" + locale + "/ercp",
      active: pathname.includes("/ercp"),
    },
    {
      name: "Eus",
      href: "/" + locale + "/eus",
      active: pathname.includes("/eus"),
    },
    {
      name: "Emr",
      href: "/" + locale + "/emr",
      active: pathname.includes("/emr"),
    },
    {
      name: "Poem",
      href: "/" + locale + "/esd",
      active: pathname.includes("/esd"),
    },
    {
      name: "Eftr",
      href: "/" + locale + "/eftr",
      active: pathname.includes("/eftr"),
    },
    {
      name: t3.link8,
      href: "/" + locale + "/endoskopik-stent-uygulamalari",
      active: pathname.includes("/endoskopik-stent-uygulamalari"),
    },
    {
      name: t3.link9,
      href: "/" + locale + "/peg",
      active: pathname.includes("/peg"),
    },
    {
      name: t3.link10,
      href: "/" + locale + "/argon-plazma-koagulasyon",
      active: pathname.includes("/argon-plazma-koagulasyon"),
    },
  ];

  const link1Data = [
    {
      name: t3.link1.link1,
      href: "/" + locale + "/arma",
      active: pathname.includes("/arma"),
    },
    {
      name: t3.link1.link2,
      href: "/" + locale + "/endoskopik-fundoplikasyon",
      active: pathname.includes("/endoskopik-fundoplikasyon"),
    },
    {
      name: t3.link1.link3,
      href: "/" + locale + "/stretta",
      active: pathname.includes("/stretta"),
    },
    {
      name: t3.link1.link4,
      href: "/" + locale + "/ph-metre",
      active: pathname.includes("/ph-metre"),
    },
    {
      name: t3.link1.link5,
      href: "/" + locale + "/ozofagus-manometrisi",
      active: pathname.includes("/ozofagus-manometrisi"),
    },
  ];

  const isAnyActive =
    link1Data.some((item) => item.active) || data.some((item) => item.active);

  return (
    <details
      open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      role="tab"
      className={cn("tab hover:tab-active", isAnyActive ? "tab-active" : "")}
    >
      <summary className="w-full">
        <Link
          href={"#"}
          className={cn(
            "z-10 text-secondary-foreground transition-all hover:text-blue-500/90",
            isAnyActive ? "text-blue-500/90" : ""
          )}
        >
          {t3.title}
        </Link>
      </summary>
      <div className="bg-inherit pt-3 cursor-default w-full">
        <ul className=" rounded-2xl bg-secondary-foreground z-20 space-y-3 w-full pt-3">
          <li>
            <details>
              <summary className="px-4">{t3.link1.title}</summary>
              <ul>
                {link1Data.map((link) => {
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
            </details>
          </li>
          <li>
            <Separator />
          </li>
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

export default Advanced;
