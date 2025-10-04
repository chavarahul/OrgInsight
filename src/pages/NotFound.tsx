import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#f7f5f4] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#8b6f47]/20 blur-3xl rounded-full"></div>
            <AlertCircle className="relative w-24 h-24 text-[#8b6f47]" />
          </div>
        </div>

        <h1 className="text-8xl md:text-9xl font-bold text-[#8b6f47] mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-[#3d2e26] mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-[#6b5d54] mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off. Don't worry, we'll get you back home.
        </p>

        <div className="bg-white/40 border border-[#e0dad5] rounded-lg p-6 mb-8 inline-block">
          <p className="text-[#6b5d54] mb-2">
            Redirecting to home in
          </p>
          <div className="text-5xl font-bold text-[#8b6f47]">
            {countdown}
          </div>
          <p className="text-sm text-[#6b5d54] mt-2">
            seconds
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <Button className="bg-[#8b6f47] hover:bg-[#7a5f3d] text-white px-6 py-6 text-base cursor-pointer">
              <Home className="w-5 h-5 mr-2" />
              Go Home Now
            </Button>
          </Link>
          <Link to="/companies">
            <Button variant="outline" className="border-[#e0dad5] hover:bg-[#8b6f47]/10 hover:border-[#8b6f47] hover:text-[#8b6f47] px-6 py-6 text-base cursor-pointer">
              Browse Companies
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;