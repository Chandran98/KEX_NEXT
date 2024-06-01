// import styles from "./index.module.css";
import { useEffect, useRef } from "react";
import {
  ChartingLibraryWidgetOptions,
  LanguageCode,
  ResolutionString,
  widget,
} from "/public/static/charting_library";

 const TVChartContainer = (
  props
) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const widgetOptions = {
      symbol: props.symbol ?? "AAPL", // Provide a default symbol if none is given
      datafeed: new (window ).Datafeeds.UDFCompatibleDatafeed(
        "https://demoback.kairaaexchange.com/trade/chart",
        undefined,
        {
          maxResponseLength: 1000,
          expectedOrder: "latestFirst",
        }
      ),
      interval: (props.interval ?? "D") ,
      container_id: chartContainerRef.current?.id ?? "chart_container", // Use container_id instead of container
      library_path: props.library_path ?? "/public/static/charting_library/",
      locale: (props.locale ) ?? "en",
      // disabled_features: ["use_localstorage_for_settings", 'header_resolutions'],
      // enabled_features: [],
      charts_storage_url: props.charts_storage_url,
      charts_storage_api_version: props.charts_storage_api_version,
      // client_id: props.client_id ?? "tradingview.com",
      user_id: props.user_id ?? "public_user_id",
      fullscreen: props.fullscreen ?? false,
      autosize: props.autosize ?? true,
      theme: props.theme ?? "Light",
      timezone: props.timezone ?? "Asia/Bangkok",
     enabled_features: [
      'header_in_fullscreen_mode',
      '',
      'keep_left_toolbar_visible_on_small_screens',
      'hide_left_toolbar_by_default',
	  "create_volume_indicator_by_default",
      'left_toolbar'],
    disabled_features: ['use_localstorage_for_settings',
      'create_volume_indicator_by_default',
      'widget_logo',
      'header_symbol_search',
      'symbol_search_hot_key',
      'study_dialog_search_control',
      'widgetbar_tabs',
      'display_market_status',
      'volume_force_overlay'],
    };

    const tvWidget = new widget(widgetOptions);

    tvWidget.onChartReady(() => {
      tvWidget.headerReady().then(() => {
        const button = tvWidget.createButton();
        button.setAttribute("title", "Click to show a notification popup");
        button.classList.add("apply-common-tooltip");
        button.addEventListener("click", () =>
          tvWidget.showNoticeDialog({
            title: "Notification",
            body: "TradingView Charting Library API works correctly",
            callback: () => {
              console.log("Noticed!");
            },
          })
        );
        button.innerHTML = "Check API";
      });
    });

    return () => {
      tvWidget.remove();
    };
  }, [chartContainerRef, props]);

  return (
    <>
      <div
        id="chart_container"
        ref={chartContainerRef}
        className="h-[70vh]"
      />
    </>
  );
};

export default TVChartContainer