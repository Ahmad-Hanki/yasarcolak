

import Link from "next/link";
import Container from "./ui/Container";
import { Home } from "lucide-react";
import { useLocale } from "next-intl";

interface SecHeroProps {
  titleEn: string;
  titleTr: string;
  pathEn: string;
  pathTr: string;
}

const SecHero = ({ titleEn, pathEn, pathTr, titleTr }: SecHeroProps) => {
  const locale = useLocale();

  const path =locale=='tr' ? pathTr : pathEn;
  const title =locale=='tr' ? titleTr : titleEn;
  return (
    <div className="bg-secondary/50 dark:bg-secondary/70  p-6">
      <Container>
        <div className="flex flex-col gap-4 items-center justify-center sm:items-start">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex gap-3">
            <Link href={"/"} className="space-x-2 flex">
              <Home size={20} />
              <p className="font-light">
                {locale == "en" ? "Main Page" : "Ana Sayfa"}
              </p>
            </Link>
            <p className="font-light">{`>`}</p>
            <p className="font-light text-primary">{path}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SecHero;
