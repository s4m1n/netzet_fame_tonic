import Image from "next/image";

const TrendingAnalysisImage = () => {
  return (
    <div className="relative sm:-ml-20 z-0 w-full sm:w-auto">
      <Image
        src="/trending-analysis.png"
        alt="Trending Analysis"
        width={666}
        height={679}
      />
    </div>
  );
};

export default TrendingAnalysisImage;
