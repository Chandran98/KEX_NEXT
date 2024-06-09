/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Inform from "@/utils/form/customForm";
import DashBoardHeader from "@/components/header";
import React, { useEffect } from "react";
import { bankFormSchema } from "@/utils/formSchema";
import OrderTab from "./comp";
import { useDispatch } from "react-redux";
import { getProfile } from "@/redux/reducer/user/userApi";


const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const onSubmit = async (data) => {
    console.log(data,"mydata");

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
              
                 <Inform
                onSubmit={() => onSubmit}
                loading={loading}
                formFiledData={formFieldData}
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
