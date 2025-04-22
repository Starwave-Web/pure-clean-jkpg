import { Button } from "../ui/button";
import SectionHeader from "../ui/section-header";

import Tekla from "@/assets/images/tekla.png";
import Endre from "@/assets/images/endre.png";
import EmployeeCard from "../ui/employee-card";
import Link from "next/link";

const Team = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col md:flex-row gap-0 md:gap-5 items-center my-[6.25rem] px-4">
        <div className="flex flex-col gap-5 my-[6.25rem] items-start md:w-1/2">
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
          <Link href="/booking">
            <Button variant="primary">Book an Appointment</Button>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <EmployeeCard
            image={Tekla}
            name="Tekla Tamon"
            role="Professional Cleaner"
            social={{ whatsapp: "+46 79-304 30 07", instagram: "tamontekla" }}
          />
          <EmployeeCard
            image={Endre}
            name="Endre Udvardi"
            role="Professional Cleaner"
            social={{ whatsapp: "+46 79-341 92 42", instagram: "udvardiendre" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
