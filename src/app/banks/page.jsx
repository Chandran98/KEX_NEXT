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

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bankFormSchema),
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const onSubmit = (data) => {
    console.log("Form data", data);
  };

  const loading = false;

  const formFieldData = [
    // { id: "1", name: "username", title: "Username", placeholder: "username" },
    {
      id: "1",
      name: "holder",
      title: " Holder Name ",
      placeholder: "manjukairaa@gmail.com",
    },
    {
      id: "2",
      name: "account",
      title: " Account No ",
      placeholder: "7092774422",
    },
    {
      id: "3",
      name: "confirmaccount",
      title: " Confirm Account ",
      placeholder: "7092774422",
    },
    { id: "4", name: "ifsc", title: " IFSC Code ", placeholder: "MSJS8900" },
    {
      id: "5",
      name: "branch",
      title: " Branch Name ",
      placeholder: "Medavakkam",
    },
    { id: "6", name: "bank", title: " Bank Name ", placeholder: "IOB" },
    { id: "7", name: "upi", title: " UPI ", placeholder: "7668687768@okaxis" },
  ];
  return (
    <>
      <DashBoardHeader />
      <div className="card m-4  ">
        <div className="card-body">
          <h1>Add Bank</h1>
          <div className=" grid lg:grid-cols-3  gap-4">
            <div className=" col-span-1 ">
              <CustomForm
                onSubmit={() => onSubmit}
                loading={loading}
                formFieldData={formFieldData}
                // fileUpload={true}
                formSchema={bankFormSchema}
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
    </>
  );
};

export default page;
