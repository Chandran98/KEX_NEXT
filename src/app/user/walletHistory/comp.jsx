/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";

const AllOrder = () => {
  const { loading, fiatHistoryData, error } = useSelector(
    (state) => state.wallet
  );
  const [currentpage, setCurrentPage] = useState(0);
  const historyperPage = 10;
  const fiatFilterData=fiatHistoryData===null?[]: fiatHistoryData?.data.filter((e)=>e.type==="deposit");
  const totalPages = Math.ceil(fiatFilterData.length / historyperPage);
  function handelSetPage(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <div id="history_wrapper" className="table-responsive dataTablehistory">
        <div className="dataTables_wrapper no-footer">
          <table
            id="example"
            className="table shadow-hover dataTable display"
            style={{ minWidth: "845px" }}
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Asset</th>
                <th>Type</th>
                <th>method</th>
                <th>Amount</th>
                <th>Tx Id</th>
                <th>Status</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {fiatFilterData
                ?.slice(
                  currentpage * historyperPage,
                  (currentpage + 1) * historyperPage
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td>{item.currency}</td>
                    <td>{item.type}</td>
                    <td>{item.method}</td>
                    <td>{item.amount}</td>
                    <td>{item.txnid}</td>
                    <td>{item.status === 1 ? "Completed" : "Failed"}</td>
                    <td className="text-end">
                      <div className="d-flex justify-content-end">
                        <Link
                          href={"#"}
                          className="btn btn-primary shadow btn-xs sharp me-3"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link
                          href={"#"}
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
            <div className="dataTables_info">
              Showing {currentpage * historyperPage + 1} to{" "}
              {Math.min(
                fiatFilterData.length,
                (currentpage + 1) * historyperPage
              )}{" "}
              of {fiatFilterData.length} entries
            </div>
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
                {Array.from({ length: totalPages }, (_, i) => {
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
              {currentpage === totalPages - 1 ? (
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
    </>
  );
};

export default AllOrder;
