import PromotionBanner from "@/components/PromotionBanner";
import Header from "@/components/Header";
import FeatureList from "@/components/FeatureList";
import features from "./data.json";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-4 sm:gap-8 row-start-2 items-center sm:items-start mb-40 sm:mb-0">
        <PromotionBanner />
        <div className="max-w-6xl mx-5 sm:mx-auto sm:px-6">
          <Header />
          <div className="flex flex-col-reverse items-center sm:flex-row relative">
            <div className="flex flex-col items-center sm:items-start sm:max-w-[48%] relative z-10 sm-pr-8">
              <h1 className="text-[25px] sm:text-[35px] font-bold text-center sm:text-left ">
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              <h1 className="text-[25px] sm:text-[35px] text-center sm:text-left font-bold text-accentblue [text-shadow:0_4px_4px_rgba(252,0,78,1)] ">
                Discover your way to success with Fametonic:
              </h1>
              <FeatureList features={features} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
