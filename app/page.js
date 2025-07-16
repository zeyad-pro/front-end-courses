import { Lalezar, Cairo, Tajawal, Almarai } from "next/font/google";
import Parts from "./comps/parts";
import Link from "next/link";
const lalezar = Lalezar({ subsets: ["arabic"], weight: "400" });
const cairo = Cairo({ subsets: ["arabic"], weight: "800" });
const tajawal = Tajawal({ subsets: ["arabic"], weight: "800" });
const tajawal_nb = Tajawal({ subsets: ["arabic"], weight: "300" });
const almarai = Almarai({ subsets: ["arabic"], weight: "800" });

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));


  return (
    <div className="main pt-52" style={{ backgroundImage: "URL('/imgs/wallpapers/5.png')" ,
  backgroundPosition: 'center',}}>
<span className="invisible-span">ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ</span>

      <h1
        className={`text-center text-8xl md:text-9xl animate-from-bottom-5   ${lalezar.className}`}
        style={{ color: "#ffc303", textDecoration: "underline" }}
      >
        تطوير
      </h1>

      <h1
        className={`text-center text-4xl animate-from-bottom-4 sm:text-6xl md:text-6xl ${tajawal.className} gap-1`}
      >
        منصه
        <span> </span>
        <span
          className={`text-center text-5xl md:text-7xl m-0 mx-3 ${lalezar.className}`}
          style={{ color: "#ffc303", textDecoration: "underline" }}
        >
          تطوير
        </span>
        المنصه العربيه <br />
        الاولي في التعليم عبر <br />
        الانترنت
      </h1>
       <h1
       style={{color: '#eeeeeeff'}}
        className={`text-center text-1xl animate-from-bottom-3 sm:text-3xl md:text-3xl ${tajawal_nb.className} gap-1`}
      >
      متوفر اكثر من 500 كورس مع متابعه مستمره 24 ساعه
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-auto my-13">
        <Link href={'/courses'} className="btn animate-from-right-3" style={{ height: 50 }}>
          ابدا الان
        </Link>
        <Link href={'/courses'} 
          className="btn-2  animate-from-left-3"
          style={{
            height: 50,
            background: "transparent",
            border: "solid 1px #ffc303",
          }}
        >
          الكورسات
        </Link>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////// */}
<Parts />
    </div>
  );
}
