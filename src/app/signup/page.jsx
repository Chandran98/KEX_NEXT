"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import React, { useState } from "react";
// import Modal from "./modal";
import { Row, Card, Col, Button, Modal } from "react-bootstrap";
import Authform from "../signin/loginComp";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "@/redux/reducer/user/userApi";
import { z } from "zod";

const page = () => {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6).max(20),
    phone: z.string().min(10).max(10),
    referral: z.string(),
    confirm_password: z
      .string()

      .trim()
      .min(1, { message: "Required" })
      .refine(({ account, confirmaccount }) => account === confirmaccount, {
        message: "Account doesn't match confirm Account",
        path: ["confirmaccount"],
      }),
  });

  const defaultValues = {
    email: "",
    password: "",
    phone: "",
    referral: "",
    confirmaccount: "",
  };
  const dispatch = useDispatch();

  const { authData, loading, error } = useSelector((state) => state.user);

  // console.log("sttatte", authData);

  async function onSubmit(values) {
    console.log(values, "datadata");
    localStorage.setItem("regemail",values.email)
    let data = {
      email: values.email,
      mobile: values.phone,
      password: values.password,
      confirm_password: values.confirm_password,
      referralcode: values.referral,
    };
    console.log(data, "datadata");
    dispatch(signUp(data)).then((res) => {
      if (res.payload.status == true) {
        router.push("/otpverify");
      }
    });
  }

  const formFieldData = [
    { id: "1", name: "phone", title: "Phone" },
    { id: "2", name: "email", title: "Email", placeholder: "adad@gmail.com" },
    { id: "3", name: "password", title: "Password", placeholder: "........" },
    {
      id: "4",
      name: "confirm_password",
      title: "Confirm password",
      placeholder: "........",
    },
    {
      id: "5",
      name: "referral",
      title: "Referral",
      placeholder: "adad@gmail.com",
    },
  ];

  return (
    <section className="bg-white h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign Up
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                title=""
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
              >
                Login
              </a>
            </p>
            <Authform
              onSubmit={() => onSubmit}
              loading={loading}
              formFieldData={formFieldData}
              formSchema={formSchema}
              defaultValues={defaultValues}
              classBame={"w-full"}
            />
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
          <div>
            <Image
              className="w-full mx-auto"
              width={100}
              height={300}
              src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
              alt=""
            />

            <div className="w-full max-w-md mx-auto xl:max-w-xl">
              <h3 className="text-2xl font-bold text-center text-black">
                Design your own card
              </h3>
              <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>

              <div className="flex items-center justify-center mt-10 space-x-3">
                <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>

                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>

                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
