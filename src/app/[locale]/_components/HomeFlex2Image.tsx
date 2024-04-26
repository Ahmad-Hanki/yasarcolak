import Image from "next/image";
import homeFlex2p1 from "@/assets/homeFlex2Photo1.webp";
import homeFlex2p2 from "@/assets/homeFlex2Photo2.webp";
const HomeFlex2Image = () => {
  return (
    <div className="relative flex flex-1 overflow-hidden justify-center lg:justify-end  items-start h-full aspect-square ">
      <div className="relative aspect-square mx-auto lg:mx-0 w-[80%]">
        <Image
          src={homeFlex2p1}
          className="object-cover object-center "
          alt=""
        />
        <div className="absolute aspect-square w-[80%] sm:w-[70%] md:w-[60%] -bottom-20 sm:-bottom-48 lg:-bottom-20 -left-14 z-14">
          <Image
            src={homeFlex2p2}
            className="object-cover object-center "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFlex2Image;
