import Whatsapp from "@/assets/Whatsapp";
import profDr from "@/assets/profDr.webp";
import MotionDiv from "@/components/ui/MotionDiv";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const ProfDr = () => {
  const header =
    useLocale() == "en"
      ? "In the past, a surgeon's skill was measured by the size of the incision they made. Nowadays, the proficiency of a gastroenterologist or surgeon is evaluated based on how small the incision is. In the future, many surgical procedures will be performed through advanced endoscopic applications."
      : "Eskiden bir cerrahın ustalığı, yaptığı kesinin büyüklüğüne göre ölçülürdü. Günümüzde ise, bir gastroenteroloji doktorunun ya da cerrahın ustalığı, kesinin ne kadar küçük yapıldığına göre değerlendirilmektedir. Gelecekte birçok cerrahi işlem, ileri endoskopik uygulamalarla gerçekleştirilecek.";

  return (
    <div className="flex flex-col gap-7 lg:flex-row lg:gap-3">
      <div className="flex flex-1 flex-col gap-7">
        <div className="flex flex-col flex-1 gap-3">
          <h2 className="bg-primary/40 text-primary font-serif text-xl text-start w-fit">
            {useLocale() == "en"
              ? "GASTROENTEROLOGY SPECIALIST"
              : "GASTROENTEROLOJİ UZMANI"}
          </h2>
          <h1 className="text-3xl">Prof. Dr. Yaşar Çolak</h1>
          <p className="font-light">{header}</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              scale: [0.7, 1, 1.5, 1],
            }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5 }}
          >
            <p className="text-5xl text-primary font-serif">35,000 +</p>
          </MotionDiv>
          <p className="text-3xl font-light ">
            {useLocale() == "en"
              ? "ENDOSCOPIC APPLICATION"
              : "ENDOSKOPİK UYGULAMA"}
          </p>
          <Link
            href={"https://wa.me/905461109112"}
            className="btn bg-green-700 hover:bg-green-900"
          >
            <Whatsapp width={30} />{" "}
            {useLocale() == "en" ? "WhatsApp Contact" : "WhatsApp İletişim"}
          </Link>

          <Link
            href={"/prof-dr-yasar-colak"}
            className="px-9 btn bg-primary/80 hover:bg-primary text-white"
          >
            {"PROF. DR. YAŞAR ÇOLAK"}
          </Link>
        </div>
      </div>
      <div className="overflow-hidden relative  aspect-square lg:aspect-auto rounded-md md:w-[60%] md:mx-auto">
        <Image
          src={profDr}
          alt="f"
          fill
          className="object-contain object-center"
        />
      </div>
    </div>
  );
};

export default ProfDr;
