import { Phone, Mail } from "lucide-react";
import Location from "@/assets/Location";
import { useTranslations } from "next-intl";
import MotionDiv from "@/components/ui/MotionDiv";
import Link from "next/link";

const ContactClient = () => {
  const translate = useTranslations("contantPage");

  const data = [
    {
      title: translate("h1"),
      des: translate("h1d1"),
      img: (
        <Location
          height={60}
          width={60}
          className="bg-primary/50 text-white rounded-md p-2"
        />
      ),
      href: "https://www.google.com/maps/place/Prof.+Dr.+Ya%C5%9Far+%C3%87olak+-+Gastroenteroloji+ve+%C4%B0leri+Endoskopik+Uygulamalar+Uzman%C4%B1/@41.0407468,28.956107,15z/data=!4m6!3m5!1s0x14cab75d1754b00b:0x89196824b2db2cde!8m2!3d41.0616463!4d28.9724857!16s%2Fg%2F11ts9gf943?entry=ttu",
    },
    {
      title: translate("h2"),
      des: translate("h2d1"),
      img: (
        <Phone size={60} className="bg-primary/50 text-white rounded-md p-2" />
      ),
      href: "tel:" + translate("h2d1"),
    },
    {
      title: translate("h3"),
      des: translate("h3d1"),
      img: (
        <Mail size={60} className="bg-primary/50 text-white rounded-md p-2" />
      ),
      href: "mailto:" + translate("h3d1"),
    },
  ];

  return (
    <div className="py-28 space-y-12">
      <div className="  flex flex-wrap gap-4 justify-center">
        {data.map((d, i) => {
          return (
            <div
              key={i}
              className="shadow-lg bg-secondary/70 aspect-square rounded-lg w-[300px]  flex flex-col items-center py-10 gap-12"
            >
              <MotionDiv
                whileHover={{ scale: 1.07 }}
                className="cursor-pointer"
              >
                <Link href={d.href}>{d.img}</Link>
              </MotionDiv>
              <div>
                {" "}
                <h1 className="font-bold text-center text-2xl">{d.title}</h1>
                <p className="text-center">{d.des}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5617223372114!2d28.6453056!3d41.012965099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f0a4ad9473b%3A0xbf7a6e5db0269867!2sMedicana%20International%20Istanbul!5e0!3m2!1sen!2str!4v1714647275285!5m2!1sen!2str"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[80vh]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactClient;
