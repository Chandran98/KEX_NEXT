// /* eslint-disable react-hooks/rules-of-hooks */
// "use client";
// import React, { useEffect, useState } from "react";
// import * as io from "socket.io-client";
// import { Dropdown, Nav, Tab } from "react-bootstrap";
// import "../../../assets/css/style.css";
// import { set } from "react-hook-form";
// const orderbook = ({ frst, secnd,amount }) => {
//   const [recentTrades, setRecentTrades] = useState([]);
//   const [buyOrder, setBuyOrder] = useState([]);
//   const [sellOrder, setSellOrder] = useState([]);
//   const pair = `${frst}/${secnd}`;
//   useEffect(() => {
//     try {
//       const socket = io("https://liclxnvmxb.kairaaexchange.com/", {
//         transports: ["websocket"],
//       });
//       const pairData = pair === "/" ? "BTC/USDT" : pair;
//       // setRecentTrades([]);

//       console.log("dsfdsfa",pairData);
//       socket.emit("joinRoom", { message: pairData });
//       socket.on("buy_order", (data) => {
//         if (data && data.status) {
//           const buyOrders = data.data.filter((order) => order.type === "buy");
//           setBuyOrder(buyOrders.slice(0, 10));
//         }
//       });
//       socket.on("sell_order", (data) => {
//         if (data && data.status) {
//           const sellOrders = data.data.filter((order) => order.type === "sell");
//           setSellOrder(
//             sellOrders
//               .slice(sellOrders.length - 10, sellOrders.length)
//               .reverse()
//           );
//         }
//       });
//       socket.on("trade-order-response", (data) => {
//         setRecentTrades((prevTrades) => [data, ...prevTrades].slice(0, 30));
//         console.log("sdadsfdsaf trade", recentTrades);
//       });
//       return () => {
//         socket.disconnect();
//       };
//     } catch (error) {
//       console.log(error, "err");
//     }
//   }, [pair, recentTrades]);

//   return (
//     <div className="card-body pt-0 pb-3 px-2 bg-white">
//       <Tab.Container defaultActiveKey="Openorder">
//         <nav className="buy-sell style-1">
//           <Nav className=" nav-tabs" id="nav-tab1" role="tablist">
//             <Nav.Link
//               as="button"
//               className="nav-link "
//               eventKey="Openorder"
//               type="button"
//             >
//               Open Orders
//             </Nav.Link>
//             <Nav.Link
//               as="button"
//               className="nav-link"
//               eventKey="Orderhistory"
//               type="button"
//             >
//               Market Trades
//             </Nav.Link>
//           </Nav>
//         </nav>
//         <Tab.Content>
//           <Tab.Pane eventKey="Openorder">
//             <div className="p-1">
//               {/* flex overflow-y-auto text-blue-500 font-semibold justify-between */}
//               <div className="list-row-head overflow-y-auto">
//                 <span>Price</span>
//                 <span>Amount</span>
//                 <span className="text-end">Total</span>
//               </div>
//               <div className="list-table danger h-[27vh] overflow-y-auto">
//                 {sellOrder.length === 0 ? (
//                   <p>Loading...</p>
//                 ) : (
//                   <ul>
//                     {sellOrder.map((order, i) => (
//                       <div className="list-row" key={i}>
//                         <span>{Number(order.price).toFixed(4)}</span>
//                         <span>{Number(order.amount).toFixed(4)}</span>
//                         <span className="text-end">
//                           {Number(order.total).toFixed(2)}
//                         </span>
//                         <div className="bg-layer"></div>
//                       </div>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//               <div className="list-bottom-info">
//                 <h6 className="text-danger mb-0">
//                   {amount && amount.lastprice} <i className="fa-solid fa-caret-up"></i>
//                 </h6>
//               </div>
//               <div className="list-table success h-[27vh]  overflow-y-auto">
//                 {buyOrder.length === 0 ? (
//                   <p>Loading...</p>
//                 ) : (
//                   <ul>
//                     {buyOrder.map((order, i) => (
//                       <div className="list-row" key={i}>
//                         <span>{Number(order.price).toFixed(4)}</span>
//                         <span>{Number(order.amount).toFixed(4)}</span>
//                         <span className="text-end">
//                           {Number(order.total).toFixed(2)}
//                         </span>
//                         <div className="bg-layer"></div>
//                       </div>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </Tab.Pane>
//           <Tab.Pane eventKey="Orderhistory">
//             <div className="list-row-head">
//               <span>Time</span>
//               <span>Price</span>
//               <span className="text-end">Amount</span>
//             </div>
//             <div className="list-table danger h-[60vh] overflow-y-auto">
//               {recentTrades.length === 0 ? (
//                 <p>Loading...</p>
//               ) : (
//                 <ul>
//                   {recentTrades.map((order, i) => (
//                     <div className="list-row" key={i}>
//                       <span className="text-end">
//                         {new Date(order.date).toLocaleTimeString()}
//                       </span>
//                       <span>{Number(order.price).toFixed(2)}</span>
//                       <span>{Number(order.amount).toFixed(4)}</span>
//                       <div className="bg-layer"></div>
//                     </div>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </Tab.Pane>
//         </Tab.Content>
//       </Tab.Container>
//     </div>
//   );
// };

// export default orderbook;
