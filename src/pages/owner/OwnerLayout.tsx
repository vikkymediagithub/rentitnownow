import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const OwnerLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = location.pathname.split("/").pop() || "dashboard";

  const handleNavigate = (page: string) => {
    navigate(`/owner/${page}`);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <div className="flex-1 flex flex-col overflow-auto">
        <Header onMenuClick={() => setSidebarOpen(true)} onNavigate={handleNavigate} />

        <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OwnerLayout;
