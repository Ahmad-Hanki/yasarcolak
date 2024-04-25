import Image from "next/image"
import Container from "../ui/Container"
import Logo from "./Logo"
import PcNavbar from "./pcNavbar/PcNav"
import PhoneNav from "./PhoneNav/PhoneNav"

const Navbar = () => {
  return (
    <nav className="bg-secondary">
        <Container>
            <div className="flex justify-between items-center w-full">
                <Logo/>
                <PcNavbar/>
                <PhoneNav/>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar