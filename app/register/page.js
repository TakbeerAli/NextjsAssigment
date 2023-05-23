"use client";
import { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";

export default function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setregisterPassword] = useState("");

  const register = () => {
    axios({
      method: "post",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>register</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setRegisterUsername(e.target.value)}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={(e) => setregisterPassword(e.target.value)}
      ></input>
      <button onClick={register}>register</button>
    </div>
  );
}
