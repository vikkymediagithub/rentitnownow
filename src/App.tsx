import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public pages
import Landing from "./pages/landing"
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ConfirmEmail from "./pages/auth/ConfirmEmail";

// Owner dashboard pages
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import AllBookings from "./pages/owner/AllBookings";
import AllProperties from "./pages/owner/AllProperties";
import AddProperty from "./pages/owner/AddProperty";
import EditProperty from "./pages/owner/EditProperty";
import ViewProperty from "./pages/owner/ViewProperty";
import PropertyPreview from "./pages/owner/propertyPreview";
import Congratulations from "./pages/owner/Congratulations";
import MyProperties from "./pages/owner/MyProperties";
import Bookings from "./pages/owner/Bookings";
import Analytics from "./pages/owner/Analytics";
import Wallets from "./pages/owner/Wallets";
import Notifications from "./pages/owner/Notifications";
import Settings from "./pages/owner/Settings";
import Help from "./pages/owner/Help";

import Profile from "./pages/owner/Profile";

// Layout
import OwnerLayout from "./pages/owner/OwnerLayout";

// For Guest: GuestDashboard
import GuestDashboard from "./pages/guest/GuestDashboard";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ShadcnToaster />
        <SonnerToaster />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />

            {/* Optional Guest route */}
            <Route path="/guest/guest-dashboard" element={<GuestDashboard />} />

            {/* Owner routes nested inside OwnerLayout */}
            <Route path="/owner" element={<OwnerLayout />}>
              <Route path="/owner/owner-dashboard" element={<OwnerDashboard />} />
              <Route path="all-bookings" element={<AllBookings />} />
              <Route path="all-properties" element={<AllProperties />} />
              <Route path="add-property" element={<AddProperty />} />
              <Route path="edit-property/:id" element={<EditProperty />} />
              <Route path="view-property/:id" element={<ViewProperty />} />
              <Route path="property-preview" element={<PropertyPreview />} />
              <Route path="congratulations" element={<Congratulations />} />
              <Route path="my-properties" element={<MyProperties />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="wallets" element={<Wallets />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<Settings />} />
              <Route path="help" element={<Help />} />
              {/* Profile route */}
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
