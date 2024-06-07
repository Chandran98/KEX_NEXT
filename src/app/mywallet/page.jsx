/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cryptoBalance, fiatBalance } from "@/redux/reducer/wallet/walletApi";
import { GlobalFilter } from "@/components/referal/referalcomp";
import Image from "next/image";
import DashBoardHeader from "@/components/header";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cryptoBalance());
    dispatch(fiatBalance());
  }, [dispatch]);

  const [globalFilter, setGlobalFilter] = useState("");
  const [openDeposit, setOpenDeposit] = useState(-1);
  const [hideZero, setHideZero] = useState(false);

  const { loading, cryptoBalanceData, fiatBalannceData, error } = useSelector(
    (state) => state.wallet
  );

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
                            onClick={() => setOpenDeposit(index)}
                          >
                            Deposit
                          </div>
                          <div className="bg-red-500 rounded-md px-3">
                            Withdraw
                          </div>
                        </td>
                      </tr>
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
                                  onClick={() => setOpenDeposit(index)}
                                >
                                  Deposit
                                </div>
                                <div className="bg-red-500 rounded-md px-3">
                                  Withdraw
                                </div>
                              </td>
                            </tr>
                            {openDeposit === index && (
                              <tr className="bg-red-200 col-span-6">
                                <td colSpan="4">
                                  <div className="flex flex-col items-start justify-start">
                                    <strong>DESTINATION ADDRESS</strong>
                                    <div className="flex">
                                      <div>{item.address}</div>
                                      <Image
                                        src={item.address_code}
                                        height={100}
                                        width={100}
                                        alt="#"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6">No Open orders available</td>
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
