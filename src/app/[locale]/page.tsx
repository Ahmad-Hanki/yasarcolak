import Hero from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function Home() {

  return (
   <div className="text-secondary-foreground">
    <Hero />
   </div>
  );
}
