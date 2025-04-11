import PromotionBanner from "@/components/PromotionBanner";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center sm:items-start gap-4 sm:gap-8 row-start-2 mb-40 sm:mb-0">
        <PromotionBanner />
      </main>
    </div>
  );
}
