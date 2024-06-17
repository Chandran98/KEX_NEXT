/* eslint-disable react-hooks/rules-of-hooks */
import { swapHistory } from "@/redux/reducer/crypto/cryptoApi";
import Link from "next/link";
import React, {  useState } from "react";
import {  useSelector } from "react-redux";

const swapHistoryList = () => {
 

  const [currentpage, setCurrentPage] = useState(0);
  const dataPerPage = 10;

  const { laoding, swapHistoryData } = useSelector((state) => state.crypto);
  function handelSetPage(page) {
    setCurrentPage(page);
  }
  const totalpages = Math.ceil(swapHistoryData?.data.length / dataPerPage);
  return (
    <div className="card">
      <div className=" card-body">
        <h2>Swap History</h2>
        <div id="history_wrapper" className="table-responsive dataTablehistory">
          <div className="dataTables_wrapper no-footer">
            <table
              id="example"
              className="table shadow-hover dataTable display"
              style={{ minWidth: "845px" }}
            >
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>BUY</th>
                  <th>SELL</th>
                  <th>BUY AMOUNT</th>
                  <th>SPENT AMOUNT</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {swapHistoryData &&
                  swapHistoryData.data
                    .slice(
                      currentpage * dataPerPage,
                      (currentpage + 1) * dataPerPage
                    )
                    .map((e, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{e.buycurrency.toUpperCase()}</td>
                        <td>{e.spentcurrency.toUpperCase()}</td>
                        <td> {e.buyamount}</td>
                        <td> {e.spend_amt}</td>
                        <td>
                          
                          {new Date(e.date).toLocaleDateString()} @
                          {new Date(e.date).toLocaleTimeString()}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
            <div className="dataTables_info">
              Showing {currentpage * dataPerPage + 1} to{" "}
              {Math.min(
                swapHistoryData?.data.length,
                (currentpage + 1) * dataPerPage
              )}{" "}
              of {swapHistoryData?.data.length} entries
            </div>
            {/* {Paginator({ totalPages })} */}
            <div
              className="dataTables_paginate paging_simple_numbers mb-0"
              id="application-tbl1_paginate"
            >
              {currentpage < 1 ? (
                <></>
              ) : (
                <Link
                  className={`paginate_button previous `}
                  href="#"
                  onClick={() => handelSetPage(currentpage - 1)}
                >
                  <i className="fa fa-angle-double-left"></i>
                </Link>
              )}
              <span>
                {Array.from({ length: totalpages }, (_, i) => {
                  return (
                    <Link
                      key={i}
                      href="#"
                      className={`p-2 mx-2 rounded-sm ${
                        currentpage === i
                          ? "bg-[#004dec] text-white"
                          : "bg-gray-200 text-[#004dec]"
                      }`}
                      onClick={() => handelSetPage(i)}
                    >
                      {i + 1}
                    </Link>
                  );
                })}
              </span>
              {currentpage === totalpages - 1 ? (
                <></>
              ) : (
                <Link
                  className={`paginate_button next `}
                  href="#"
                  onClick={() => handelSetPage(currentpage + 1)}
                >
                  <i className="fa fa-angle-double-right"></i>
                </Link>
              )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default swapHistoryList;
