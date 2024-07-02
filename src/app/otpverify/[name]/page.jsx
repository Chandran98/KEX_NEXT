/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  activateAccount,
  forgotPasswordVerify,
  signUp,
} from "@/redux/reducer/auth/authApi";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCookie } from "cookies-next";

const Page = () => {
  const [codes, setCodes] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  const router = useRouter();
  const params = useParams();
  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d?$/.test(value)) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (codes.some((code) => code === "")) {
      setError("Please fill in all fields.");
    } else if (codes.some((code) => !/^\d$/.test(code))) {
      setError("Please enter only numeric digits.");
    } else {
      setError("");
      const verificationCode = codes.join("");
      const data = {
        code: verificationCode,
      };
      if (params.name === "register") {
        dispatch(activateAccount(data)).then((res) => {
          res.payload.status == true && router.push("/signin");
        });
      } else if (params.name === "forgototpverify") {
        console.log(" reds eewewe");
        dispatch(forgotPasswordVerify(data)).then((res) => {
         
          res.payload.status == true && router.push("/resetpassword");
        });
      }
    }
  };

  return (
    <div className="p-1">
      <div className="relative max-w-md mx-auto mt-8 md:mt-16">
        <div className="grid grid-cols-1 bg-white rounded-lg shadow-md">
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <form
              onSubmit={handleSubmit}
              className="card-body flex flex-col text-center items-center justify-center"
            >
              <h2>Security Verification</h2>
              <span>
                To secure your account, please complete the following
                verification.
              </span>
              <h5 className="mt-5">Email Verification Code</h5>
              <div className="flex justify-between gap-2 mb-4">
                {codes.map((code, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={code}
                    onChange={(e) => handleChange(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="border-2 border-blue-500 rounded w-12 h-12 mt-6 text-center text-lg"
                  />
                ))}
              </div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <div className="gap-2">
                <span>Enter the six digit code received by</span>
                <span className="text-blue-600 font-bold">
                  {getCookie("email")}
                </span>
                <span>.</span>
              </div>
              <Button className="w-[20vw] mt-3" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
