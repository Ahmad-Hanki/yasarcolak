import Image from "next/image";
import logo from "@/assets/yasarcolak.png";
const Logo = () => {
  return (
    <div className="w-32 h-16  relative aspect-auto overflow-hidden">
      <Image src={logo} alt="logo" className="object-contain object-center" fill/>
    </div>
  );
};

export default Logo;
