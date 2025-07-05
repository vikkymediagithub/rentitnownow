import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Search } from "lucide-react"; // Assuming you use lucide-react for icons

const ConfirmEmail = () => {
  const [seconds, setSeconds] = useState(59);
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleResendEmail = () => {
    if (seconds === 0) {
      setIsResending(true);
      setTimeout(() => {
        setIsResending(false);
        setSeconds(59);
        toast({
          title: "Email Sent!",
          description: "We've sent you another confirmation email.",
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F9FF] flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
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

      {/* Content */}
      <div className="w-full max-w-2xl bg-white mt-24 rounded-lg px-8 py-12 shadow-sm">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Check Your Email Inbox</h2>
          <p className="text-gray-600">
            A password recovery link has been sent to your email inbox.
          </p>
        </div>

        {/* Email Quick Links */}
        <div className="flex justify-center mt-10 gap-4 text-sm flex-wrap">
          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 shadow-sm rounded-md hover:bg-gray-50"
          >
            <img src="/gmail.png" alt="Gmail" className="w-5 h-5" />
            Open Gmail
          </a>
          <a
            href="https://mail.yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 shadow-sm rounded-md hover:bg-gray-50"
          >
            <img src="/yahoo.png" alt="Yahoo" className="w-5 h-5" />
            Open Yahoo Mail
          </a>
          <a
            href="https://outlook.live.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 shadow-sm rounded-md hover:bg-gray-50"
          >
            <img src="/outlook.png" alt="Outlook" className="w-5 h-5" />
            Open Outlook
          </a>
        </div>

        {/* Resend Timer */}
        <div className="text-center mt-12 text-sm">
          {seconds > 0 ? (
            <p>
              Didn’t receive any email?{" "}
              <span className="text-blue-500 font-medium">
                Resend in {seconds} second{seconds !== 1 ? "s" : ""}
              </span>
            </p>
          ) : (
            <button
              onClick={handleResendEmail}
              className="text-blue-600 font-medium hover:underline"
              disabled={isResending}
            >
              {isResending ? "Resending..." : "Resend Email"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
