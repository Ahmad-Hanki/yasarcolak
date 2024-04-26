import { useTranslations } from "next-intl";
import Link from "next/link";

const ErcpEus = () => {
  const ercp = useTranslations("ercp");
  const eus = useTranslations("eus");

  return (
    <div className=" flex flex-col md:flex-row gap-6">
      <div className="min-h-full flex-1 flex flex-col justify-between gap-9">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-primary/70 ">
            {eus("header")}
          </h1>
          <p className="font-light">{eus("description")}</p>
        </div>
        <Link
          className="w-fit btn px-9 bg-primary text-white hover:brightness-75 hover:bg-primary"
          href={"/eus"}
        >
          {eus("info")}
        </Link>
      </div>
      <div className="min-h-full flex-1 flex flex-col justify-between gap-9 ">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-primary/70 ">
            {ercp("header")}
          </h1>
          <p className="font-light">{ercp("description")}</p>
        </div>
        <Link
          className="w-fit btn px-9 bg-primary text-white hover:brightness-75 hover:bg-primary"
          href={"/ercp"}
        >
          {ercp("info")}
        </Link>
      </div>
    </div>
  );
};

export default ErcpEus;
