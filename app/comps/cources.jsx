import Link from "next/link";

const Courses = () => {
  const products = [
    {
      title: "1العنوان",
      description: "1الوصف لهذا الكورس",
      img: "/imgs/course.png",
      rating: 5,
      price: 299,
    },
    {
      title: "2العنوان",
      description: "2الوصف لهذا الكورس",
      img: "/imgs/course2.jpg",
      rating: 5,
      price: 299,
    },
    {
      title: "3العنوان",
      description: "3الوصف لهذا الكورس",
      img: "/imgs/course.png",
      rating: 4,
      price: 299,
    },
    {
      title: "4العنوان",
      description: "4الوصف لهذا الكورس",
      img: "/imgs/course2.jpg",
      rating: 4,
      price: 299,
    },
    {
      title: "5العنوان",
      description: "5الوصف لهذا الكورس",
      img: "/imgs/course.png",
      rating: 3,
      price: 299,
    },
    {
      title: "6العنوان",
      description: "6الوصف لهذا الكورس",
      img: "/imgs/course2.jpg",
      rating: 5,
      price: 299,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((course, index) => (
        <div
          key={index}
          className="rounded-3xl overflow-hidden shadow-lg"
          style={{
            background: "linear-gradient(180deg, #08f9c4, #0a3dff)",
          }}
        >
          <img
            src={course.img}
            alt="course"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-white">
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="text-lg mb-4">{course.description}</p>

            <div className="flex gap-1 mb-4">
              {[...Array(course.rating)].map((_, i) => (
                <img
                  key={i}
                  src="/imgs/star.png"
                  alt="rating star"
                  className="w-6 h-6"
                />
              ))}
            </div>

            <div className="flex justify-between items-center">
              <Link href='/courses/buy/'
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white transition 
        bg-gradient-to-r from-[#001afc] to-[#984eeb] 
        hover:scale-105 hover:from-[#984eeb]  hover:to-[#001afc] 
        focus:outline-none"
              >
                اشتريه الآن
                <img
                  src="/imgs/buy.png"
                  alt="buy"
                  className="w-6 h-6"
                />
              </Link >
              <p className="text-xl font-bold">{course.price}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
