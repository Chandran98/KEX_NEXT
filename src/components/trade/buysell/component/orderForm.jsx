import React, { useEffect } from "react";
import ReactSlider from "react-slider";
// import Nouislider from "nouislider-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "@/redux/reducer/order/orderApi";

const OrderForm = () => {
  
  const dispatch = useDispatch();
  function palceData() {
    const parmas = {
      price: "1.67",
      amount: "100",
      ordertype: "limit",
      pair: "kaitcoin/inr",
      type: "buy",
      total: "167",
    };
    dispatch(placeOrder(parmas));
    console.log("sdfdsfds plcaee order",parmas);

  }
const{loading,error}=  useSelector((state)=>state.order);
  return (
    <>
      <form>
        <div className="sell-blance">
          <label className="form-label text-primary">Price</label>
          <div className="form-label blance">
            <span>BALANCE:</span>
            <p>$3,123.9</p>
          </div>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="0.00" />
            <span className="input-group-text">USDT</span>
          </div>
        </div>
        <div className="sell-blance">
          <label className="form-label text-primary">Amount</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Amount" />
            <span className="input-group-text">BTC</span>
          </div>
        </div>
        <div className="sell-blance">
          <label className="form-label text-primary">Total</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Total" />
            <span className="input-group-text">USDT</span>
          </div>
        </div>
        <div className="slider-wrapper">
          {/* <div id="slider"></div> */}
          {/* <div id="employees"></div> */}
          {/* <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect /> */}
          <ReactSlider
            min={0}
            max={100}
            defaultValue={0}
            className="progress-slider"
            //thumbClassName="example-thumb"
            //trackClassName="example-track"
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        </div>
        <div className="text-center">
          {/* <Link href={palceData()} className="btn btn-primary w-full">Proceed</Link> */}
          <button
            onClick={() => palceData()}
            type="button"
            className="btn btn-primary w-full"
          >
            { loading?<span>Loading</span>:<span>Proceed</span>}
          </button>
        </div>
      </form>
    </>
  );
};
export default OrderForm;
