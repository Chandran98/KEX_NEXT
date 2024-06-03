/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React, { useEffect, useState } from "react";
import { fetchList } from "../../redux/reducer/cryptoReducer";
import { useDispatch, useSelector } from "react-redux";
import MainChart from "../../components/trade/chart/mainchart";
import OrderBook from "../../components/trade/orderBook/orderBook";
import OrderStatus from "../../components/trade/orderstatus/orderstatus";
import BuySell2 from "../../components/trade/buysell/buysell2";

const page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  const data = useSelector((state) => state.crypto);
  const [tabValue, setTab] = useState("INR");
  const [frstCurreny, setfrst] = useState("");
  const [secondCurreny, setsecond] = useState("");
  const [crypto, setCrypto] = useState(null);

  const tabList = [
    { title: "INR", value: "inr" },
    { title: "USDT", value: "usdt" },
    { title: "KAITCOIN", value: "kaitcoin" },
  ];

  const filteredPairs =
    data.coin?.data?.filter(
      (pair) => pair.secondcurrency.toUpperCase() === tabValue
    ) || [];

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
          <div className=" relative pt-0 px-0 overflow-auto ">
            <div className="relative h-[120vh] overflow-y-scroll">
              {data.loading && <div>Loading...</div>}

              {filteredPairs.map((e, i) => (
                <div
                  onClick={() => {
                    setfrst(e.firstcurrency.toUpperCase()),
                      setsecond(e.secondcurrency.toUpperCase());
                      setCrypto(e)
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
        <MainChart frst={frstCurreny} secnd={secondCurreny} />
        <OrderStatus />
      </div>
      <div className="relative col-span-1  ">
        <OrderBook frst={frstCurreny} secnd={secondCurreny} amount={crypto}/>
        <BuySell2 />
      </div>
    </div>
  );
};

export default page;
