import Image from "next/image";
import logo from "@/assets/yasarcolak.png";
import whiteLogo from "@/assets/yasarcolakWhite.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
const Logo = ({ f }: { f?: boolean }) => {
  return (
    <Link
      className={cn(" w-40 h-24  relative aspect-auto overflow-hidden", f? 'h-fit':'')}
      href={"/"}
    >
      {!f && (
        <>
        
          <Image
            src={logo}
            alt="logo"
            className="object-contain object-center dark:hidden"
            fill
          />
          <Image
            src={whiteLogo}
            alt="logo"
            className="object-contain object-center hidden dark:block"
            fill
          />
        </>
      )}
      {f && (
        <Image
          src={whiteLogo}
          alt="logo"
          className="object-contain object-center p-0"
        />
      )}
    </Link>
  );
};

export default Logo;
