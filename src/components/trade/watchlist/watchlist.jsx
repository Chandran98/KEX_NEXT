/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React, { useEffect, useState } from "react";
import { fetchList } from "../../../redux/reducer/crypto/cryptoReducer";
import { useDispatch, useSelector } from "react-redux";

const watchlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  const data = useSelector((state) => state.crypto);
  const [tabValue, setTab] = useState("INR");
  const [frstCurreny, setfrst] = useState("");
  const [secondCurreny, setsecond] = useState("");

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
    <div className="bg-white h-[120vh]">
      <div className=" flex justify-evenly p-2 mb-2 ">
        {tabList.map((e, i) => (
          <div
            key={i}
            onClick={() => setTab(e.title.toUpperCase())}
            className={`rounded-lg p-2 cursor-pointer flex-1 text-center font-semibold mx-3
             ${
              tabValue === e.title
                ? "bg-[#004DEC!important] text-white"
                : " bg-gray-200  text-black"
            }
            `}
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
  );
};

export default watchlist;
