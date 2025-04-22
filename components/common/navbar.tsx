import { BookingIcon, Logo } from "../icons/common";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex items-center justify-between gap-6">
          <Logo />
          <p className="text-black text-[1.5rem]/[1.75rem] font-medium [font-variant:small-caps]">
            PureClean Jönköping
          </p>
        </div>
        <div>
          <ul className="flex items-center justify-between gap-8 uppercase text-[14px]/[16px] text-dark-grey cursor-pointer">
            <li className="hover:text-black actice:text-black">Home</li>
            <li className="hover:text-black actice:text-black">About Us</li>
            <li className="hover:text-black actice:text-black">Services</li>
            <li className="hover:text-black actice:text-black">Prices</li>
            <li className="hover:text-black actice:text-black">Contact</li>
            <li className="hover:text-black actice:text-black">SV | EN</li>
          </ul>
        </div>
        <Button variant="primary" >
          <BookingIcon />
          Book an Appointment
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
