import React from "react";

const PromotionBanner = () => {
  return (
    <div
      className="w-full text-white text-center font-extrabold flex flex-wrap items-center justify-center 
                  bg-gradient-to-r from-gradientpink via-gradientpurple to-gradientcyan 
                  lg:h-[46px] h-auto py-5 lg:py-0 
                  text-[16px] sm:text-[22px] leading-tight"
    >
      <span className="ml-1 text-accentblue">🚀 FRESH BEGINNINGS SALE:</span>
      <span className="ml-1">Extra 25% OFF,</span>
      <span className="ml-1 hidden sm:inline">
        Limited Spots - start your journey today!
      </span>
      <span className="block sm:hidden w-full text-center">
        Limited Spots - start your journey today!
      </span>
    </div>
  );
};

export default PromotionBanner;
