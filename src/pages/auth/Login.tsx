import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import clsx from "clsx";
import axios from "@/lib/axios";

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

    if (!email || !password) {
      toast({
        title: "Invalid input",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      // Use relative path to leverage Vite proxy in development
      const response = await axios.post("/auth/login", { email, password });
      console.log("API Response:", response.data);

      const user = response.data.data?.user || response.data.user;
      const token = response.data.data?.access_token || response.data.token;

      if (!user && !user.user_type && !token) {
        throw new Error("Invalid response format from server.");
      }

      try {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      } catch (storageError) {
        console.error("localStorage Error:", storageError);
        throw new Error("Unable to save user data locally.");
      }

      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      });

      switch (user.user_type) {
        case "guest":
          navigate("/owner/owner-dashboard");
          break;
        case "owner":
          navigate("/owner/owner-dashboard");
          break;
        default:
          throw new Error("Invalid user role.");
      }
    } catch (err: any) {
      let errorMessage = "An unexpected error occurred";
      if (err.message === "Network Error") {
        errorMessage =
          "Unable to connect to the server. Please check your connection or try again later.";
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }
      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white rounded-md px-3 py-1 font-bold">
                R
              </div>
              <p className="font-semibold text-sm">Rentitnownow.com</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[480px] rounded-lg bg-white shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-700">Welcome back!</h1>
            <p className="text-gray-500 text-sm font-bold">Sign In</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-m font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-m font-medium text-gray-700 mb-1"
              >
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
                  className="w-full h-11 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </div>
              </div>
            </div>

            <div className="text-right mt-2">
              <span className="text-sm text-gray-500">
                Forgot password?{" "}
                <Link to="/forgot-password" className="text-blue-500 font-medium">
                  Reset here
                </Link>
              </span>
            </div>

            <Button
              type="submit"
              className={clsx(
                "w-full h-11 text-white font-medium rounded-md transition-all duration-200",
                "bg-gradient-to-r from-red-500 to-blue-600"
              )}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

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
