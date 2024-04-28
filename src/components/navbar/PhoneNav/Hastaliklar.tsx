"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Hastalikar = () => {
  const pathname = usePathname();
  const { locale } = useParams();
  if (locale == "en") return null;

  const data = [
    {
      name: "Hasta",
      href: "/" + locale + "/endoskopik-mide-kucultmeff",
      active: pathname.includes("/endoskopik-mide-kucultmeff"),
    },
  ];

  return (
    <details>
      <summary className="bg-secondary hover:bg-secondary hover:brightness-75 ">
        Hastaliklar
      </summary>
      <ul>
        {data.map((link) => {
          return (
            <li key={link.href} className="flex  bg-secondary/90">
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

export default Hastalikar;
