import { useLocale } from "next-intl";
import photo1 from "@/assets/homeGrid3Photo1.webp";
import photo2 from "@/assets/homeGrid3Photo2.webp";
import photo3 from "@/assets/homeGrid3Photo3.webp";
import photo4 from "@/assets/homeGrid3Photo4.webp";
import photo5 from "@/assets/homeGrid3Photo5.webp";
import photo6 from "@/assets/homeGrid3Photo6.webp";
import Image from "next/image";

const HomeGrid3 = () => {
  const header =
    useLocale() == "en"
      ? "We help you lose weight by reducing the volume of your stomach and creating a feeling of fullness through non-surgical obesity treatments."
      : "Cerrahi Olmayan Obezite Uygulamalarıyla Mide Hacmini Azaltarak ve Midenizde Tokluk Yaratarak Kilo Vermenize Yardımcı Oluyoruz.";
  const data = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <div className="space-y-10">
      <h1 className="text-4xl text-center text-secondary-foreground/80">
        {header}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {data.map((img, i) => (
          <div
            key={i}
            className="relative  aspect-square w-full rounded-md border border-secondary-foreground shadow-md shadow-secondary-foreground"
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGrid3;
