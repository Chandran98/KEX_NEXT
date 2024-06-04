/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import { Dropdown, Tab, Nav } from "react-bootstrap";
import OrderTab from "./orderTab";
import { useSelector } from "react-redux";
const orderstatus = () => {
  const { loading, orderDetails, error } = useSelector((state) => state.order);

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
          <div className="card-body pt-0 pb-0 h-[55vh]  overflow-y-auto">
            <Tab.Content>
              <Tab.Pane eventKey="All">
                <div className="table-responsive dataTabletrade ">
                  <div
                    id="future_wrapper"
                    className="dataTables_wrapper no-footer "
                  >
                    <table
                      id="example"
                      className="table display  dataTable no-footer"
                      style={{ minWidth: "845px" }}
                    >
                      <thead>
                        <tr className=" text-center">
                          <th>Pair</th>
                          <th>Price</th>
                          <th>Side</th>
                          <th className="">Amount</th>
                          <th>Total</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody className=" text-center ">
                        {loading ? (
                            
                          <div className="">Loading</div>
                        ) : (
                          <>
                             {orderDetails&& orderDetails?.data?.active
                                    .slice(0, 7)
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

                                        <td className="">
                                          {item.amount.toFixed(4)}
                                        </td>
                                        <td>{item.total.toFixed(4)}</td>
                                        <td>
                                          {new Date(
                                            item.date
                                          ).toLocaleTimeString()}
                                        </td>
                                      </tr>
                                    ))}
                            {/* {orderDetails ===null?<></>:
                              (orderDetails.data.active.length == 0 ? (
                                <span className="">No Open orders available</span>
                              ) : (
                                <>
                                  {orderDetails.data.active
                                    .slice(0, 7)
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

                                        <td className="">
                                          {item.amount.toFixed(4)}
                                        </td>
                                        <td>{item.total.toFixed(4)}</td>
                                        <td>
                                          {new Date(
                                            item.date
                                          ).toLocaleTimeString()}
                                        </td>
                                      </tr>
                                    ))}
                                </>
                              ))} */}
                          </>
                        )}
                      </tbody>
                    </table>
                    <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
                      {/* <div className="dataTables_info">
                                        Showing {activePag.current * sort + 1} to{" "}
                                        {data.length > (activePag.current + 1) * sort
                                            ? (activePag.current + 1) * sort
                                            : data.length}{" "}
                                        of {data.length} entries
                                    </div> */}
                      <div></div>
                      {/* <div
                                        className="dataTables_paginate paging_simple_numbers mb-0"
                                        id="application-tbl1_paginate"
                                    >
                                        <Link
                                            className="paginate_button previous "
                                            href="/future"
                                            onClick={() =>
                                                activePag.current > 0 &&
                                                onClick(activePag.current - 1)
                                            }
                                            >
                                            <i className="fa fa-angle-double-left" ></i> 
                                        </Link>
                                        <span>
                                            {paggination.map((number, i) => (
                                                <Link
                                                    key={i}
                                                    href="/future"
                                                    className={`paginate_button  ${
                                                        activePag.current === i ? "current" : ""
                                                    } `}
                                                    onClick={() => onClick(i)}
                                                >
                                                    {number}
                                                </Link>
                                            ))}
                                        </span>

                                        <Link
                                            className="paginate_button next"
                                            href="/future"
                                            onClick={() =>
                                                activePag.current + 1 < paggination.length &&
                                                onClick(activePag.current + 1)
                                            }
                                        >
                                            <i className="fa fa-angle-double-right" ></i>
                                        </Link>
                                    </div> */}
                      <Link className="text-blue-500 font-semibold " href={"/"}>
                        view all
                      </Link>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Order">
                <OrderTab />
              </Tab.Pane>
              {/* <Tab.Pane eventKey="Trade">
                    <TradeTab />
                    </Tab.Pane>                                 */}
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default orderstatus;

/* eslint-disable react-hooks/rules-of-hooks */
// "use client"
// import Link from 'next/link'
// import React, { useState, useEffect, useRef } from 'react'

// import { Dropdown, Tab, Nav } from 'react-bootstrap';
// import OrderTab from './orderTab';
// import { useSelector } from 'react-redux';

// const orderstatus = () => {
//   const [data, setData] = useState([]); // Initialize empty data array
//   const sort = 10; // Limit of items per page
//   const activePag = useRef(0);
//   const [test, settest] = useState(0);

//   // Fetch order details from Redux on component mount
//   useEffect(() => {
//     const { orderDetails, error, loading } = useSelector((state) => state.order);
//     if (!error && orderDetails && orderDetails.data && orderDetails.data.order) {
//       setData(orderDetails.data.order); // Set data only if orderDetails is valid
//     }
//   }, []); // Empty dependency array to fetch data once on mount

//   // Calculate pagination based on data length and sort limit
//   const paggination = Math.ceil(data.length / sort);

//   // Active pagination & change data
//   const onClick = (i) => {
//     activePag.current = i;
//     settest(i); // Update test to trigger re-render
//   };

//   const { loading, orderDetails, error } = useSelector((state) => state.order);
// //   if (!error && orderDetails && orderDetails.data && orderDetails.data.order) {
// //     setData(orderDetails.data.order); // Set data only if orderDetails is valid
// //   }
//   return (
//     <div className="">
//       <div className="card">
//         <Tab.Container defaultActiveKey="All">
//           <div className="card-header border-0 pb-2 flex-wrap">
//             <h4 className="heading">Trade Status</h4>
//             <>
//               <Nav className="order nav nav-tabs">
//                 <Nav.Link as="button" eventKey="All" type="button">
//                   Open Order
//                 </Nav.Link>
//                 <Nav.Link as="button" eventKey="Order" type="button">
//                   Closed Order
//                 </Nav.Link>
//               </Nav>
//             </>
//           </div>
//           <div className="card-body pt-0 pb-0 h-[55vh] overflow-y-auto">
//             <Tab.Content>
//               <Tab.Pane eventKey="All">
//                 <div className="table-responsive dataTabletrade ">
//                   <div id="future_wrapper" className="dataTables_wrapper no-footer">
//                     <table id="example" className="table display dataTable no-footer" style={{ minWidth: "845px" }}>
//                       <thead>
//                         <tr className="text-center">
//                           <th>Pair</th>
//                           <th>Price</th>
//                           <th>Side</th>
//                           <th className="">Amount</th>
//                           <th>Total</th>
//                           <th>Date</th>
//                         </tr>
//                       </thead>
//                       <tbody className="text-center">
//                         {loading ? (
//                           <tr>
//                             <td colSpan="6">Loading...</td>
//                           </tr>
//                         ) : error ? (
//                           <tr>
//                             <td colSpan="6">Error: {error.message}</td>
//                           </tr>
//                         ) : data.length > 0 ? (
//                           data
//                             .slice(activePag.current * sort, (activePag.current + 1) * sort) // Slice data based on current page and limit
//                             .map((item, index) => (
//                               <tr key={index}>
//                                 <td>{item.pair}</td>
//                                 <td>{item.price}</td>
//                                 <td className={`${item.type === "sell" ? "text-red-700 font-semibold" : "text-green-700 font-semibold"}`}>
//                                   {item.type}
//                                 </td>
//                                 <td className="">{item.amount.toFixed(4)}</td>
//                                 <td>{item.total.toFixed(4)}</td>
//                                 <td>{new Date(item.date).toLocaleTimeString()}</td>
//                               </tr>
//                             ))
//                         ) : (
//                           <tr>
//                             <td colSpan="6">No order details found</td>
//                           </tr>
//                         )}
//                       {/* Continued from previous part */}
//                       </tbody>
//                     </table>
//                     <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
//                       <div className="dataTables_info">
//                         Showing {activePag.current * sort + 1} to{" "}
//                         {Math.min(data.length, (activePag.current + 1) * sort)}{" "}
//                         of {data.length} entries
//                       </div>
//                       <div className="dataTables_paginate paging_simple_numbers mb-0" id="application-tbl1_paginate">
//                         <Link
//                           className="paginate_button previous "
//                           href="/future"
//                           onClick={() =>
//                             activePag.current > 0 && onClick(activePag.current - 1)
//                           }
//                           disabled={activePag.current === 0} // Disable previous button on first page
//                         >
//                           <i className="fa fa-angle-double-left"></i>
//                         </Link>
//                         <span>
//                           {Array.from({ length: paggination }, (_, i) => (
//                             <Link
//                               key={i}
//                               href="/future"
//                               className={`paginate_button ${activePag.current === i ? "current" : ""}`}
//                               onClick={() => onClick(i)}
//                             >
//                               {i + 1}
//                             </Link>
//                           ))}
//                         </span>
//                         <Link
//                           className="paginate_button next"
//                           href="/future"
//                           onClick={() =>
//                             activePag.current + 1 < paggination.length && onClick(activePag.current + 1)
//                           }
//                           disabled={activePag.current === paggination - 1} // Disable next button on last page
//                         >
//                           <i className="fa fa-angle-double-right"></i>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Tab.Pane>
//               <Tab.Pane eventKey="Order">
//                 <OrderTab />
//               </Tab.Pane>
//               <Tab.Pane eventKey="Trade">
//                 {/* <TradeTab /> */}
//               </Tab.Pane>
//             </Tab.Content>
//           </div>
//         </Tab.Container>
//       </div>
//     </div>
//   );
// };

// export default orderstatus;
