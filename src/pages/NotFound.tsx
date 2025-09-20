import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:", location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-[calc(100vh-300px)] items-center justify-center bg-gray-50 py-16">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl font-bold text-green-600">404</h1>
          <p className="mb-8 text-2xl text-gray-700">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md transition-colors">
            Return to Home
          </Link>
        </div>
    </div>
  );
};

export default NotFound;
