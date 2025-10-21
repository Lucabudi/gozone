"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Menu, X } from "lucide-react";
import DropDownMenu from "../DropDownMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 h-[80px] flex items-center transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent border-b-0"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-6 lg:px-10 w-full h-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors duration-500 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            MyWebsite
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/chi-siamo"
              className={`ease-out text-md font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              } hover:underline`}
            >
              Chi siamo
            </Link>
            <div
              aria-disabled
              className={`text-md transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              }`}
            >
              <DropDownMenu scrolled={scrolled} />
            </div>
            <Link
              href="/"
              className={`ease-out text-md font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              } hover:underline`}
            >
              Sportello psicologico
            </Link>
            <Link
              href="/about"
              className={`ease-out text-md font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              } hover:underline`}
            >
              Storie di clima
            </Link>
            <Link
              href="/projects"
              className={`ease-out text-md font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              } hover:underline`}
            >
              Risorse in biblioteca
            </Link>
            <Link
              href="/contact"
              className={`ease-out text-md font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              } hover:underline`}
            >
              Contatti
            </Link>
          </div>

          <div className="hidden md:flex space-x-2">
            <button
              className={`px-4 py-2 rounded transition-colors duration-500 ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Volontari
            </button>
            <button
              className={`px-4 py-2 rounded transition-colors duration-500 ${
                scrolled
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Sostienici
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden transition-colors duration-500 ${
              scrolled ? "text-gray-800 hover:text-black" : "text-white hover:text-gray-300"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden transition-colors duration-500 ${
            scrolled ? "bg-white border-t border-gray-200" : "bg-white/20"
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              className={`block transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`block transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              }`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`block transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
