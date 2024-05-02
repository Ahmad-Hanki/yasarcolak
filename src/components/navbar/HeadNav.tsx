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
              <Link href="tel:+905012804002">+90 501 280 40 02</Link>
            </div>
            <div className="flex items-center gap-1">
              <Mail />
              <Link href={"mailto:info@drbarisyilmaz.com"}>
              info@drbarisyilmaz.com
              </Link>
            </div>
          </div>

          <div className="flex space-x-1">
            {socialMedia.map((icon) => {
              return (
                <div className="flex space-x-1 justify-center" key={icon.href}>
                  <Link
                    className=" hover:text-primary mx-auto"
                    href={icon.href}
                  >
                    {" "}
                    {icon.img}
                  </Link>
                  <div className="h-full w-[1px] bg-white" />
                </div>
              );
            })}
            <ModeToggle />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeadNav;
