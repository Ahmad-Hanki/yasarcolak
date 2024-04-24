import Image from "next/image"
import Container from "../ui/Container"
import Logo from "./Logo"
import PcNavbar from "./pcNavbar/PcNav"

const Navbar = () => {
  return (
    <nav className="bg-secondary">
        <Container>
            <div className="flex justify-between items-center">
                <Logo/>
                <PcNavbar/>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar