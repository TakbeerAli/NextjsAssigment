"use client";
import { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";

export default function business() {
  const getInitialState = () => {
    const value = "pakistan";
    return value;
  };

  const brancName = () => {
    const value = "islamabad";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  // const [businessBranchName, setBusinessBranchName] = useState(brancName);
  // const [BusinessBranchAdress, setBusinessBranchAdress] = useState("");
  const [businessName, setbusinessName] = useState("");
  const [businessAdress, setbusinessAdress] = useState("");
  const [businessTiming, setbusinessTiming] = useState("");
  const [businessDay, setbusinessDay] = useState();
  console.log(businessDay);
  // console.log(value, businessName, businessAdress, businessTiming);
  const addBusiness = () => {
    axios({
      method: "post",
      data: {
        businessName: businessName,
        businessAdress: businessAdress,
        businessTiming: businessTiming,
        businessDay: businessDay,
        businessCountry: value,
        // businessBranchName: businessBranchName,
        // BusinessBranchAdress: BusinessBranchAdress,
      },
      withCredentials: true,
      url: "http://localhost:4000/business",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });
  // console.log(userinfo.languages);

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;
    setbusinessDay(languages);

    // console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1>Business</h1>
      <input
        type="text"
        name="businessName"
        placeholder="businessName"
        onChange={(e) => setbusinessName(e.target.value)}
      ></input>
      <input
        type="text"
        name="businessAdress"
        placeholder="businessAdress"
        onChange={(e) => setbusinessAdress(e.target.value)}
      ></input>
      <input
        type="text"
        name="businessTiming"
        placeholder="businessTiming"
        onChange={(e) => setbusinessTiming(e.target.value)}
      ></input>
      <br />

      <h3>Business Timeing</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="form-check m-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="languages"
              value="Monday"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Monday
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-check m-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="languages"
              value="tueday"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Tuesday
            </label>
          </div>
        </div>
      </div>

      <p>Country</p>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="pakistan">pakistan</option>
        <option value="usa">usa</option>
        <option value="canada">canada</option>
      </select>

      <br />
      <br />
      {/* branch name list */}
      {/* <div>
        <p>Business branch Name</p>
        <select
          value={businessBranchName}
          onChange={(e) => setBusinessBranchName(e.target.value)}
        >
          <option value="islamabad">islamabad</option>
          <option value="karachi">karachi</option>
          <option value="lahore">lahore</option>
        </select>
      </div>

      <div>
        <p>Business branch address</p>
        <input
          type="text"
          name="businessBranchAdress"
          placeholder="businessBranchAdress"
          onChange={(e) => setBusinessBranchAdress(e.target.value)}
        ></input>
      </div> */}

      <button onClick={addBusiness}>register</button>
    </div>
  );
}
