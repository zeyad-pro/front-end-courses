import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "تطوير",
  description: "منصه عربيه تهدف لتطوير الشباب",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<div style={{ backgroundImage: "URL('/imgs/wallpapers/5.png')" ,
  backgroundPosition: 'center',}}>
          <Navbar/>
  
  
  
  
  
  
          {children}
  
  
  
  
  
  
          <Footer/>
</div>
      </body>
    </html>
  );
}
