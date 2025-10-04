import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const words = [
    "Companies",
    "Startups",
    "Enterprises",
    "Organizations",
    "Businesses",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#f0ece7] flex flex-col items-center justify-center text-center px-6">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-[#2f2a25] leading-tight">
          Discover & Explore
          <span className="inline-block relative mx-3 bg-[#2f2a25] text-[#f4e9d8] rounded-lg align-middle overflow-hidden px-3 py-1 min-w-[300px] h-[1.3em]">
            <span
              className={`block transition-transform duration-700 ease-in-out`}
              style={{
                transform: `translateY(-${currentIndex * 1.3}em)`,
              }}
            >
              {words.map((word, index) => (
                <span
                  key={index}
                  className="block text-center h-[1.3em] leading-[1.1em]"
                >
                  {word}
                </span>
              ))}
            </span>
          </span>
          Effortlessly
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          OrgInsight helps you browse, filter, and analyze companies with ease.
          View detailed company info, location, and industry data — all in one
          place.
        </p>
        <Link to={"/companies"} className="mt-7 block">
          <Button className="cursor-pointer bg-[#8b6f47] hover:bg-[#a48558] text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
