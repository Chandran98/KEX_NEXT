/* eslint-disable react-hooks/rules-of-hooks */
import { setPasscode } from "@/redux/reducer/utils/utilsApi";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { z } from "zod";

const passcode = ({ modal, setModal,}) => {
    const dispatch = useDispatch();
    const onSetPasscode = (data) => {
        dispatch(
          setPasscode(data)
        ).then((res) => {
          if (res.payload.status == true) {
            setModal(false);
          }
        });
      };

    const formFieldData = z.object({
        code: z
          .string()
          .trim()
          .min(6, { message: "Min 6 Required" })
          .max(6, { message: "Max 6 Required" }),
  
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(formFieldData),
      });

  return (
    <div className="">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-gray-900 mr-10">
          Fund Passcode
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
        <form action="" onSubmit={handleSubmit(onSetPasscode)}>
          <span>
            Create your own Passcode to allow Withdraw funds. Its should not be
            continous number Ex: 123756, 5456421, etc., And It should be contain
            only numbers
          </span>
          {/* <input type="text" className="form-control" defaultValue={userData?.data?.phone}/> */}
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
            Submit
          </button>
        </form>
      </div>
      {/* <span
      onClick={() => {
        dispatch(sendSMS(userData?.data?.phone));
      }}
      className="mt-4"
    >
      Didn't receive OTP ?
      <strong className="  text-primary font-semibold">Resend OTP</strong>
    </span> */}
    </div>
  );
};

export default passcode;
