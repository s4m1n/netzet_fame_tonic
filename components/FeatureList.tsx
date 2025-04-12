import Image from "next/image";

type Feature = {
  id: number;
  icon: string;
  alt: string;
  description: string;
};

const FeatureList = ({ features }: { features: Feature[] }) => (
  <ul className="text-[16px] text-left gap-2 mt-4">
    {features.map((feature) => (
      <li key={feature?.id} className="flex items-center gap-2 py-1.5">
        <Image
          aria-hidden
          src={feature.icon}
          alt={feature.alt}
          width={22}
          height={22}
        />
        <span>{feature.description}</span>
      </li>
    ))}
  </ul>
);

export default FeatureList;
