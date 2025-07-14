import Image from "next/image";

export default function Items() {
  const values = [
    {
      title: "علوم الحاسوب",
      image: "/imgs/coding.webp",
      description: "هنا سوف تتعلم علوم الحاسب الآلي",
      rtl: false,
      titleColor: "#33ff00",
      desColor: "#39ff00",
    },
    {
      title: "الذكاء الاصطناعي",
      image: "/imgs/ai.jpeg",
      description:
        "سوف تتعلم كيف يعمل الذكاء الاصتناعي وتتعلم كيف تبني نموزجك الخاص",
      rtl: true,
      titleColor: "#03daff",
      desColor: "#03daff",
    },
    {
      title: "البرمجه",
      image: "/imgs/code.jpeg",
      description: "هنا ستتعلم كل لغات البرمجه التي تريدها مع الخبراء",
      rtl: false,
      titleColor: "#000000",
      desColor: "#000000",
    },
    {
      title: "الأمن السيبراني",
      image: "/imgs/hakar.jpeg",
      description: "يوجد دورات لتعلم مجال الأمن السيبراني...",
      rtl: true,
      titleColor: "red",
      desColor: "red",
    },
  ];

  return (
    <div className="p-10">
      {values.map((course, index) => (
        <div
          key={index}
          className="mb-20 transform hover:scale-105 transition-all duration-500"
          style={{
            animation: `courseSlideIn 1s ease-out both`,
            animationDelay: `${1.8 + index * 0.3}s`,
          }}
        >
          <div
            className={`lg:flex justify-center items-center w-full mb-10 p-8 rounded-3xl backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 ${
              course.rtl ? "flex-row-reverse" : ""
            }`}
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="relative overflow-hidden rounded-3xl group">
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={250}
                className="rounded-3xl transform group-hover:scale-110 transition-transform duration-700"
                style={{
                  borderRadius: 20,
                  filter: "brightness(0.9) contrast(1.1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <div className="pt-5 flex-1 px-8">
              <h1
                className="text-5xl mb-7 font-bold transform hover:scale-105 transition-transform duration-300"
                style={{
                  color: course.titleColor,
                  textShadow: `0 0 20px ${course.titleColor}40`,
                  animation: "titleGlow 2s ease-in-out infinite alternate",
                }}
              >
                {course.title}
              </h1>
              <p
                className="text-3xl transform hover:translate-x-2 transition-transform duration-300"
                style={{
                  color: course.desColor,
                  textShadow: `0 0 10px ${course.desColor}30`,
                }}
              >
                {course.description}
              </p>
            </div>
          </div>

          <hr
            className="border-bottom border-2 rounded-full mb-10 mx-auto"
            style={{
              width: "80%",
              background: "linear-gradient(90deg, transparent, transparent)",
              color: course.titleColor,
              animation: "lineExpand 0.8s ease-out both",
              animationDelay: `${2.1 + index * 0.3}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
