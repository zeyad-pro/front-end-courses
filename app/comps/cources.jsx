import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

// Mock data for demonstration
const products = [
  {
    id: 1,
    img: "/imgs/code.jpeg",
    title: "دورة البرمجة الأساسية",
    description: "تعلم أساسيات البرمجة من الصفر حتى الاحتراف",
    rating: 5,
    price: 99
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
    title: "تطوير المواقع",
    description: "تعلم تطوير المواقع الحديثة باستخدام أحدث التقنيات",
    rating: 4,
    price: 149
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    title: "تصميم الجرافيك",
    description: "احترف تصميم الجرافيك والهوية البصرية",
    rating: 5,
    price: 129
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    title: "التسويق الرقمي",
    description: "تعلم استراتيجيات التسويق الرقمي الفعالة",
    rating: 4,
    price: 179
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    title: "تحليل البيانات",
    description: "احترف تحليل البيانات والذكاء الاصطناعي",
    rating: 5,
    price: 199
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
    title: "إدارة المشاريع",
    description: "تعلم إدارة المشاريع بطريقة احترافية",
    rating: 4,
    price: 159
  }
];

const ProductCard = ({ course }) => {
  const handlePurchase = () => {
    // Handle purchase logic here
    console.log('Purchase clicked for:', course.title);
  };

  return (
    <div className="group relative  rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-400 transition-all duration-300 ease-in-out hover:shadow-yellow-400 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        <h2 className="text-xl font-bold mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors">
          {course.title}
        </h2>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {course.description}
        </p>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < course.rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-600'
              } transition-colors duration-200`}
            />
          ))}
          <span className="text-sm text-gray-400 ml-2">({course.rating}/5)</span>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-700">
          <button
      
            className="flex items-center gap-2 px-4 py-2 text-white bg-yellow-400 text-black rounded-xl font-medium transition-all duration-200 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 active:scale-95"
          >اشتريه الآن
               <p className="text-2xl font-bold text-white">
              ${course.price}
            </p>  
          </button>
          
          <div className="text-right">
       
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 border-2 border-yellow-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default function ProductCards() {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((course) => (
            <ProductCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}