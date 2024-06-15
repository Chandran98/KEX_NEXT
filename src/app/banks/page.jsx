/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Inform from "@/utils/form/customForm";
import DashBoardHeader from "@/components/header";
import React, { useEffect } from "react";
import { bankFormSchema } from "@/utils/formSchema";
import OrderTab from "./comp";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateBank } from "@/redux/reducer/user/userApi";


const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const{loading,error}=useSelector((state)=>state.user);

  const onSubmit = async (data) => {
    console.log(data,"mydata");
    dispatch(updateBank(data));

  };
  const formFieldData = [
    {

      name: "holder",
      title: " Holder Name ",
    },
    { name: "bankname", title: " Bank Name " },
    {
      name: "accNumber",
      title: " Account No ",
    },
    // {
    //   id: "3",
    //   name: "confirmaccount",
    //   title: " Confirm Account ",
    //   // placeholder: "7092774422",
    // },
    { name: "ibanCode", title: " IFSC Code " },
    {
      name: "branch",
      title: " Branch Name ",
    },
    { name: "account_type", title: "Account Type",data:[
      { value: "", label: "Select Account type" },
      { value: "current", label: "Current Account" },
      { value: "savings", label: "Savings Account" },
    ], type: "drop" },
    { name: "Upi_id", title: " UPI (Optional) " },
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
                // dropdownOptions={dropdownOptions}
                imgName="proof"
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
