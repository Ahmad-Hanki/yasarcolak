
import Image from "next/image";
import logo from "@/assets/yasarcolak.png";
import whiteLogo from '@/assets/yasarcolakWhite.png';
const Logo = () => {

  return (
    <div className="w-40 h-24  relative aspect-auto overflow-hidden">
      <Image src={logo} alt="logo" className="object-contain object-center dark:hidden" fill/>
      <Image src={whiteLogo} alt="logo" className="object-contain object-center hidden dark:block" fill/>
    </div>
  );
};

export default Logo;
