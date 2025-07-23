import { useEffect, useState } from "react";
import axios from "axios";

type LoggedInUser = {
  id: string;
  username: string;
  email: string;
  role: string;
  // Add more fields based on your backend response
};

export function useLoggedInUser() {
  const [user, setUser] = useState<LoggedInUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // 🟡 Extract the ID from localStorage
  const userId = storedUser ? JSON.parse(storedUser)?.id : null;
  const url = userId ? `${BASE_URL}/users/${userId}` : null;

  useEffect(() => {
    const fetchUser = async () => {
      if (!token || !url) {
        setError("Missing token or user ID");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [url, token]);

  return { user, loading, error };
}
