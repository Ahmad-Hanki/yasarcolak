
import Image from "next/image";
import logo from "@/assets/yasarcolak.png";
import whiteLogo from '@/assets/yasarcolakWhite.png';
import Link from "next/link";
const Logo = () => {

  return (
    <Link className="w-40 h-24  relative aspect-auto overflow-hidden" href={'/'}>
      <Image src={logo} alt="logo" className="object-contain object-center dark:hidden" fill/>
      <Image src={whiteLogo} alt="logo" className="object-contain object-center hidden dark:block" fill/>
    </Link>
  );
};

export default Logo;
