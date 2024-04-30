import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import PhMetreClient from "./_components/PhMetreClient";

const page = () => {
  return (
    <div>
      <SecHero
        titleEn=" PH Meter        "
        pathEn="PH METER        "
        pathTr=" PH METRE        "
        titleTr=" PH Metre        "
      />
      <div className="py-20">
        <Container>
          <PhMetreClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
