import PromotionBanner from "@/components/PromotionBanner";
import Header from "@/components/Header";
import FeatureList from "@/components/FeatureList";
import features from "./data.json";
import CallToActionBtn from "@/components/CallToActionBtn";
import TrendingAnalysisImage from "@/components/TrendingAnalysisImage";
import FootNote from "@/components/FootNote";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-4 sm:gap-8 row-start-2 items-center sm:items-start mb-40 sm:mb-0">
        <PromotionBanner />

        <div className="max-w-6xl mx-5 sm:mx-auto sm:px-6">
          <Header />

          <div className="flex flex-col-reverse sm:flex-row items-center relative sm:ml-5 sm:mt-5">
            <div className="flex flex-col items-center sm:items-start sm:max-w-[48%] relative z-10 sm:pr-8">
              <h1 className="text-[25px] sm:text-[35px] font-bold text-center sm:text-left">
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              <h1 className="text-[25px] sm:text-[35px] font-bold text-center sm:text-left text-accentblue [text-shadow:0_4px_4px_rgba(252,0,78,1)]">
                Discover your way to success with Fametonic:
              </h1>

              <FeatureList features={features} />

              {/* CTA for desktop */}
              <div className="hidden sm:flex flex-col gap-[10px] w-full sm:w-[313px] items-center mt-6">
                <CallToActionBtn />
              </div>

              {/* CTA for mobile - sticky footer */}
              <div className="flex sm:hidden flex-col gap-[10px] w-full sm:w-[313px] items-center fixed bottom-0 bg-black py-10 px-5">
                <CallToActionBtn />
              </div>

              <FootNote />
            </div>

            <TrendingAnalysisImage />
          </div>
        </div>
      </main>
    </div>
  );
}
