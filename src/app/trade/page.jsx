/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React, { useEffect, useState } from "react";
import { fetchCryptoList,fetchUsdtPrice } from "../../redux/reducer/cryptoReducer";
import { useDispatch, useSelector } from "react-redux";
import MainChart from "../../components/trade/chart/mainchart";
import OrderBook from "../../components/trade/orderBook/orderbook";
import OrderStatus from "../../components/trade/orderstatus/orderstatus";
import BuySell2 from "../../components/trade/buysell/buysell2";

const page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoList());
    dispatch(fetchUsdtPrice());
  }, [dispatch]);

  const data = useSelector((state) => state.crypto);
  const usdtList = useSelector((state) => state.crypto);
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
    ? filteredPairs.filter((crypto) =>
    {
      const searchLower = searchTerm.toLowerCase();
    const matchesFirstCurrency = crypto.firstcurrency.toLowerCase().startsWith(searchLower);
    // const matchesSecondCurrency = crypto.secondcurrency.toLowerCase().includes(searchLower);
    // const matchesAmount = Number(crypto.lastprice)>=parseFloat(searchLower);

    return matchesFirstCurrency ;
    // || matchesSecondCurrency || matchesAmount;
    }
      )
    : filteredPairs;

  return (
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
                    ? "bg-blue-500 text-white"
                    : " bg-gray-200  text-black"
                }`}
              >
                {e.title}
              </div>
            ))}
          </div>
          <div class="relative bg-[#F4F0FF] flex w-full p-3">
            <div class=" bg-white inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
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

              {filteredCryptos.map((e, i) => (
                <div
                  onClick={() => {
                    setCrypto(e);
                  }}
                  key={i}
                  className=" justify-between "
                >
                  <div className="previews-info-list" key={i}>
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
                      <h6>{e.lastprice}</h6>
                      <span className={e.change >= 0 ? "text-success" : ""}>
                        {e.change.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 w-full relative">
        <MainChart crypto={crypto} />
        <OrderStatus />
      </div>
      <div className="relative col-span-1  ">
        <OrderBook crypto={crypto} />
        <BuySell2 />
      </div>
    </div>
  );
};

export default page;
