"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const data = [
    {
      name: "Poem",
      href: "/poem",
      active: pathname.includes("/poem"),
    },
    {
      name: "Ercp",
      href: "/ercp",
      active: pathname.includes("/ercp"),
    },
    {
      name: "Eus",
      href: "/eus",
      active: pathname.includes("/eus"),
    },
    {
      name: "Emr",
      href: "/emr",
      active: pathname.includes("/emr"),
    },
    {
      name: "Poem",
      href: "/esd",
      active: pathname.includes("/esd"),
    },
    {
      name: "Eftr",
      href: "/eftr",
      active: pathname.includes("/eftr"),
    },
    {
      name: t3.link8,
      href: "/endoskopik-stent-uygulamalari",
      active: pathname.includes("/endoskopik-stent-uygulamalari"),
    },
    {
      name: t3.link9,
      href: "/peg",
      active: pathname.includes("/peg"),
    },
    {
      name: t3.link10,
      href: "/argon-plazma-koagulasyon",
      active: pathname.includes("/argon-plazma-koagulasyon"),
    },
  ];

  const link1Data = [
    {
      name: t3.link1.link1,
      href: "/arma",
      active: pathname.includes("/arma"),
    },
    {
      name: t3.link1.link2,
      href: "/endoskopik-fundoplikasyon",
      active: pathname.includes("/endoskopik-fundoplikasyon"),
    },
    {
      name: t3.link1.link3,
      href: "/stretta",
      active: pathname.includes("/stretta"),
    },
    {
      name: t3.link1.link4,
      href: "/ph-metre",
      active: pathname.includes("/ph-metre"),
    },
    {
      name: t3.link1.link5,
      href: "/ozofagus-manometrisi",
      active: pathname.includes("/ozofagus-manometrisi"),
    },
  ];

  return (
    <details className=" ">
      <summary className="bg-secondary hover:bg-secondary hover:brightness-75 border-t-0">
        {t3.title}
      </summary>
      <ul>
        <li className="flex">
          <details>
            <summary className="bg-secondary hover:bg-secondary hover:brightness-75">
              {t3.link1.title}
            </summary>
            <ul className="bg-secondary">
              {link1Data.map((link) => {
                return (
                  <li key={link.href} className="flex bg-secondary/90 ">
                    <Link
                      className={cn(
                        "z-10  transition-all flex-1 hover:bg-primary p-4",
                        link.active ? "bg-primary" : ""
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
        {data.map((link) => {
          return (
            <li key={link.href} className="flex bg-secondary/90 ">
              <Link
                className={cn(
                  "z-10  transition-all flex-1 hover:bg-primary p-4",
                  link.active ? "bg-primary" : ""
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

export default Advanced;
