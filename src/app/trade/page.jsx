// import React from "react";
import MainChart from "../../components/trade/chart/mainchart";
import OrderBook from "../../components/trade/orderBook/orderbook";
import OrderStatus from "../../components/trade/orderstatus/orderstatus";
// import BuySell from "../../components/trade/buysell/buysell";

import BuySell2 from "../../components/trade/buysell/buysell2";
import Watchlist from "../../components/trade/watchlist/watchlist";

const page = () => {
  return (
    <div className="relative grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
      <div className="col-span-1  h-[80vh]"><Watchlist /></div>
      <div className="lg:col-span-2 w-full relative">
        <MainChart />
        <OrderStatus />
      </div>
      <div className="relative col-span-1  ">
        <OrderBook />
        <BuySell2 />
      </div>
    </div>
  );
};

export default page;
