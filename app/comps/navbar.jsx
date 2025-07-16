"use client";
import { useState, useEffect } from "react";
import { Lalezar, Cairo } from "next/font/google";
import Link from "next/link";

const lalezar = Lalezar({ subsets: ["arabic"], weight: "400" });
const cairo = Cairo({ subsets: ["arabic"], weight: ["600", "700"] });

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div 
      className={`flex w-screen justify-between p-5 align-content-center w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/70 shadow-lg py-4 ' 
          : 'bg-transparent '
      }`}
      style={{ 
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className={`flex gap-2 -translate-y-2 link-hov pointer ${
        isScrolled 
          ? '-translate-y-4' 
          : '-translate-y-2'
      }`}>
        <img
          src="/imgs/d-removebg-preview.png"
          alt="logo"
          className="md:mr-20"
          style={{ width: 47, height: 47 }}
        />
        <h2
          className={`text-center text-5xl ${lalezar.className}`}
          style={{ color: "#ffc303", textDecoration: "underline" }}
        >
          تطوير
        </h2>
      </div>

      {/* Desktop Navigation */}
      <div
        className="hidden md:flex justify-evenly align-items-center"
        style={{ width: "50%" }}
      >
        <a className="text-h5 link-hov" href="/">
          الرئيسيه
        </a>
        <a className="text-h5 link-hov" href="/courses">
          الكورسات
        </a>
        <a className="text-h5 link-hov" href="/about">
          عنا
        </a>
        <button className="btn" style={{ height: 50 }}>
          ابدا الان
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span 
        style={{backgroundColor: '#ffc300'}}
          className={`block w-6 h-0.5 transition-transform duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span 
        style={{backgroundColor: '#ffc300'}}
          className={`block w-6 h-0.5 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span 
        style={{backgroundColor: '#ffc300'}}
          className={`block w-6 h-0.5 transition-transform duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-screen top-full left-0 right-0 bg-white/65 backdrop-blur-md shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            <a 
              className="text-h5 link-hov py-2" 
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              الرئيسيه
            </a>
            <a 
              className="text-h5 link-hov py-2" 
              href="/courses"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              الكورسات
            </a>
            <a 
              className="text-h5 link-hov py-2" 
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              عنا
            </a>
            <button 
              className="btn mt-4" 
              style={{ height: 50 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ابدا الان
            </button>
          </div>
        </div>
      )}
    </div>
  );
}