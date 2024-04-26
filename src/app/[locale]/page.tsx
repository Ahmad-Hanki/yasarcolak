import Hero from "@/components/Hero";
import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import AppointmentFlex from "./_components/AppointmentFlex";

export default function Home() {
  return (
    <div className="text-secondary-foreground overflow-hidden">
      <Hero />

      <div className="bg-secondary/70 py-10">
        <Container>
          <AppointmentFlex />
        </Container>
      </div>
    </div>
  );
}
