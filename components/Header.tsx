"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const navigationLinks = [
    { name: "About us", href: "#", testId: "about" },
    { name: "Contact", href: "#", testId: "contact" },
  ];

  return (
    <>
      <div className="flex justify-between items-start">
        <Image
          aria-hidden
          src="/website-logo.png"
          alt="Fame Tonic Logo"
          width={174}
          height={174}
          className="h-auto ml-8 w-[108px] sm:w-[174px] object-contain transform translate-x-full sm:transform-none sm:translate-x-0 sm:ml-5"
        />
        <div className="hidden sm:flex gap-10 text-lg font-semibold text-accentgray sm:pr-12">
          {navigationLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              passHref
              data-testid="desktop-about"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="sm:hidden flex items-center"
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          aria-label="Toggle menu"
        >
          <Image
            src="/hamburger-menu-icon.png"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>
    </>
  );
};

export default Header;
