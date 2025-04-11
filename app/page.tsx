import PromotionBanner from "@/components/PromotionBanner";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-4 sm:gap-8 row-start-2 items-center sm:items-start mb-40 sm:mb-0">
        <PromotionBanner />
        <div className="max-w-6xl mx-5 sm:mx-auto sm:px-6">
          <Header />
        </div>
      </main>
    </div>
  );
}
