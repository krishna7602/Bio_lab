import React, { useState } from "react";
import axios from "axios";
import AdminDashboard from "./AdminDashboard"; // import the dashboard

const AdminAuthModal = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showDashboard, setShowDashboard] = useState(false); // show dashboard after login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setSuccess("");

      if (isRegister) {
        const res = await axios.post(
          "http://localhost:8001/api/v1/users/register",
          { name, email, password },
          { withCredentials: true }
        );
        setSuccess("Admin registered successfully! You can now login.");
        setIsRegister(false);
      } else {
        const res = await axios.post(
          "http://localhost:8001/api/v1/users/login",
          { email, password },
          { withCredentials: true }
        );
        console.log("Login success:", res.data);
        // show admin dashboard popup
        setShowDashboard(true);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  // Close both login modal and dashboard
  const handleCloseDashboard = () => {
    setShowDashboard(false);
    onClose();
  };

  return (
    <>
      {!showDashboard && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">X</button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {isRegister ? "Admin Register" : "Admin Login"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {isRegister && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
              <button
                type="submit"
                className="bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition"
              >
                {isRegister ? "Register" : "Login"}
              </button>
            </form>
            <p className="text-center mt-3 text-sm text-gray-600">
              {isRegister ? (
                <>Already registered? <span className="text-sky-600 cursor-pointer" onClick={() => setIsRegister(false)}>Sign In</span></>
              ) : (
                <>Not registered yet? <span className="text-sky-600 cursor-pointer" onClick={() => setIsRegister(true)}>Register</span></>
              )}
            </p>
          </div>
        </div>
      )}

      {showDashboard && <AdminDashboard onClose={handleCloseDashboard} />}
    </>
  );
};

export default AdminAuthModal;
