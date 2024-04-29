"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();
  const { locale } = useParams();

  const Links = [
    {
      href: "/blogs",
      name: "Blog",
      active: pathname.includes("/blogs"),
    },
    {
      href: "/iletisim",
      name: locale == "en" ? "Contact" : "Iletisim",
      active: pathname.includes("/iletisim"),
    },
  ];
  return (
    <>
      {Links.map((link) => {
        if (locale == "en") {
          if (link.href.includes("/blogs")) return null;
        }
        return (
          <div key={link.href}>
            <li className="flex  bg-secondary/90">
              <Link
                className={cn("bg-secondary hover:bg-secondary hover:brightness-75", link.active? 'text-primary':'')}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
            <Separator />
          </div>
        );
      })}
    </>
  );
};

export default Links;
