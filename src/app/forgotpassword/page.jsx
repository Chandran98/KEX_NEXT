/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "@/redux/reducer/auth/authApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const page = () => {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email("Invalid email"),
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  async function onSubmit(values) {
    
    // console.log(values, "values");
    // let data = {
    //   email: values,
    // };
    localStorage.setItem("email",values.email)
    dispatch(forgotPassword(values)).then((res) => {
      if (res.payload.status == true) {
        router.push("/otpverify/forgototpverify");
      }
    });
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    // defaultValues: defaultValues,
  });

  return (
    <div className=" fixed inset-0 flex items-center justify-center">
      <div className="bg-white w-[40vw]">
        <div className="row no-gutters">
          <div className="col-xl-12">
            <div className="auth-form">
              <div className="text-center mb-3">
                <Link href="/user/dashboard"></Link>
              </div>
              <h4 className="text-center mb-4">Reset Login Password</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    <strong>Email</strong>
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="text"
                    className="form-control"
                    // defaultValue="Password"
                  />
                    {errors.email && (
                <span className="text-red-600 text-sm">
                  {errors.email.message}
                </span>
              )}
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    {loading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
