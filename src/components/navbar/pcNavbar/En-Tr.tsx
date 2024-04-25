"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import UK from "@/assets/UK.jpg";
import { useLocale } from "next-intl";
import TR from "@/assets/TR.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";
const EnTr = () => {
  const loclae = useLocale();
  let content;
  const pathname = usePathname();
  let link;
  if (loclae == "en") {
    link = pathname.split("/en")[1];
    content = (
      <div className="flex gap-3 items-center">
        <div className="relative overflow-hidden aspect-square w-6 h-4">
          <Image
            src={UK}
            alt="Uk"
            fill
            className="object-center object-cover"
          />
        </div>
        <p className="text-secondary-foreground">English</p>
      </div>
    );
  } else {
    link = pathname.split("/tr")[1];

    content = (
      <div className="flex gap-3 items-center">
        <div className="relative overflow-hidden aspect-square w-6 h-4">
          <Image
            src={TR}
            alt="TR"
            fill
            className="object-center object-cover"
          />
        </div>
        <p className="text-secondary-foreground">Türkçe</p>
      </div>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="lg:tab text-secondary-foreground" asChild>
        {content}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={"/en" + link}>
            <div className="flex gap-3 items-center">
              <div className="relative overflow-hidden aspect-square w-6 h-4">
                <Image
                  src={UK}
                  alt="Uk"
                  fill
                  className="object-center object-cover"
                />
              </div>
              <p>English</p>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/tr" + link}>
            <div className="flex gap-3 items-center">
              <div className="relative overflow-hidden aspect-square w-6 h-4">
                <Image
                  src={TR}
                  alt="TR"
                  fill
                  className="object-center object-cover"
                />
              </div>
              <p>Türkçe</p>
            </div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EnTr;
