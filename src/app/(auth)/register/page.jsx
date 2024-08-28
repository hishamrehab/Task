"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import cityCommercial from "../../../../public/images/Frame 1171277301.png";

import Frame from "../../../../public/images/Frame 1000001535.png";

import Image from "next/image";
import { MdMailOutline } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";



const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nationalImage, setNationalImage] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(0);
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
        // credentials: "include",
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
    <div className="container flex overflow-hidden">
      <Image
        src={cityCommercial}
        width={756}
        height={100}
        alt=""
        className="w-2/4"
      />

      <div className="pt-20 px-md">
        <Image
          src={Frame}
          width={225}
          height={67}
          alt=""
          className="mb-marginFrame ml-Ml101"
        />

        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-base font-normal text-primary"
            >
              <MdMailOutline />
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="border-0 w-w516 h-h46 pr-p20 py-p23 font-sans text-sm font-normal leading-lh18 bg-loginInputBgCol text-loginInputCol outline-none"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-base font-normal text-primary"
            >
              <MdMailOutline />
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-0 w-w516 h-h46 pr-p20 py-p23 font-sans text-sm font-normal leading-lh18 bg-loginInputBgCol text-loginInputCol outline-none"
            />
          </div>


          <div className="mb-8">
            <label
              htmlFor="file"
              className="flex items-center gap-2 text-base font-normal text-primary"
            >
              <MdMailOutline />
              National ID Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNationalImage(e.target.files[0])}
              required
              className="mb-4 p-2 border rounded "
            />
          </div>




          <div className="mb-8">
            <label
              htmlFor="password"
              className="flex items-center gap-2 text-base font-normal text-primary"
            >
              <FaKey />
              Password
            </label>
            <input
              className="border-0 w-w516 h-h46 pr-p20 py-p23 font-sans text-sm font-normal leading-lh18 bg-loginInputBgCol text-loginInputCol outline-none"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          <div className="mb-8">
            <label
              htmlFor="confirmPassword"
              className="flex items-center gap-2 text-base font-normal text-primary"
            >
              <FaKey />
              Confirm Password
            </label>
            <input
              className="border-0 w-w516 h-h46 pr-p20 py-p23 font-sans text-sm font-normal leading-lh18 bg-loginInputBgCol text-loginInputCol outline-none"
              type="password"
              id="confirmPassword"
              placeholder="Enter your confirmed password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-8">
            <label>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked ? 1 : 0)}
                required
              />
              Agree to the terms and conditions
            </label>
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <button
            type="submit"
            className="w-full h-14 flex items-center justify-center flex-row gap-1 bg-primary mb-16"
          >
            <span className="font-sans font-bold text-sm text-secondary lh21">
              Create account
            </span>
            <MdArrowOutward className="text-secondary h-3 w-3" />
          </button>

          <div className="text-center pb-14">
            <span className="font-sans font-normal text-base lh21 text-loginD">
              Have an account?
            </span>
            <Link
              href="login"
              className="font-sans font-bold text-base lh21 text-primary"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Register;