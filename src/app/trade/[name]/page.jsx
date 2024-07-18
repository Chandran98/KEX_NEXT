/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/home/header";

import {
  fetchCryptoList,
  fetchUsdtPrice,
} from "../../../redux/reducer/crypto/cryptoApi";
import { useDispatch, useSelector } from "react-redux";
import MainChart from "../../../components/trade/chart/mainchart";
import OrderBook from "../../../components/trade/orderBook/orderbook";
import OrderStatus from "../../../components/trade/orderstatus/orderstatus";
import BuySell2 from "../../../components/trade/buysell/buysell2";
import { myOrderDetails } from "@/redux/reducer/order/orderApi";
import Link from "next/link";

const page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoList());
    dispatch(fetchUsdtPrice());
    dispatch(myOrderDetails());
  }, [dispatch]);

  const data = useSelector((state) => state.crypto);
  const usdtList = useSelector((state) => state.crypto.usdtPrice);
  const [tabValue, setTab] = useState("INR");
  const [crypto, setCrypto] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const tabList = [
    { title: "INR", value: "inr" },
    { title: "USDT", value: "usdt" },
    { title: "KAITCOIN", value: "kaitcoin" },
  ];

  const filteredPairs =
    data.coin?.data?.filter(
      (pair) => pair.secondcurrency.toUpperCase() === tabValue
    ) || [];

  const filteredCryptos = searchTerm
    ? filteredPairs.filter((crypto) => {
        const searchLower = searchTerm.toLowerCase();
        const matchesFirstCurrency = crypto.firstcurrency
          .toLowerCase()
          .startsWith(searchLower);
        // const matchesSecondCurrency = crypto.secondcurrency.toLowerCase().includes(searchLower);
        // const matchesAmount = Number(crypto.lastprice)>=parseFloat(searchLower);

        return matchesFirstCurrency;
      })
    : filteredPairs;
  console.log("filteredCryptos", filteredCryptos);
  return (
    <>
       <Header />
       <div className="relative grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2  bg-white">
      <div className="col-span-1 ">
        <div className="bg-white h-[120vh]">
          <div className=" flex justify-evenly p-2 mb-2 ">
            {tabList.map((e, i) => (
              <div
                key={i}
                onClick={() => setTab(e.title.toUpperCase())}
                className={`rounded-lg p-2 cursor-pointer flex-1 text-center font-semibold mx-3 ${
                  tabValue === e.title
                    ? "bg-[#004DEC] text-white"
                    : " bg-gray-200  text-black"
                }`}
              >
                {e.title}
              </div>
            ))}
          </div>
          <div class="relative bg-[#F4F0FF] flex w-full p-2">
            <input
              type="text"
              id="simple-search"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your crypto..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div className=" relative pt-0 px-0 overflow-auto ">
            <div className="relative h-[120vh] overflow-y-scroll">
              {data.loading && <div>Loading...</div>}

              {filteredCryptos.map((e) => {
                const usdtValue = usdtList?.find(
                  (value) =>
                    value.symbol ===
                    `${e.firstcurrency.toUpperCase()}${e.secondcurrency.toUpperCase()}`
                );
                return (
                  <div
                    key={e.id}
                    onClick={() => {
                      setCrypto(e);
                    }}
                    className=" justify-between "
                  >
                    <Link
                      // href={"/"}
                      href={`/trade/${e.firstcurrency.toUpperCase()}-${e.secondcurrency.toUpperCase()}`}
                    >
                      <div className="previews-info-list">
                        <div className="pre-icon">
                          <div className="ms-2">
                            <h6>{e.firstcurrency.toUpperCase()}</h6>
                            <span>
                              {e.firstcurrency.toUpperCase()}/
                              {e.secondcurrency.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="count text-right">
                          <h6>
                            {/* {usdtList?.find(
                              (value) =>
                                value.symbol ===
                                `${e.firstcurrency.toUpperCase()}${e.secondcurrency.toUpperCase()}`
                            )} */}
                            {e.lastprice.toFixed(4)}
                          </h6>
                          <span className={e.change >= 0 ? "text-success" : ""}>
                            {e.change.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 w-full relative">
        <MainChart />
        <OrderStatus />
      </div>
      <div className="relative col-span-1  ">
        <OrderBook crypto={crypto} />
        <BuySell2 crypto={crypto} />
      </div>
    </div>
       </>
   
  );
};

export default page;
