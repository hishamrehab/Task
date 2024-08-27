import { headers } from "next/headers";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("https://loacalhost:800/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        value: {
          name,
          email,
          password,
        },
      }),
    });

    await router.push("/login");
  };

  return (
    <form className="flex flex-col" onSubmit={submit}>
      <h1 className="mb-3 font-normal">Please Register</h1>
      <input
        className="form-control"
        placeholder="Name.."
        required
        value={name}
        autoFocus
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="inputEmail" className="visully-hidden">
        Email Address
      </label>

      <input
        id="inputEmail"
        className="mb-4 border rounded p-2 text-xl"
        value={email}
        type="email"
        placeholder="Enter Your Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="inputPassword" className="vissulaay-hidden">
        Password
      </label>
      <input
        id="inputPassword"
        className="form-control mb-4 border rounded p-2 text-xl"
        value={password}
        type="password"
        placeholder="Enter Your Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-8 bg-slate-500 text-2xl text-white  p-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default register;
