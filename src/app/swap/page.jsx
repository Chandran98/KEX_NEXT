/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
// import { useRouter } from 'next/router';
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/components/home/header";

import {
  swapConversion,
  swapHistory,
  swapcoins,
} from "@/redux/reducer/crypto/cryptoApi";
import { useForm, Controller } from "react-hook-form";
import SwapHistory from "./swapHistory";
import { swapSchema } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Swap = () => {
  const dispatch = useDispatch();
  // const router = useRouter();

  useEffect(() => {
    dispatch(swapcoins());
    dispatch(swapHistory());
  }, [dispatch]);

  const { loading, swapCoinList } = useSelector((state) => state.crypto);

  const optionsData = swapCoinList?.data?.cryptoList?.map((d) => ({
    value: d.symbol,
    label: d.currency.toUpperCase(),
    price: d.marketPrice.inr,
    minSwap: d.min_swap,
    maxSwap: d.max_swap,
    swapFee: d.swap_fee,
  }));

  const [coin1, setCoin1] = useState("");
  const [coin2, setCoin2] = useState("");
  const [amount1, setAmount1] = useState(null);
  const [amount2, setAmount2] = useState(null);

  const handleAmount1Change = (e) => {
    const value = e.target.value;
    setAmount1(value);
    calculateAmount2(value, coin1, coin2);
  };

  const calculateAmount2 = (amount1, coin1, coin2) => {
    if (coin1 && coin2 && amount1) {
      const amountInInr = amount1 * coin1.price;
      const amount2 = amountInInr / coin2.price;
      setAmount2(amount2);
    }
  };

  const onSubmitForm = (data) => {
    data.spend_amt = amount2;
    const mydata = { ...data, ...{ type: "crypto" } };
    dispatch(swapConversion(mydata));
  };
  const swapSchema = z.object({
    spend_amt: z
      .number({ message: "Required" })
      .min(coin2.minSwap, { message: `${coin2.minSwap} Min Required` })
      .max(coin2.maxSwap, { message: `${coin2.maxSwap} Max Allowed` }),
    buyamount: z
      .number({ message: "Required" })
      .min(coin1.minSwap, { message: `${coin1.minSwap} Min Required` })
      .max(coin1.maxSwap, { message: `${coin1.maxSwap} Max Allowed` }),
    buycurrency: z.string().trim().min(1, { message: "Required" }),
    spentcurrency: z.string().trim().min(1, { message: "Required" }),
  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(swapSchema) });

  return (
  <>
    <Header />

<div className="m-4 ">
  <div className="card p-4 ">
    <div className="card-body pb-2">
      <h1 className="text-center no-border font-w600 fs-60 mt-2">
        <span className="text-warning">Swap</span> your
        <span className="text-danger"> Coins</span> at the
        <br /> CryptoZone with no additional charges
      </h1>
      <h4 className="text-center ">
        Trusted by millions user with over $1 Trillion in crypto
        transactions.
      </h4>
      <div className="row">
        <form action="" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="col-xl-12">
            <div className="text-center mt-3 row justify-content-center">
              <div className="col-xl-5">
                <div className="row">
                  <div className="col-xl-6">
                    <Controller
                      name="buycurrency"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          value={coin1}
                          onChange={(data) => {
                            setCoin1(data);
                            field.onChange(data.value);
                            calculateAmount2(amount1, data, coin2);
                          }}
                          className="custom-react-select mb-xl-0 mb-3"
                          options={optionsData}
                          isSearchable={false}
                        />
                      )}
                    />
                    {errors.buycurrency && (
                      <span className="text-red-600 text-sm">
                        {errors.buycurrency.message}
                      </span>
                    )}
                  </div>
                  <div className="col-xl-6">
                    <input
                      {...register("buyamount", { valueAsNumber: true })}
                      type="number"
                      className="form-control mb-3"
                      value={amount1}
                      onChange={handleAmount1Change}
                    />
                    {errors.buyamount && (
                      <span className="text-red-600 text-sm">
                        {errors.buyamount.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className=" col-xl-1">
                <div className="equalto">=</div>
              </div>
              <div className="col-xl-5">
                <div className="row">
                  <div className="col-xl-6">
                    <Controller
                      name="spentcurrency"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          value={coin2}
                          onChange={(data) => {
                            setCoin2(data);
                            field.onChange(data.value);
                            calculateAmount2(amount1, coin1, data);
                          }}
                          className="custom-react-select mb-xl-0 mb-3"
                          options={optionsData}
                          isSearchable={false}
                        />
                      )}
                    />
                    {errors.spentcurrency && (
                      <span className="text-red-600 text-sm">
                        {errors.spentcurrency.message}
                      </span>
                    )}
                  </div>
                  <div className="col-xl-6">
                    <input
                      {...register("spend_amt", { valueAsNumber: true })}
                      type="number"
                      className="form-control mb-3"
                      value={amount2}
                      // readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 mb-4">
              <button type="submit" className="btn btn-warning mx-auto">
                {loading ? "Loading..." : "SWAP NOW"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <SwapHistory />
</div></>
  );
};

export default Swap;
