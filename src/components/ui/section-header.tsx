const SectionHeader = ({
  subtitle,
  title,
  alignment,
}: {
  subtitle: string;
  title: string;
  alignment: "start" | "center" | "end";
}) => {
  return (
    <div className={`flex flex-col gap-4 items-${alignment}`}>
      <p className="uppercase text-[1.125rem]/[1.3125rem] font-medium text-primary-blue tracking-wider">{subtitle}</p>
      <h1 className="uppercase text-[2rem]/[2.375rem] font-bold text-dark-grey">{title}</h1>
    </div>
  );
};

export default SectionHeader;
