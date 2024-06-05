
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import OrderTab from "./orderTab";
import { useSelector } from "react-redux";

const orderstatus = () => {
  const { loading, orderDetails, error } = useSelector((state) => state.order);
  const [currentPage, setCurrentPage] = useState(1  );
  const ordersPerPage = 2;

  const totalPages = Math.ceil(orderDetails?.data?.active.length / ordersPerPage);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="">
      <div className="card">
        <Tab.Container defaultActiveKey="All">
          <div className="card-header border-0 pb-2 flex-wrap">
            <h4 className="heading">Trade Status</h4>
            <>
              <Nav className="order nav nav-tabs">
                <Nav.Link as="button" eventKey="All" type="button">
                  Open Order
                </Nav.Link>
                <Nav.Link as="button" eventKey="Order" type="button">
                  Closed Order
                </Nav.Link>
              </Nav>
            </>
          </div>
          <div className="card-body pt-0 pb-0 h-[55vh] overflow-y-auto">
            <Tab.Content>
              <Tab.Pane eventKey="All">
                <div className="table-responsive dataTabletrade">
                  <div id="future_wrapper" className="dataTables_wrapper no-footer">
                    <table
                      id="example"
                      className="table display dataTable no-footer"
                      style={{ minWidth: "845px" }}
                    >
                      <thead>
                        <tr className="text-center">
                          <th>Pair</th>
                          <th>Price</th>
                          <th>Side</th>
                          <th className="">Amount</th>
                          <th>Total</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {loading ? (
                          <tr>
                            <td colSpan="6">Loading...</td>
                          </tr>
                        ) : error ? (
                          <tr>
                            <td colSpan="6">Error: {error.message}</td>
                          </tr>
                        ) : orderDetails?.data?.active.length > 0 ? (
                          orderDetails.data.active
                            .slice(currentPage * ordersPerPage, (currentPage + 1) * ordersPerPage)
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
                                <td>{new Date(item.date).toLocaleTimeString()}</td>
                              </tr>
                            ))
                        ) : (
                          <tr>
                            <td colSpan="6">No Open orders available</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    {/* <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
                      <div className="dataTables_info">
                        Showing {currentPage * ordersPerPage + 1} to{" "}
                        {Math.min(orderDetails?.data?.active.length, (currentPage + 1) * ordersPerPage)}{" "}
                        of {orderDetails?.data?.active.length} entries
                      </div>
                      <div className="dataTables_paginate paging_simple_numbers mb-0" id="application-tbl1_paginate">
                     {currentPage ===1?   <Link
                          className={`paginate_button previous ${currentPage === 0 ? "disabled" : ""}`}
                          href="#"
                          onClick={() => handlePageChange(currentPage - 1)}
                        >
                          <i className="fa fa-angle-double-left"></i>
                        </Link>:<></>}
                        <span>
                          {Array.from({ length: 50 }, (_, i) => (
                            <Link
                              key={i}
                              href="#"
                              className={` p-2 px-2 mx-2 rounded-sm ${currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-blue-500"}`}
                              onClick={() => handlePageChange(i)}
                            >
                              {i + 1}
                            </Link>
                          ))}
                        </span>
                       { currentPage ===( totalPages-1)?<></>: <Link
                          className={`paginate_button next ${
                            currentPage === totalPages - 1 ? "disabled" : ""
                          }`}
                          href="#"
                          onClick={() => handlePageChange(currentPage + 1)}
                        >
                          <i className="fa fa-angle-double-right"></i>
                        </Link>}
                      </div>
                      <Link className="text-blue-500 font-semibold" href="/">
                        view all
                      </Link>
                    </div> */}
                    <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
  <div className="dataTables_info">
    Showing {currentPage * ordersPerPage + 1} to{" "}
    {Math.min(orderDetails?.data?.active.length, (currentPage + 1) * ordersPerPage)}{" "}
    of {orderDetails?.data?.active.length} entries
  </div>
  <div className="dataTables_paginate paging_simple_numbers mb-0" id="application-tbl1_paginate">
    <Link
      className={`paginate_button previous ${currentPage === 0 ? "disabled" : ""}`}
      href="#"
      onClick={() => handlePageChange(currentPage - 1)}
    >
      <i className="fa fa-angle-double-left"></i>
    </Link>
    <span>
      {Array.from({ length: totalPages }, (_, i) => {
        if (totalPages > 6) {
          if (i < 3 || i >= totalPages - 3) {
            return (
              <Link
                key={i}
                href="#"
                className={`p-2 px-2 mx-2 rounded-sm ${currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-blue-500"}`}
                onClick={() => handlePageChange(i)}
              >
                {i + 1}
              </Link>
            );
          } else if (i === 3) {
            return (
              <span key={i} className="p-2 px-2 mx-2">
                ...
              </span>
            );
          } else {
            return null;
          }
        } else {
          return (
            <Link
              key={i}
              href="#"
              className={`p-2 px-2 mx-2 rounded-sm ${currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-blue-500"}`}
              onClick={() => handlePageChange(i)}
            >
              {i + 1}
            </Link>
          );
        }
      })}
    </span>
    <Link
      className={`paginate_button next ${currentPage === totalPages - 1 ? "disabled" : ""}`}
      href="#"
      onClick={() => handlePageChange(currentPage + 1)}
    >
      <i className="fa fa-angle-double-right"></i>
    </Link>
  </div>
</div>

                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Order">
                <OrderTab />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default orderstatus;
