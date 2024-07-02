"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import React, { useEffect } from "react";
import Authform from "./loginComp";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { signIn } from "@/redux/reducer/auth/authApi";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6).max(20),
  });

  const dispatch = useDispatch();

  const { authData, loading, error } = useSelector((state) => state.auth);

  async function onSubmit(values) {
    let data = {
      deviceInfo: {
        browser: "",
        browser_version: "",
        os: "",
        device: "mobile",
      },
      browser: "Chrome",
      browser_version: "116.0.0.0",
      device: "PC", //mobile,
      os: "Linux", //others,
      ipaddress: "123.45.678.900",
      password: values.password,
      username: values.email,
    };
    dispatch(signIn(data)).then((res) => {
      if (res.payload.status == true) {
        const token = res.payload.token;
        console.log("mytoken", token);

        router.push("/");
        router.refresh();
      }
    });
  }

  const formFieldData = [
    { id: "1", name: "email", title: "Email", placeholder: "adad@gmail.com" },
    { id: "2", name: "password", title: "Password", placeholder: "........" },
  ];

  return (
    <section className="bg-white h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don’t have an account?
              <a
                href="/signup"
                title=""
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
              >
                Create a free account
              </a>
            </p>
            <Authform
              onSubmit={() => onSubmit}
              loading={loading}
              formFieldData={formFieldData}
              formSchema={formSchema}
              classBame={"w-full mb-2"}
            />
            <Link
              href={"/forgotpassword"}
              className="font-medium text-blue-600 mt-24 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className="flex items-center h-screen justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
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
