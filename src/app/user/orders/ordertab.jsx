/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";

const OrderData = ({ e }) => {
  const [currentpage, setCurrentPage] = useState(0);
  const historyperPage = 10;
  const fiatFilterData = e === (null || undefined) ? [] : e;
  //   ?.filter((e)=>e.status==="deposit");
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
                <th>Pair</th>
                <th>Price</th>
                <th>Side</th>
                <th className="">Amount</th>
                <th>Total</th>
                <th>Date</th>
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
                    <td>{item.pair}</td>
                    <td>{item.price}</td>
                    <td
                      className={`${
                        item.type === "sell"
                          ? "text-red-700 font-semibold"
                          : "text-green-700 font-semibold"
                      }`}
                    >
                      {item.type}
                    </td>
                    <td className="">{item.amount.toFixed(4)}</td>
                    <td>{item.total.toFixed(4)}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
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

export default OrderData;

function Paginator({ totalPages }) {
  const pagination = [];

  function createLink(i) {
    const page = `?=${i}`;
    return (
      <div className=" bg-red-500 p-2 w-8">
        <a href={page} key={i}>
          {i}
        </a>
      </div>
    );
  }

  function createDots() {
    return <div className="">...</div>;
  }

  // If there are no pages return a message
  if (!totalPages) return <div>No pages</div>;

  // If totalPages is less than seven, iterate
  // over that number and return the page links
  if (totalPages < 7) {
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(createLink(i));
    }
    return pagination;
  }

  // Otherwise create the first three page links
  for (let i = 1; i <= 3; i++) {
    pagination.push(createLink(i));
  }

  // Create the dots
  pagination.push(createDots());

  // Last three page links
  for (let i = totalPages - 2; i <= totalPages; i++) {
    pagination.push(createLink(i));
  }

  return pagination;
}
