import React from "react";
import MainChart from "../../components/trade/chart/mainchart";
import OrderBook from "../../components/trade/orderBook/orderbook";
import OrderStatus from "../../components/trade/orderstatus/orderstatus";
// import BuySell from "../../components/trade/buysell/buysell";

import BuySell2 from "../../components/trade/buysell/buysell2";
import Watchlist from "../../components/trade/watchlist/watchlist";

const page = () => {
  return (
    // grid xl:grid-cols-3 sm:grid-cols-2
      <div className="relative flex bg-white">
      {/* <div className=" w-[30vw] bg-red-400">dsafdsf</div> */}

      <div className="w-[25vw] h-[80vh]  "><Watchlist/></div>
      <div className="w-full relative">
        <MainChart />
        <OrderStatus />
      </div>
      <div className="w-[25vw]  bg-white">
        <OrderBook />
        <BuySell2 />
      </div>
    </div>
  );
};

export default page;
