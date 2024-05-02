import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
const Logo = () => {
  return (
    <Link
      className={cn(" w-40 h-24  relative aspect-auto overflow-hidden")}
      href={"/"}
    >
      <Image
        src={logo}
        alt="logo"
        className="object-cover object-center "
        fill
      />
    </Link>
  );
};

export default Logo;
