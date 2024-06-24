/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cryptoBalance,
  cryptoWithdrawal,
  fiatBalance,
  fiatDeposit,
} from "@/redux/reducer/wallet/walletApi";
import { GlobalFilter } from "@/components/referal/referalcomp";
import Image from "next/image";
import DashBoardHeader from "@/components/header";
import Inform from "@/utils/form/customForm";
import { z } from "zod";
import { getProfile } from "@/redux/reducer/user/userApi";
import { bankDetails } from "@/redux/reducer/utils/utilsApi";
import { cryptoWithdrawalSchema } from "@/utils/formSchema";
import Fiatwithdrawalform from "./fiatwithdrawalform";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cryptoBalance());
    dispatch(fiatBalance());
    dispatch(getProfile());
    dispatch(bankDetails());
  }, [dispatch]);

  const [globalFilter, setGlobalFilter] = useState("");
  const [openInrDeposit, setOpenInrDeposit] = useState(false);
  const [openInrWithdrawal, setOpenInrWithdrawal] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(-1);
  const [openCryptoWithdrawal, setopenCryptoWithdrawal] = useState(false);
  const [cryptoCoin, setCryptoCoin] = useState(null);

  const [hideZero, setHideZero] = useState(false);

  const { loading, cryptoBalanceData, fiatBalannceData, error } = useSelector(
    (state) => state.wallet
  );
  const { userData } = useSelector((state) => state.user);
  const { bankData } = useSelector((state) => state.utils);

  const toggleHideZero = () => {
    setHideZero(!hideZero);
  };

  const handleFilterChange = (e) => {
    setGlobalFilter(e.target.value);
  };

  const filteredData = cryptoBalanceData?.data?.filter((item) => {
    const matchesName = item.coin
      .toLowerCase()
      .includes(globalFilter.toLowerCase());
    const matchesAmount = !hideZero || item.amount > 0;
    return matchesName && matchesAmount;
  });
  const formFieldData = [
    { name: "amount", title: "Amount" },
    {
      name: "method",
      title: "Payment Way",
      data: [
        { value: "IMPS", label: "IMPS" },
        { value: "NEFT", label: "NEFT" },
        { value: "UPI", label: "UPI" },
        { value: "RTGS", label: "RTGS" },
      ],
      type: "drop",
    },
    { name: "transactionid", title: "Transaction ID" },
    { name: "comment", title: "Comment" },
    {
      name: "bankname",
      title: "Select Your Bank",
      data: userData?.data?.bank_info,
      type: "drop",
      bank: "bank",
    },
  ];
  const withdrawalformFieldData = [
    { name: "amount", title: "Amount" },
    {
      name: "method",
      title: "Payment Way",
      data: userData?.data?.bank_info.map((option) => ({
        value: option.bankname,
        label: option.bankname,
      })),
      type: "drop",
    },
    { name: "transactionid", title: "Transaction ID" },
  ];

  const cryptoWithdrawalformFieldData = [
    { name: "amount", title: "Amount" },
    { name: "address", title: "Address" },
    { name: "description", title: "Notes" },
  ];
  const depositSchema = z.object({
    amount: z.string().min(1, { message: "minimum 100$ " }),
    method: z.string().min(1, { message: "required" }),
    transactionid: z.string().min(1, { message: "required" }),
    comment: z.string().min(1, { message: "required" }),
    bankname: z.string().min(1, { message: "required" }),
    proof: z.any(),
  });



  const noteDetails = [
    "Please deposit funds from verified bank account",

    "Otherwise your deposit will not reflected on this wallet.",

    "Transfer using only your banking app NEFT or IMPS.",
    "Minimum deposit amount : 100 INR",
  ];


  const onSubmit = async (data) => {
    const fiatData = { ...data, ...{ currency: "inr" } };
    dispatch(fiatDeposit(fiatData));
  };

  const onCryptosubmit = async (data) => {
    const cryptoData = {
      ...data,
      ...{ currency: cryptoCoin.currency, network: cryptoCoin.coin },
    };
    dispatch(cryptoWithdrawal(cryptoData));
  };
  // const{register,handleSubmit,formState:{errors}}=  useForm({resolver:zodResolver(cryptoWithdrawalSchema)})
  return (
    <>
      <DashBoardHeader />
      <div className=" m-4  ">
        <div className="card m-2 mb-4">
          <div className="card-header m-6 flex justify-between">
            <h4 className="card-title">Fiat Holdings</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <div className="table-responsive dataTabletrade">
                <div
                  id="future_wrapper"
                  className="dataTables_wrapper no-footer"
                >
                  <table
                    id="example"
                    className="table display dataTable no-footer"
                    style={{ minWidth: "645px" }}
                  >
                    <thead>
                      <tr className="text-left">
                        <th>Coin</th>
                        <th>Amount</th>
                        <th>On-hold</th>
                        <th className="text-center">Operation</th>
                      </tr>
                    </thead>
                    <tbody className="text-left">
                      <tr>
                        <td>
                          {fiatBalannceData?.data[0]?.currency.toUpperCase()}
                        </td>
                        <td>{fiatBalannceData?.data[0]?.amount.toFixed(2)}</td>
                        <td>{fiatBalannceData?.data[0]?.hold.toFixed(2)}</td>
                        <td className="gap-2 flex justify-center text-white">
                          <div
                            className="bg-green-500 rounded-md px-3"
                            onClick={() => {
                              setOpenInrDeposit(!openInrDeposit);

                              setOpenInrWithdrawal(false);
                            }}
                          >
                            Deposit
                          </div>
                          <div
                            className="bg-red-500 rounded-md px-3"
                            onClick={() => {
                              setOpenInrWithdrawal(!openInrWithdrawal);
                              setOpenInrDeposit(false);
                            }}
                          >
                            Withdraw
                          </div>
                        </td>
                      </tr>
                      {openInrDeposit && (
                        <tr className="bg-blue-200 col-span-6">
                          <td colSpan="4">
                            <div className=" grid grid-cols-2">
                              <div className="flex flex-col items-start justify-start">
                                <h1>Deposit</h1>
                                <Inform
                                  onSubmit={() => onSubmit}
                                  loading={loading}
                                  formFiledData={formFieldData}
                                  fileUpload={true}
                                  formSchema={depositSchema}
                                  // dropdownOptions={dropdownOptions}
                                  imgName="proof"
                                  className="w-[65%]"
                                />
                              </div>
                              <div className="card-body">
                                <div>
                                  <h1 className="">Bank Details</h1>
                                  <div className=" flex flex-col gap-3 ">
                                    <span className="mt-2 ">
                                      Holder Name : {bankData?.data?.holder}
                                    </span>
                                    <span>
                                      Bank Name : {bankData?.data?.bankname}
                                    </span>
                                    <span>
                                      Account No. : {bankData?.data?.acc_number}
                                    </span>
                                    <span>
                                      IFSC code : {bankData?.data?.ifsc_code}
                                    </span>
                                    <span>
                                      Account Type :
                                      {bankData?.data?.account_type}
                                    </span>
                                  </div>
                                  <h6 className="mt-6">Note:</h6>
                                  <ul className=" flex flex-col gap-3">
                                    {noteDetails.map((e, i) => (
                                      <li className=""> {e}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                      {openInrWithdrawal && (
                                 <Fiatwithdrawalform/>
                        // <tr className="bg-blue-200 col-span-6">
                        //   <td colSpan="4">
                        //     <div className=" grid grid-cols-2">
                        //       <div className="flex flex-col items-start justify-start">
                        //         <h1>Withdrawal</h1>
                        //         <Fiatwithdrawalform/>
                        //         {/* <Inform
                        //           onSubmit={() => onSubmit}
                        //           loading={loading}
                        //           formFiledData={withdrawalformFieldData}
                        //           fileUpload={false}
                        //           formSchema={""}
                        //           // dropdownOptions={dropdownOptions}
                        //           imgName="proof"
                        //           className="w-[65%]"
                        //         /> */}
                        //       </div>
                        //       <div className="card-body">
                        //         <div>
                        //           <h1 className="">Bank Details</h1>
                        //           <div className=" flex flex-col gap-3 ">
                        //             <span className="mt-2 ">
                        //               Holder Name : {bankData?.data?.holder}
                        //             </span>
                        //             <span>
                        //               Bank Name : {bankData?.data?.bankname}
                        //             </span>
                        //             <span>
                        //               Account No. : {bankData?.data?.acc_number}
                        //             </span>
                        //             <span>
                        //               IFSC code : {bankData?.data?.ifsc_code}
                        //             </span>
                        //             <span>
                        //               Account Type :
                        //               {bankData?.data?.account_type}
                        //             </span>
                        //           </div>
                        //           <h6 className="mt-6">Note:</h6>
                        //           <ul className=" flex flex-col gap-3">
                        //             {withdrawalNoteDetails.map((e, i) => (
                        //               <li className=""> {e}</li>
                        //             ))}
                        //           </ul>
                        //         </div>
                        //       </div>
                        //     </div>
                        //   </td>
                        // </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card m-2">
          <div className=" m-6 flex-col md:flex">
            <h4 className="card-title">Crypto Holdings</h4>
            <div className="  mt-3">
              <input
                type="text"
                className="mr-2 border-2   rounded-sm  px-4 py-2"
                placeholder="Search by name"
                value={globalFilter}
                onChange={handleFilterChange}
              />
              <button
                className="bg-blue-500 text-white rounded-md px-4 py-2"
                onClick={toggleHideZero}
              >
                {hideZero ? "Show All" : "Hide Zero"}
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
              <div className="table-responsive dataTabletrade">
                <div
                  id="future_wrapper"
                  className="dataTables_wrapper no-footer"
                >
                  <table
                    id="example"
                    className="table display dataTable no-footer"
                    style={{ minWidth: "645px" }}
                  >
                    <thead>
                      <tr className="text-left">
                        <th>Coin</th>
                        <th>Amount</th>
                        <th>On-hold</th>
                        <th className="text-center">Operation</th>
                      </tr>
                    </thead>
                    <tbody className="text-left">
                      {loading ? (
                        <tr>
                          <td colSpan="6">Loading...</td>
                        </tr>
                      ) : error ? (
                        <tr>
                          <td colSpan="6">Error: {error.message}</td>
                        </tr>
                      ) : filteredData?.length > 0 ? (
                        filteredData.map((item, index) => (
                          <React.Fragment key={index}>
                            <tr>
                              <td>{item.coin.toUpperCase()}</td>
                              <td>{item.amount.toFixed(4)}</td>
                              <td>{item.hold}</td>
                              <td className="gap-2 flex justify-center text-white">
                                <div
                                  className="bg-green-500 rounded-md px-3"
                                  onClick={() => {
                                    if (openDeposit === index) {
                                      setOpenDeposit(-1);
                                    } else {
                                      setopenCryptoWithdrawal(-1);
                                      setOpenDeposit(index);
                                    }
                                  }}
                                >
                                  Deposit
                                </div>
                                <div
                                  className="bg-red-500 rounded-md px-3"
                                  onClick={() => {
                                    if (openCryptoWithdrawal === index) {
                                      setopenCryptoWithdrawal(-1);
                                    } else {
                                      setOpenDeposit(-1);
                                      setopenCryptoWithdrawal(index);
                                      setCryptoCoin(item);
                                    }
                                  }}
                                >
                                  Withdraw
                                </div>
                              </td>
                            </tr>
                            {openDeposit === index && (
                              <tr className="bg-red-200 col-span-6">
                                <td>
                                  <div className=" flex justify-between">
                                    <div className="flex flex-col items-start  ">
                                      <h4>DESTINATION ADDRESS</h4>
                                      <div>{item.address}</div>
                                    </div>
                                    <Image
                                      src={item.address_code}
                                      height={100}
                                      width={100}
                                      alt="#"
                                    />
                                  </div>
                                </td>
                              </tr>
                            )}
                            {openCryptoWithdrawal === index && (
                              <tr className="bg-blue-200 col-span-6">
                                <td colSpan="4">
                                  <div className=" grid grid-cols-2">
                                    <div className="flex flex-col items-start justify-start">
                                      <h1>Withdrawal</h1>
                                      <Inform
                                        onSubmit={() => onCryptosubmit}
                                        loading={loading}
                                        formFiledData={
                                          cryptoWithdrawalformFieldData
                                        }
                                        fileUpload={false}
                                        formSchema={cryptoWithdrawalSchema}
                                        // dropdownOptions={dropdownOptions}
                                        imgName="proof"
                                        className="w-[65%]"
                                      />
                                    </div>
                                    <div className="card-body">
                                      <div>
                                        {/* <h1 className="">Bank Details</h1> */}

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
                            )}
                          </React.Fragment>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6">Loading</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
