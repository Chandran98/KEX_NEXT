/* eslint-disable react/no-unescaped-entities */
"use client";
import { getProfile } from "@/redux/reducer/user/userApi";
import { sendSMS, verifySMSOtp } from "@/redux/reducer/utils/utilsApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import Passcode from "./passcode";

function Modal({ modal, setModal, modalName }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const onVerifyOtp = (data) => {
    if (modalName === "passcode") {
      dispatch(verifySMSOtp(data));
    } else {
      dispatch(verifySMSOtp(data)).then((res) => {
        if (res.payload.status == true) {
          setModal(false);
        }
      });
    }
  };

  const { userData } = useSelector((state) => state.user);
  const { loading, mobileOtpVerified } = useSelector((state) => state.utils);

  const formFieldData = z.object({
    code: z
      .string()
      .trim()
      .min(6, { message: "Min 6 Required" })
      .max(6, { message: "Max 6 Required" }),
    mobile: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formFieldData),
    defaultValues: { mobile: userData?.data?.phone },
  });
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border  shadow-lg rounded-md bg-white w-[30%]">
        {mobileOtpVerified ? (
          <Passcode modal={modal} setModal={setModal} />
        ) : (
          <div className="">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold text-gray-900 mr-10">
                Mobile Verification
              </h3>
              <button
                onClick={() => {
                  setModal(!modal);
                }}
                className=" bg-blue-600 rounded-lg p-1 align-middle "
              >
                <IoCloseCircleOutline color="white" />
              </button>
            </div>

            <div className="my-2 ">
              <form action="" onSubmit={handleSubmit(onVerifyOtp)}>
                <span>
                  We will send OTP to your registered mobile no. to
                  {userData?.data?.phone}. Please enter OTP below flied to
                  verify your mobile no.
                </span>
                <input
                  {...register("code")}
                  type="text"
                  className="form-control mt-3"
                />
                {errors.code && (
                  <span className="text-red-600 text-sm">
                    {errors.code.message}
                  </span>
                )}
                <button
                  type="submit"
                  className=" btn w-full text-white bg-primary mt-2"
                >
                  {loading ? "loading" : "Submit"}
                </button>
              </form>
            </div>
            <span
              onClick={() => {
                dispatch(sendSMS(userData?.data?.phone));
              }}
              className="mt-4"
            >
              Didn't receive OTP ?
              <strong className="  text-primary font-semibold">
                Resend OTP
              </strong>
            </span>
          </div>
        )}
        {/* {staate?<></>: <button
                onClick={openModal}
                type="submit"
                className=" btn w-full text-white bg-primary mt-2"
              >
                Send OTP
              </button>} */}
      </div>
    </div>
  );
}
export default Modal;
