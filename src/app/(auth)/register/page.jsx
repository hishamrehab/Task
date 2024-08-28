"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import cityCommercial from "../../../../public/images/Frame 1171277301.png";
import Frame from "../../../../public/images/Frame 1000001535.png";
import Image from "next/image";
import { MdMailOutline } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import Link from "next/link";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nationalImage, setNationalImage] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", confirmPassword);
    formData.append("national_image", nationalImage);
    formData.append("terms", agreeTerms);

    try {
      const response = await fetch("https://sunchase.backend.aait-d.com/api/register", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.status == "success") {
        router.push("/login");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start p-4 md:p-10">
      <div className="w-full md:w-1/2">
        <Image src={cityCommercial} alt="City Commercial" className="w-full h-auto" />
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 px-4">
        <div className="flex justify-center mb-6">
          <Image src={Frame} alt="Frame Logo" className="w-32 h-auto" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="flex items-center gap-2 text-gray-700">
              <MdMailOutline className="text-xl" />
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-gray-700">
              <MdMailOutline className="text-xl" />
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="file" className="flex items-center gap-2 text-gray-700">
              <MdMailOutline className="text-xl" />
              National ID Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNationalImage(e.target.files[0])}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="password" className="flex items-center gap-2 text-gray-700">
              <FaKey className="text-xl" />
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="flex items-center gap-2 text-gray-700">
              <FaKey className="text-xl" />
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agree-terms"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="agree-terms" className="text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
