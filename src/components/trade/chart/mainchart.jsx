/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import Script from "next/script";
import TVChartContainer from "./TVChartContainer/index";



export default function mainchart() {
  const [isScriptReady, setIsScriptReady] = useState(false);
  const defaultWidgetProps = {
    symbol: "BTC/USDT",
    interval: "15",
    library_path: "/static/charting_library/",
    locale: "en",
    // charts_storage_url: "https://saveload.tradingview.com",
    // charts_storage_api_version: "1.1",
    client_id: "tradingview.com",
    // user_id: "public_user_id",
    fullscreen: false,
    autosize: true,
  };
  return (
    <>
      <Script
        src="/static/datafeeds/udf/dist/bundle.js"
        strategy="lazyOnload"
        onReady={() => {
          setIsScriptReady(true);
        }}
      />
      {isScriptReady && <TVChartContainer {...defaultWidgetProps} />}
    </>
  );
}