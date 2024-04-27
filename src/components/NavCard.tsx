"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavCardProps = {
  title: string;
  href: string;
};

const NavCard = ({ href, title }: NavCardProps) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "rounded-md bg-secondary text-secondary-foreground w-[90%] h-[90%] mx-auto",
        pathname.includes(href) ? "bg-primary/80 text-white" : "",
        href === "#" ? "w-full h-full" : ""
      )}
    >
      {href == "#" ? (
        <p className="font-serif p-6 text-center lg:text-start">{title}</p>
      ) : (
        <Link href={href} className="font-serif btn btn-ghost w-full flex justify-center items-center lg:justify-start">
          {title}
        </Link>
      )}
    </div>
  );
};

export default NavCard