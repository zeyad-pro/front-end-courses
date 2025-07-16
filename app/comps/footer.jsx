"use client";
// import Link from "next/link";
import { Lalezar } from "next/font/google";

const lalezar = Lalezar({ subsets: ["arabic"], weight: "400" });

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "#ecb500ff", height: 300 }}
      className="flex flex-col z-100  md:flex-row justify-between md:p-10 p-4  w-full"
    >
      <div className="flex pb-5 md:pb-0  w-full f-link-hov-2 pointer justify-center md:justify-start">
        <img
          src="/imgs/d-removebg-preview.png"
          alt="logo"
          className=""
          style={{ width: 47, height: 47 }}
        />
        <h2
          className={`text-center mx-2 text-5xl ${lalezar.className}`}
          style={{
            backgroundColor: "#ffc303",
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          تطوير
        </h2>
      </div>
      <div
        className="flex flex-col md:-translate-x-0  justify-evenly align-items-center"
        style={{ width: "100%",height: 200 }}
      >
        <a className="text-h5 f-link-hov" href="/">
          الرئيسيه
        </a>
        <a className="text-h5 f-link-hov" href="/courses">
          الكورسات
        </a>
        <a className="text-h5 f-link-hov" href="/about">
          عنا
        </a>
      </div>{" "}
      <div
        className="flex flex-col md:translate-x-5 justify-evenly align-items-center"
        style={{ width: "100%" ,height: 200}}
      >
        <a className="text-h5 f-link-hov" href="/">
          شروط الاستخدام
        </a>
        <a className="text-h5 f-link-hov" href="/courses">
          سياسه الخصوصيه
        </a>
        {/* <h1
          className="text-center text-xl"
          style={{
            position: "fixed", // أو "absolute" لو داخل عنصر محدد
            width: "100%",
            bottom: "0",
            // right: "-250%",
            // transform: "translateX(70%)",
            transform: "translateY(30px)",
            padding: "10px",
            // backgroundColor: "#fdf6ec",
            color: "#fff",
            alignItems: 'center',
          }}
        >
          © 2025 zeyadmaher
        </h1> */}
      </div>
    </div>
  );
}
