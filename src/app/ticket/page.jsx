/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CustomForm from "@/components/customForm";
import DashBoardHeader from "@/components/header";
import React, { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bankFormSchema, ticketFormSchema } from "@/utils/formSchema";
import BankForm from "@/utils/form/bankForm";
import OrderTab from "./ticketComp";
import { useDispatch } from "react-redux";
import { getProfile } from "@/redux/reducer/user/userApi";

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const onSubmit = async (data) => {
    console.log(data,"adsfdafas");
    // const formData = new FormData();
    // formData.append("fileKey", data.image);
    // try {
    //   const response = await axios.post(
    //     "http://localhost:8290/upload-file",
    //     formData,
    //     {
    //       headers: {
    //         Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJ1c2VyX2xvZ2luIiwiaWQiOiI2MzhhYzkyYjFlMmNmZDQwNDZmNjMxMzYiLCJzdGF0dXMiOnRydWUsImlhdCI6MTcxNzc2NDI0MCwiZXhwIjoxNzE3ODUwNjQwfQ.FdKmk-0CsdRZzXlkqTL4EVjvvKrvbR-e6cPmL28XsRU`,
    //       },
    //     }
    //   );
    // } catch (error) {
    //   console.error("Error:", error);
    //   console.error("Error:", error.response?.data || error.message);
    // }
  };

  const loading = false;

  const formFieldData = [
    // { id: "1", name: "username", title: "Username", placeholder: "username" },
    { id: "8", name: "issueType", title: "Issue Type", type: "drop" },

    {
      id: "2",
      name: "subject",
      title: "Subject",
    },
    {
      id: "3",
      name: "description",
      title: "Description",
    },
  ];
  const dropdownOptions = [
    { value: "", label: "Select issue type" },
    { value: "deposit", label: "Deposit" },
    { value: "withdrawal", label: "Withdrawal" },
    { value: "accountSecurity", label: "Account Security" },
    { value: "kycVerification", label: "KYC Verification" },
    { value: "complaints", label: "Complaints" },
    { value: "bugReports", label: "Bug Reports" },
  ];
  return (
    <>
      <DashBoardHeader />
      <div className="card m-4  ">
        <div className="card-body p-4">
          <h1>Create a Ticket</h1>
          <div className=" grid lg:grid-cols-3 grid-cols-1   gap-4">
            <div className=" col-span-1 ">
              <CustomForm
                onSubmit={() => onSubmit}
                loading={loading}
                formFieldData={formFieldData}
                fileUpload={true}
                formSchema={ticketFormSchema}
                dropdownOptions={dropdownOptions}
                // defaultValues={defaultValues}
                classBame={"w-full px-5"}
              />
            </div>
            <div className="card-body lg:col-span-2 px-3">
              <div>
                Founded in 2021 by a group of professionals from the worlds of
                crypto and technology, the crypto exchange aims to provide trust
                and security for its users. Meanwhile, it continues to expand
                its crypto derivatives offerings in order to meet the needs of
                users, including contracts and Forex products. The goal is to
                create a borderless crypto platform that helps ground crypto
                assets in the real world and bring sound money to everyone.
                Founded in 2021 by a group of professionals from the worlds of
                crypto and technology, the crypto exchange aims to provide trust
                and security for its users. Meanwhile, it continues to expand
                its crypto derivatives offerings in order to meet the needs of
                users, including contracts and Forex products. The goal is to
                create a borderless crypto platform that helps ground crypto
                assets in the real world and bring sound money to everyone.
              </div>

              <h1 className=" mt-10">Support Ticket</h1>
              <OrderTab />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
