"use client";
import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "@/redux/reducer/order/orderApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tradeschema } from "@/utils/formSchema";
import { useParams } from "next/navigation";

const OrderForm = ({ crypto, type }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(crypto?.lastprice);
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
const params=useParams();
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setTotal(parseFloat(e.target.value) * parseFloat(crypto?.lastprice));
  };
  const handleTotalChange = (e) => {
    setTotal(e.target.value);
    setAmount(parseFloat(e.target.value) / parseFloat(crypto?.lastprice));
  };
  const placeData = () => {
    const params = {
      price: crypto?.lastprice,
      amount: amount,
      ordertype: "limit",
      pair: crypto.pair,
      type: type,
      total: total,
    };
    // dispatch(placeOrder(params));
  };

  const { loading } = useSelector((state) => state.order);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(tradeschema) });

  console.log(params.name,"params")

  return (
    <>
      <form onSubmit={handleSubmit(placeData)}>
        <div className="sell-blance">
          <label className="form-label text-primary">Price</label>
          <div className="form-label blance">
            <span>BALANCE:</span>
            <p>$3,123.9</p>
          </div>
          <div className="input-group">
            <input
              {...register("price", {
                valueAsNumber: true,
                setValueAs: (value) => Number(value),
              })}
              type="text"
              className="form-control"
              placeholder="0"
              value={crypto?.lastprice}
              defaultValue={crypto?.lastprice}
              onChange={handlePriceChange}
            />
            <span className="input-group-text">
              {crypto?.secondcurrency.toUpperCase()}
            </span>
          </div>
          {errors.price && (
            <span className="text-red-600 text-sm">{errors.price.message}</span>
          )}
        </div>
        <div className="sell-blance">
          <label className="form-label text-primary">Amount</label>
          <div className="input-group">
            <input
              {...register("amount", { valueAsNumber: true })}
              type="text"
              className="form-control"
              placeholder="Amount"
              value={Number(amount).toFixed(5)}
              onChange={handleAmountChange}
            />
            <span className="input-group-text">
              {crypto?.firstcurrency.toUpperCase()}
            </span>
          </div>
          {errors.amount && (
            <span className="text-red-600 text-sm">
              {errors.amount.message}
            </span>
          )}
        </div>
        <div className="sell-blance">
          <label className="form-label text-primary">Total</label>
          <div className="input-group">
            <input
              {...register("total", { valueAsNumber: true })}
              type="text"
              className="form-control"
              placeholder="Total"
              value={total}
              onChange={handleTotalChange}
              // readOnly
            />
            <span className="input-group-text">
              {crypto?.secondcurrency.toUpperCase()}
            </span>
          </div>

          {errors.total && (
            <span className="text-red-600 text-sm">{errors.total.message}</span>
          )}
        </div>
        <div className="slider-wrapper">
          <ReactSlider
            min={0}
            max={100}
            defaultValue={0}
            className="progress-slider"
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full">
            {loading ? <span>Loading</span> : <span>Proceed</span>}
          </button>
        </div>
      </form>
    </>
  );
};

export default OrderForm;
