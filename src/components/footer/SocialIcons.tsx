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
const SocialIcons = () => {
  return (
    <div className="flex gap-3 items-center">
      {socialMedia.map((link,i) => {
        return (
          <Link
          key={i}
            href={link.href}
            className="p-2  bg-primary/70 brightness-90 hover:brightness-125 m-auto"
          >
            {link.img}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
