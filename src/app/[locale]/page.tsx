import Hero from "@/components/Hero";
import Container from "@/components/ui/Container";
import AppointmentFlex from "./_components/AppointmentFlex";
import HomeFlex2 from "./_components/HomeFlex2";
import HomeGrid2 from "./_components/HomeGrid2";
import ErcpEus from "@/components/Ercp-Eus";

export default function Home() {
  return (
    <div className="text-secondary-foreground overflow-hidden">
      <Hero />

      <div className="bg-primary/20 py-20">
        <Container>
          <AppointmentFlex />
        </Container>
      </div>
      <div className="pb-20">
        <Container>
          <HomeFlex2 />

          <HomeGrid2 />
        </Container>
      </div>

      <div className="py-20 bg-secondary/80">
        <Container>
          <ErcpEus />
          
        </Container>
      </div>
    </div>
  );
}
