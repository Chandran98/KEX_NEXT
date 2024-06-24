import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { fiatWithdrawal } from "@/redux/reducer/wallet/walletApi";

const fiatwithdrawalform = () => {
  const withdrawalSchema = z.object({
    amount: z.number({ message: "required" }).gte(100, "minimum 100 "),
    bank: z.string().min(1, { message: "Required" }),
    description: z.string().min(1, { message: "Required" }),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(withdrawalSchema),
  });
  const [bank, setBank] = useState(null);
  const { userData } = useSelector((state) => state.user);
  const onSubmit = (data) => {
    const params = {
      ...data,
      ...bank,
      ...{ currency: "inr", fees: "10", transfer_option: "" },
    };
    dispatch(fiatWithdrawal(params));
  };
  const handleBankChange = (event) => {
    const selectedBank = userData?.data?.bank_info.find(
      (option) => option.bankname === event.target.value
    );
    setBank(selectedBank);
    console.log(bank);
  };
  const withdrawalNoteDetails = [
    "Please don't deposit any other digital assets in this currency",

    "Minimum Withdrawal Amount 1000 INR",
  ];
  return (
    <tr className="bg-blue-200 col-span-6">
      <td colSpan="4">
        <div className=" grid grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <h1>Withdrawal</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`p-4 space-y-4 w-[65%] `}
            >
              <div>
                <label
                  htmlFor="issueType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("amount", { valueAsNumber: true })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.amount && (
                  <span className="text-red-600 text-sm">
                    {errors.amount.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="issueType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Your Bank
                </label>
                <select
                  id="issueType"
                  {...register("bank")}
                  onChange={handleBankChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {userData?.data?.bank_info.map((option) => {
                    return (
                      <option
                        key={option.bankname}
                        value={option.bankname}
                        defaultValue={"select you bank"}
                      >
                        {option.bankname}
                      </option>
                    );
                  })}
                </select>
                {errors.banks && (
                  <span className="text-red-600 text-sm">
                    {errors.banks.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="issueType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Notes
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("description")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.notes && (
                  <span className="text-red-600 text-sm">
                    {errors.notes.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#004dec] text-white p-2 rounded-md"
              >
                Submit
                {/* {loading ? "loading" : "Submit"} */}
              </button>
            </form>
          </div>
          <div className="card-body">
            <div>
              <h1 className="">Bank Details</h1>
              <div className=" flex flex-col gap-3 ">
                <span className="mt-2 ">Holder Name : {bank?.holder}</span>
                <span>Bank Name : {bank?.bankname}</span>
                <span>Account No. : {bank?.accNumber}</span>
                <span>IFSC code : {bank?.ibanCode}</span>
                <span>Account Type :{bank?.account_type}</span>
              </div>
              <h6 className="mt-6">Note:</h6>
              <ul className=" flex flex-col gap-3">
                {withdrawalNoteDetails.map((e, i) => (
                  <li className=""> {e}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default fiatwithdrawalform;
