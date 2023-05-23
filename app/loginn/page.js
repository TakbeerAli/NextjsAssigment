"use client";
import { useState } from "react";
import Navbar from "../component/Navbar";
// import Router from "next/router";
// import Router from 'next/router';
import { useRouter } from "next/navigation";
import axios from "axios";
// import { redirect } from "next/navigation";
// import { Redirect } from "next";
const homee = "/";
export default function Register() {
  // const router = useRouter();
  const router = useRouter();

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    })
      .then((res) => {
        console.log(res);
        // Redirect();
        router.push("/business");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setLoginUsername(e.target.value)}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={(e) => setLoginPassword(e.target.value)}
      ></input>
      <button onClick={login}>Login</button>
    </div>
  );
}
