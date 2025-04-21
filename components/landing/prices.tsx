const Prices = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto bg-primary-blue rounded-md text-white p-9 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="uppercase tracking-wider text-[1.125rem]/[1.3125rem] font-medium">
            Our Prices
          </h3>
          <p className="text-[1.125rem]/[1.3125rem] font-normal">
            We offer competitive rates to fit your budget without compromising
            on quality.
          </p>
        </div>
        <ul className="flex flex-col gap-5 whitespace-nowrap">
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p className=" ">Quote</p>
            <div className="w-full border border-white border-dashed"/>
            <p>Free</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p className=" ">House Cleaning</p>
            <div className="w-full border border-white border-dashed"/>
            <p>350 SEK/hour</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p className=" ">Office Cleaning</p>
            <div className="w-full border border-white border-dashed"/>
            <p>650 SEK/hour</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p className=" ">Deep Cleaning</p>
            <div className="w-full border border-white border-dashed"/>
            <p>450 SEK/hour</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p className=" ">Move-In/Move-Out Cleaning</p>
            <div className="w-full border border-white border-dashed"/>
            <p>500 SEK/hour</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Prices;
