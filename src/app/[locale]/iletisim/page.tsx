import Container from "@/components/ui/Container"
import ContactClient from "./_components/ContactClient"
import SecHero from "@/components/SecHero"


const ContactPage = () => {
  return (
    <div>
        <Container>
            <div>
                <SecHero pathEn="CONTACT" pathTr="İLETİŞİM"  titleEn="Contact" titleTr="İletişim"/>
                <ContactClient />
            </div>
        </Container>
    </div>
  )
}

export default ContactPage