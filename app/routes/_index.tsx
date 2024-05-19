// app/routes/index.tsx
import type { MetaFunction } from "@remix-run/node";
import { Link, useFetcher } from "@remix-run/react";
import { useState, useEffect } from "react";
import dog from "./../images/pexels-photo-2306831.jpeg";
import cat from "./../images/istockphoto-909106260-1024x1024.jpg";
import cat1 from "./../images/pexels-feyzayildirimphoto-12158229.jpg";
import cat2 from "./../images/pexels-pixabay-33287.jpg";
import cat3 from "./../images/pexels-photo-2306831.jpeg";
import cat4 from "./../images/pexels-osmanarabaciart-19640755.jpg";
import cat5 from "./../images/pexels-mindaugas-546542-1294062.jpg";
import cat6 from "./../images/pexels-feyzayildirimphoto-14492413.jpg";
import cat7 from "./../images/pexels-feyzayildirimphoto-12158229.jpg";

const petImages = [
  dog,
  cat,
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  // Add more images here
];

export const meta: MetaFunction = () => {
  return [
    { title: "Pet Clinic" },
    { name: "description", content: "Welcome to our friendly Pet Clinic!" },
  ];
};

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const fetcher = useFetcher();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % petImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-200 to-green-100">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Welcome to the Pet Clinic!
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg mb-8 h-96">
        {/* Added height for the slider */}
        {petImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Pet Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-center space-y-4">
<Link
  to="/display"
  className="bg-green-500 hover:bg-green-900 text-white font-bold py-4 px-8 rounded transition duration-300 text-lg" 
> 
  Display Clients
</Link>
<Link
  to="/add"
  className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-4 px-16 rounded transition duration-300 text-lg" 
>
  Add Client
</Link>
<Link
  to="/about"
  className="bg-red-600 hover:bg-red-900 text-white font-bold py-4 px-16 rounded transition duration-300 text-lg" 
>
  About
</Link>

      
        {/* Welcome Message for Workers */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-600">
        Dear employee : Thank you for your dedication!
        </h1>
      </div>
    </div>
  );
}
