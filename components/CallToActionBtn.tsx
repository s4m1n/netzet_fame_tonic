import Link from "next/link";
import Image from "next/image";

const CallToActionButton = () => (
  <div className="w-full flex flex-col items-center gap-2">
    <Link
      data-testid="cta-button"
      href="#"
      passHref
      className="bg-gradientpink text-white font-bold text-[20px] py-2 px-4 rounded-[10px] w-full text-center hover:bg-gradientpink/80 shadow-[2px_2px_10px_rgba(0,231,249,1)] flex justify-center items-center gap-2"
    >
      GET STARTED
      <Image src="/right-arrow.png" alt="Right arrow" width={11} height={6} />
    </Link>

    <p className="text-xs font-normal text-center">
      1-minute quiz for personalized insights
    </p>
  </div>
);

export default CallToActionButton;
