"use client";
import { useState, useEffect } from "react";
import { Lalezar, Cairo, Tajawal, Almarai } from "next/font/google";

const lalezar = Lalezar({ subsets: ["arabic"], weight: "400" });
const cairo = Cairo({ subsets: ["arabic"], weight: "800" });
const tajawal = Tajawal({ subsets: ["arabic"], weight: "800" });
const tajawal_nb = Tajawal({ subsets: ["arabic"], weight: "300" });
const almarai = Almarai({ subsets: ["arabic"], weight: "800" });

export default function Parts() {
  const cources = [
    {
      title: "علوم الحاسب الآلي",
      description: "هنا سوف تتعلم علوم الحاسب الآلي",
    },
    {
      title: "الذكاء الصناعي",
      description:
        "سوف تتعلم كيف يعمل الذكاء الصناعي وتتعلم كيف تبني نموذجك الخاص",
    },
    {
      title: "البرمجة",
      description: "هنا ستتعلم كل لغات البرمجة التي تريدها مع الخبراء",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center relative"
      style={{ height: 800 }}
    >
      <h1
        className={`text-h2-nc ${almarai.className}
           ${isScrolled ? "animate-from-bottom-4" : ""}`}
        style={{ color: "#ffc303" }}
      >
        الأقسام
      </h1>
      <div className="relative flex justify-center mt-10 p-5">
        {/* الخط */}
        <div className="absolute right-6 top-0 h-full border-r-4 border-yellow-400"></div>

        <div className="flex flex-col gap-10 ml-12 md:ml-24">
          {cources.map((item, key) => (
            <div
              key={key}
              className={`relative flex items-center ${
                isScrolled
                  ? key === 0
                    ? "animate-from-bottom-5"
                    : key === 1
                    ? "animate-from-bottom-4"
                    : "animate-from-bottom-3"
                  : ""
              }`}
            >
              {/* الدائرة */}
              <div className="absolute -right-1.5 top-5 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>

              <div className="flex flex-col items-start pl-2 pr-15 mb-20">
                <h3 className="text-2xl md:text-4xl lg:text-5xl text-white">
                  {item.title}
                </h3>
                <p className="text-base md:text-xl text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
