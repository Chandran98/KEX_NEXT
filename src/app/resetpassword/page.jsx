/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { passwordReset } from "@/redux/reducer/auth/authReducer";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";

const Page = () => {
  const router = useRouter();

  const formSchema = z.object({
    password: z.string().min(6).max(20, { message: "Required" }),
    confirm_password: z.string().min(6).max(20, { message: "Required" }),
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  async function onSubmit(values) {
    dispatch(passwordReset(values)).then((res) => {
      if (res.payload.status == true) {
        router.push("/signin");
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
                <Link href="/dashboard"></Link>
              </div>
              <h4 className="text-center mb-4">Reset Password</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    <strong>Password</strong>
                  </label>
                  <input
                    {...register("password")}
                    id="password"
                    type="text"
                    className="form-control"
                    // defaultValue="Password"
                  />
                  {errors.password && (
                    <span className="text-red-600 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    <strong>Confirm Password</strong>
                  </label>
                  <input
                    {...register("confirm_password")}
                    id="confirm_password"
                    type="text"
                    className="form-control"
                    // defaultValue="Password"
                  />
                  {errors.confirm_password && (
                    <span className="text-red-600 text-sm">
                      {errors.confirm_password.message}
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

export default Page;
