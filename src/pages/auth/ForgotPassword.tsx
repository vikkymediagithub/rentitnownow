import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, ArrowLeft, Mail, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Reset link sent!",
        description: "Check your email for password reset instructions.",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-2xl font-bold text-gray-900"
            >
              <Home className="h-8 w-8 text-blue-600" />
              <span>RentItNowNow</span>
            </Link>
          </div>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
              <CardDescription>
                We've sent password reset instructions to <strong>{email}</strong>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 text-center">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  try again
                </button>
              </p>

              <Link to="/login">
                <Button className="w-full" variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Sign In
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sky-50 flex flex-col items-center min-h-screen">
      {/* Header */}
      <header className="w-full bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 flex justify-between items-center h-16">
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
      </header>

      {/* Form Section */}
      <div className="w-full max-w-3xl bg-white mt-20 py-10 px-6 sm:px-8 shadow rounded-md">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto grid gap-6 text-gray-700"
        >
          <div className="text-center">
            <h1 className="font-bold text-2xl mb-2">Reset Your Password</h1>
            <p className="text-sm">Enter your email to reset your password</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-medium">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="email@sample.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </Button>

          <div className="text-center text-sm mt-6">
            <p>
              Remember password?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
