import { Button } from "../ui/button";
import SectionHeader from "../ui/section-header";

import Tekla from "@/assets/images/tekla.png"
import Endre from "@/assets/images/endre.png"
import EmployeeCard from "../ui/employee-card";

const Team = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto flex gap-5 items-center my-[6.25rem]">
        <div className="flex flex-col gap-5 my-[6.25rem] items-start w-1/2">
          <SectionHeader
            subtitle="OUR TEAM"
            title="This is a family business"
            alignment="start"
          />
          <p>
            We are a couple living in Jönköping, running a small family business
            with dedication and passion. Our mission is to provide quality
            cleaning services with a personal touch, ensuring every space we
            clean feels like home.
          </p>
          <Button variant="primary">Book an Appointment</Button>
        </div>
        <div className="flex items-center gap-5">
          <EmployeeCard image={Tekla} name="Tekla Tamon" role="Professional Cleaner" social={{whatsapp: "asd" , instagram: "asdf"}}/>
          <EmployeeCard image={Endre} name="Endre Udvardi" role="Professional Cleaner" social={{whatsapp: "asd" , instagram: "asdf"}}/>
        </div>
      </div>
    </section>
  );
};

export default Team;
