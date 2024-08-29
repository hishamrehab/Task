"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import cityCommercial from "../../../../public/images/city-commercial-buildings 1.png";
import Frame from "../../../../public/images/Frame 1000001535.png";
import { MdMailOutline } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch(
        "https://sunchase.backend.aait-d.com/api/login",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        localStorage.setItem("token", data.data.token);
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container flex ">
      <Image
        src={cityCommercial}
        width={756}
        height={100}
        alt=""
        className="h-screen bg-contain"
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
              htmlFor="email"
              className="flex items-center gap-2 text-base font-normal text-primary"
            >
              <MdMailOutline />
              Email Address
            </label>

            <input
              className={` border-0 w-w516 h-h46 pr-p20  py-p23 font-sans	 text-sm font-normal leading-lh18 bg-loginInputBgCol  text-loginInputCol outline-none	 `}
              type="email"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="flex items-center gap-2 text-base font-normal text-primary"
            >
              <FaKey />
              Password
            </label>

            <input
              className={`border-0 w-w516 h-h46 pr-p20  py-p23 font-sans	 text-sm font-normal leading-lh18 bg-loginInputBgCol  text-loginInputCol outline-none	 `}
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <p className="font-switzer font-medium	text-base	leading-4	text-primary mb-14">
            Forget your password ?
          </p>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            className="w-full h-14 flex items-center justify-center flex-row gap-1  flex-nowrap bg-primary mb-16"
          >
            <span className="font-sans font-bold text-sm text-secondary lh21">
              Login
            </span>
            <MdArrowOutward className="text-secondary h-3 w-3" />
          </button>

          <div className="text-center">
            <span className="font-sans font-normal text-base lh21 text-loginD">
              Don’t have an account?{" "}
            </span>
            <Link
              href="register"
              className="font-sans font-bold  text-base lh21 text-primary"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
