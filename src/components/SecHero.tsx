import Link from "next/link";
import Container from "./ui/Container";
import { Home } from "lucide-react";
import { useLocale } from "next-intl";
interface SecHeroProps {
  title: string;
  path: string;
}

const SecHero = ({ path, title }: SecHeroProps) => {
  return (
    <div className="bg-secondary/50 dark:bg-secondary/70  p-6">
      <Container>
        <div className="flex flex-col gap-4 items-center justify-center sm:items-start">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex gap-3">
            <Link href={"/"} className="space-x-2 flex">
              <Home size={20} />
              <p className="font-light">
                {useLocale() == "en" ? "Main Page" : "Ana Sayfa"}
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
