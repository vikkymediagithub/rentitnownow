import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

const PersonalInformationCard = () => {
  const { toast } = useToast();

  const url = import.meta.env.VITE_USER_URL;

  const [user, setUser] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setFormData({
        first_name: parsed.first_name || '',
        last_name: parsed.last_name || '',
        email: parsed.email || '',
        phone: parsed.phone || '',
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!editing) {
      setEditing(true);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${url}/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/merge-patch+json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update user");

      const updatedUser = await response.json();
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setEditing(false);

      toast({
        title: "Success",
        description: "User information updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 w-full max-w-md sm:max-w-2xl rounded-xl shadow-md  mt-6">
      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

      <div className="flex flex-col gap-4">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["first_name", "last_name"].map((field) => (
            <div className="flex flex-col" key={field}>
              <label className="text-sm text-gray-500 mb-1 capitalize">{field.replace('_', ' ')}</label>
              {editing ? (
                <input
                  type="text"
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                />
              ) : (
                <p className="p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50">
                  {formData[field as keyof typeof formData]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["email", "phone"].map((field) => (
            <div className="flex flex-col" key={field}>
              <label className="text-sm text-gray-500 mb-1 capitalize">{field}</label>
              {editing ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                />
              ) : (
                <p className="p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50">
                  {formData[field as keyof typeof formData]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Update Button */}
        <button
          className="bg-gradient-to-r from-red-500 to-blue-600 px-6 py-3 rounded-md text-white self-start sm:self-end mt-2"
          onClick={handleUpdate}
        >
          {editing ? "Save Changes" : "Update"}
        </button>
      </div>
    </div>
  );
};

export default PersonalInformationCard;
