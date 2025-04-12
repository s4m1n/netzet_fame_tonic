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
      <header className="flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" aria-label="Fame Tonic Home">
          <Image
            src="/website-logo.png"
            alt="Fame Tonic Logo"
            width={174}
            height={174}
            className="w-[108px] sm:w-[174px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-10 text-lg font-semibold text-accentgray">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              data-testid={`desktop-${link.testId}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
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
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setIsMenuVisible(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-xl font-semibold mb-4"
              onClick={() => setIsMenuVisible(false)}
              data-testid={`mobile-${link.testId}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
