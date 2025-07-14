
import Courses from "../comps/cources"; // تأكد من الاسم الصحيح للملف والمكون
import Link from "next/link";
export default async function Course() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // لمحاكاة التحميل

  return (
    <div
      className="min-h-screen flex flex-col items-center pt-32 pb-20"
      style={{
        background:
          "linear-gradient(135deg, #964deb 0%, #667eea 50%, #764ba2 100%)",
        animation: "gradientShift 8s ease-in-out infinite",
      }}
    >
      {/* عنوان الصفحة */}
      <h1 className="text-white text-5xl font-bold">الكورسات</h1>

      {/* خط تحت العنوان */}
      <hr
        className="w-4/5 border-2 border-white rounded-full my-1 my-10"
      />

      {/* الكورسات */}
      <Courses/>

{btn()}

    </div>
  );
}

const btn = () => {
  return (
    <Link href="/courses/add"
      className="fixed bottom-6 right-6 pb-3 px-4 text-white shadow-lg flex justify-center text-5xl align-items-center z-50 transition 
        bg-gradient-to-r from-[#001afc] to-[#984eeb] 
        hover:scale-105 hover:from-[#984eeb] hover:to-[#001afc] 
        focus:outline-none focus:ring-4 focus:ring-[#984eeb]    "
      style={{
        borderRadius: 50,
      }}
    >
      +
    </Link>
  );
};
