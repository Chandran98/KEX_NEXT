/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CustomForm from "@/components/customForm";
import DashBoardHeader from "@/components/header";
import React, { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bankFormSchema } from "@/utils/formSchema";
import BankForm from "@/utils/form/bankForm";
import OrderTab from "./comp";
import { useDispatch } from "react-redux";
import { getProfile } from "@/redux/reducer/user/userApi";
import axios from "axios";
import { headers, uploadFile } from "@/constant/apiUrl";

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const onSubmit = async (data) => {
    

    const formData = new FormData();
    formData.append('fileKey', data.image);
    console.log(formData,"formData");
    try {
      const response = await axios.post(
   "http://localhost:8290/upload-file",formData,{ headers: {
    
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJ1c2VyX2xvZ2luIiwiaWQiOiI2MzhhYzkyYjFlMmNmZDQwNDZmNjMxMzYiLCJzdGF0dXMiOnRydWUsImlhdCI6MTcxNzc2NDI0MCwiZXhwIjoxNzE3ODUwNjQwfQ.FdKmk-0CsdRZzXlkqTL4EVjvvKrvbR-e6cPmL28XsRU`,
  }}
      ).then((res)=>{console.log(res.data)});
      console.log("Success:", response.status);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
      console.error("Error:", error.response?.data || error.message);
    }
  };
  const loading = false;

  const formFieldData = [
    // { id: "1", name: "username", title: "Username", placeholder: "username" },
    {
      id: "1",
      name: "holder",
      title: " Holder Name ",
      // placeholder: "manjukairaa@gmail.com",
    },
    { id: "6", name: "bank", title: " Bank Name " },
    {
      id: "2",
      name: "account",
      title: " Account No ",
      // placeholder: "7092774422",
    },
    {
      id: "3",
      name: "confirmaccount",
      title: " Confirm Account ",
      // placeholder: "7092774422",
    },
    { id: "4", name: "ifsc", title: " IFSC Code " },
    {
      id: "5",
      name: "branch",
      title: " Branch Name ",
    },
    { id: "8", name: "accountType", title: "Account Type", type: "drop" },
    { id: "7", name: "upi", title: " UPI (Optional) " },
  ];
  const dropdownOptions = [
    { value: "", label: "Select Account type" },
    { value: "current", label: "Current Account" },
    { value: "savings", label: "Savings Account" },
  ];
  return (
    <div className=" ">
      <DashBoardHeader />
      <div className="card m-4 ">
        <div className="card-body">
          <h1>Add Bank</h1>
          <div className=" grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className=" col-span-1 ">
              <CustomForm
                onSubmit={() => onSubmit}
                loading={loading}
                formFieldData={formFieldData}
                fileUpload={true}
                formSchema={bankFormSchema}
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

              <h1 className=" mt-10">Bank Details</h1>
              <OrderTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
