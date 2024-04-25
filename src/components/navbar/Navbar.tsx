import Image from "next/image";
import Container from "../ui/Container";
import Logo from "./Logo";
import PcNavbar from "./pcNavbar/PcNav";
import PhoneNav from "./PhoneNav/PhoneNav";
import { ModeToggle } from "../ui/ModeToggle";

const Navbar = () => {
  return (
    <nav className="bg-secondary z-20">
      <Container>
        <div className="flex justify-between items-center w-full z-20">
          <Logo />
          <PcNavbar />
          <div className="xl:hidden flex gap-3 items-center z-20">
            <ModeToggle  />
            <PhoneNav />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
