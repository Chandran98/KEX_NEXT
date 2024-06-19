/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Inform from "@/utils/form/customForm";
import DashBoardHeader from "@/components/header";
import React, { useEffect } from "react";
import { z } from "zod";
import OrderTab from "./ticketComp";
import { useDispatch, useSelector } from "react-redux";
import { createTicket, supportTicket } from "@/redux/reducer/utils/utilsApi";

const page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(supportTicket());
  }, [dispatch]);

  const { loading, error } = useSelector((state) => state.utils);
  const onSubmit = async (data) => {
    dispatch(createTicket(data));
  };

  const formFieldData = [
    {
      name: "issue_type",
      title: "Issue Type",
      data: [
        { value: "", label: "Select issue type" },
        { value: "deposit", label: "Deposit" },
        { value: "withdrawal", label: "Withdrawal" },
        { value: "accountSecurity", label: "Account Security" },
        { value: "kycVerification", label: "KYC Verification" },
        { value: "complaints", label: "Complaints" },
        { value: "bugReports", label: "Bug Reports" },
      ],
      type: "drop",
    },
    { name: "query", title: "Query" },
    { name: "subject", title: "Subject" },
    { name: "description", title: "Description" },
  ];
  const schema = z.object({
    issue_type: z.string().nonempty({ message: "Issue type is required" }),
    query: z.string().nonempty({ message: "Description is required" }),
    subject: z.string().nonempty({ message: "Subject is required" }),
    description: z.string().nonempty({ message: "Description is required" }),
    images: z.any().optional(),
  });
  return (
    <>
      <DashBoardHeader />
      <div className="card m-4  ">
        <div className="card-body p-4">
          <h1>Create a Ticket</h1>
          <div className=" grid lg:grid-cols-3 grid-cols-1   gap-4">
            <div className=" col-span-1 ">
              <Inform
                onSubmit={() => onSubmit}
                loading={loading}
                formFiledData={formFieldData}
                fileUpload={true}
                formSchema={schema}
                // dropdownOptions={dropdownOptions}
                imgName="images"
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
