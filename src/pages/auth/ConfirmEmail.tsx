
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConfirmEmail = () => {
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleResendEmail = async () => {
    setIsResending(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      toast({
        title: "Email sent!",
        description: "We've sent you another confirmation email.",
      });
    }, 1500);
  };

  const simulateEmailConfirmed = () => {
    toast({
      title: "Email confirmed!",
      description: "Your account has been activated. Welcome to RentItNowNow!",
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-2xl font-bold text-gray-900">
            <Home className="h-8 w-8 text-blue-600" />
            <span>RentItNowNow</span>
          </Link>
        </div>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Confirm Your Email</CardTitle>
            <CardDescription>
              We've sent a confirmation link to your email address. 
              Please click the link to activate your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Check your spam folder</strong> if you don't see the email in your inbox.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600 text-center">
                Didn't receive the email?
              </p>
              <Button
                onClick={handleResendEmail}
                variant="outline"
                className="w-full"
                disabled={isResending}
              >
                {isResending ? "Sending..." : "Resend Confirmation Email"}
              </Button>
            </div>

            {/* Demo button for testing */}
            <div className="border-t pt-4">
              <p className="text-xs text-gray-500 text-center mb-2">Demo: Click to simulate email confirmation</p>
              <Button
                onClick={simulateEmailConfirmed}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Simulate Email Confirmed
              </Button>
            </div>

            <div className="text-center pt-4">
              <Link to="/login" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                Back to Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmEmail;
