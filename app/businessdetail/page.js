"use client";
// import Navbar from "./component/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [businessDetail, setbusinessDetail] = useState("");

  useEffect(() => {
    getBusinessDetail();
  }, []);

  const getBusinessDetail = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:4000/getBusinessDetail",
    })
      .then((res) => {
        setbusinessDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div>
        <h1>businessDetail</h1>
      </div>
    </div>
  );
}
