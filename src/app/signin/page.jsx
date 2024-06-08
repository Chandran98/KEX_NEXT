"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import Authform from "./loginComp";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { signIn } from "@/redux/reducer/user/userApi";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    const formSchema = z.object({
        email: z.string().email("Invalid email"),
        password: z.string().min(6).max(20),
      });

    const defaultValues = {
        email: "",
        password: "",
      };
      const dispatch = useDispatch();
    
      const { authData, loading, error } = useSelector((state) => state.user);
    
      console.log("sttatte", authData);
    
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
        console.log(data,"datadata");
        dispatch(signIn(data)).then((res) => {
          if (res.payload.status == true) {
            router.push("/dashboard");
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
            defaultValues={defaultValues}
            classBame={"w-full"}
          />

            {/* <form  className="mt-8">
              <div className="space-y-5">
                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                    
                      placeholder="Enter email to get started"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      for=""
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>

                    <a
                      href="#"
                      title=""
                      className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="password"
                   
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form> */}
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
