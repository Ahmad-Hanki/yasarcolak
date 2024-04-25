"use client";
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
    <details>
      <summary className="bg-secondary hover:bg-secondary hover:brightness-75">
        {content}
      </summary>
      <ul className="bg-secondary">
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </details>
  );
};

export default EnTr;
