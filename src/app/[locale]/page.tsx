import Hero from "@/components/Hero";
import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import AppointmentFlex from "./_components/AppointmentFlex";
import HomeFlex2 from "./_components/HomeFlex2";

export default function Home() {
  return (
    <div className="text-secondary-foreground overflow-hidden">
      <Hero />

      <div className="bg-primary/20 py-20">
        <Container>
          <AppointmentFlex />
        </Container>
      </div>
      <HomeFlex2/>
    </div>
  );
}
