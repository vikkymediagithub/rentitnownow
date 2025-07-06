import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import clsx from "clsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      });

      if (email.includes("owner")) {
        navigate("/owner-dashboard");
      } else {
        navigate("/guest-dashboard");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
             <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white rounded-md px-3 py-1 font-bold">
              R
            </div>
            <p className="font-semibold text-sm">Rentitnownow.com</p>
          </div>
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded flex items-center justify-center">
            <Search className="h-4 w-4 text-white" />
          </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[480px] rounded-lg bg-white shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-700">Welcome back!</h1>
            <p className="text-gray-500 text-sm font-bold">Sign In</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-m font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-11 px-4 border border-r-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gradient-to-r focus:from-red-500 focus:to-blue-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-m font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="***********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-11 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gradient-to-r focus:from-red-500 focus:to-blue-500 transition"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </div>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2">
              <span className="text-sm text-gray-500">
                Forgot password?{" "}
                <Link
                  to="/forgot-password"
                  className="bg-gradient-to-r from-[#F85259] to-[#3352A5] bg-clip-text text-transparent font-medium"
                >
                  Reset here
                </Link>
              </span>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className={clsx(
                "w-full h-11 text-white font-medium rounded-md transition-all duration-200",
                "bg-gradient-to-r from-red-500 to-blue-600",
                "hover:shadow-lg hover:shadow-blue-300/40 hover:from-red-600 hover:to-blue-700"
              )}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-red-500 hover:text-red-600 font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
