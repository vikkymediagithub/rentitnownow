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
    <div className=" bg-sky-50 flex flex-col items-center min-h-screen">
       {/* Header */}
      <header className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-2 flex justify-between py-4">
          <div className="flex gap-1 items-center">
            <p className="px-3 py-1 font-semibold bg-gradient-to-r from-[#F85259] to-[#3352A5] rounded-lg text-white">R</p>
            <p className="font-semibold text-sm">Rentitnownow.com</p>
          </div>

          <div className="rounded-lg py-2 px-2 bg-gradient-to-r from-[#F85259] to-[#3352A5] flex gap-1">
            <img src="/public/Vector.png" alt="" className="" />
          </div>
        </div>
      </header>

      <div className="w-full max-w-3xl bg-white mt-20">
        <div className="w-full max-w-md grid grid-cols-1 mx-auto text-gray-700 my-20">
          <div className="text-center mb-12">
              <h3 className="font-medium text-xl mt-10">Check Your Email Inbox</h3>
              <p>A password recovery link has been sent to your email inbox.</p>
          </div>
          <div className="flex justify-evenly text-sm my-6">
             <div className="flex justify-between p-2 shadow-md gap-2">
              <img src="/public/gmail.png" alt="" />
              <p>Open Email</p>
             </div>
             <div className="flex justify-between p-2 shadow-md gap-2">
              <img src="/public/yahoo.png" alt="" />
              <p>Open Yahoo</p>
             </div>
             <div className="flex justify-between p-2 shadow-md gap-2">
              <img src="/public/outlook.png" alt="" />
              <p>Open Outlook</p>
             </div>
          </div>
          <div className="text-center my-10">
            <p>Didn't receive any email? <span className="text-blue-500 hover:underline">Resend in 59 seconds</span></p>
          </div>
        </div>
      </div>

    </div>
  );
};

// eslint-disable-next-line no-irregular-whitespace
export default ConfirmEmail;