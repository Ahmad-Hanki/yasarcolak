import React from "react";
import Container from "../ui/Container";
import { ModeToggle } from "../ui/ModeToggle";
import { Phone, Mail } from "lucide-react";
import Facebook from "@/assets/Facebook";
import Link from "next/link";
import Instagram from "@/assets/Instagram";
import Pinterest from "@/assets/Pinterest";
import Youtube from "@/assets/Youtube";
import Linkedin from "@/assets/Linkedin";
const socialMedia = [
  {
    img: <Facebook height={30} width={30} />,
    href: "https://www.facebook.com/people/profdryasarcolak/100072068921760",
  },
  {
    img: <Instagram height={30} width={30} />,
    href: "https://www.instagram.com/prof.dr.yasarcolak",
  },
  {
    img: <Pinterest height={30} width={30} />,
    href: "https://tr.pinterest.com/profdryasarcolak",
  },
  {
    img: <Youtube height={30} width={30} />,
    href: "https://www.youtube.com/@prof.dr.yasarcolak",
  },
  {
    img: <Linkedin height={30} width={30} />,
    href: "https://www.linkedin.com/in/prof-dr-yasar-colak-478a3818a",
  },
];

const HeadNav = () => {
  return (
    <div className="bg-primary/80 hidden md:block">
      <Container>
        <div className="py-3 flex justify-between items-center text-white">
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <Phone />
              <Link href="tel:+905461109112">+90 546 110 91 12</Link>
            </div>
            <div className="flex items-center gap-1">
              <Mail />
              <Link href={"mailto: +90 546 110 91 12info@yasarcolak.com"}>
                info@yasarcolak.com
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            {socialMedia.map((icon) => {
              return <Link className="border-l border-l-white hover:text-primary" key={icon.href} href={icon.href}> {icon.img}</Link>;
            })}
            <ModeToggle />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeadNav;
