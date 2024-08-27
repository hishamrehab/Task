"use client";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useRef, useState } from "react";

const Login = () => {
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();
  const form = useRef();
  const formData = new FormData(form.current);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://sunchase.backend.aait-d.com/api/login",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.status == "success") {
        localStorage.setItem("token", data.data.token);
        await router.push("/");
      } else {
        setShowError(true);
        setErrorMsg(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={submit}>
      <h1 className="mb-3 font-normal">Please Login</h1>
      <label htmlFor="inputEmail" className="visually-hidden">
        Email Address
      </label>
      <input
        id="inputEmail"
        className="mb-4 border rounded p-2 text-xl"
        type="email"
        placeholder="Enter Your Email"
        required
        name="email"

        // onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="inputPassword" className="visually-hidden">
        Password
      </label>
      <input
        id="inputPassword"
        className="form-control mb-4 border rounded p-2 text-xl"
        // value={password}
        name="password"
        type="password"
        placeholder="Enter Your Password"
        required
        // onChange={(e) => setPassword(e.target.value)}
      />
      {showError && <div>{errorMsg}</div>}

      <button
        type="submit"
        className="bg-slate-500 text-2xl text-white p-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
