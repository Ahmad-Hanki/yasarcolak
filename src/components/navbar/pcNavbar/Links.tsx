"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();
  const { locale } = useParams();

  const Links = [
    {
      href: "/" + locale + "/blogs",
      name: "Blog",
      active: pathname.includes("/blogs"),
    },
    {
      href: "/" + locale + "/iletisim",
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
          <li
            key={link.href}
            role="tab"
            className={cn(
              "tab transition-all hover:tab-active",
              link.active ? "tab-active" : ""
            )}
          >
            <Link
              className={cn(
                "text-secondary-foreground hover:text-blue-500/90",
                link.active ? " text-blue-500/90" : ""
              )}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Links;
