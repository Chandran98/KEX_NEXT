"use client"
import React from "react";

import { Dropdown, Nav, Tab } from "react-bootstrap";
import "../../../assets/css/style.css";
const orderbook = () => {
    const listData = [
        {},{},{},{},
        {},{},{},{},
        {},{},{},    {},{},{},{},
        {},{},{},{},
        {},{},{}, {},{},{},{},
        {},{},{},{},
        {},{},{},    {},{},{},{},
        {},{},{},{},
        {},{},{}, {},{},{},{},
        {},{},{},{},
        {},{},{},    {},{},{},{},
        {},{},{},{},
        {},{},{}, {},{},{},{},
        {},{},{},{},
        {},{},{},    {},{},{},{},
        {},{},{},{},
        {},{},{}, {},{},{},{},
        {},{},{},{},
        {},{},{},    {},{},{},{},
        {},{},{},{},
        {},{},{},
    ];
    
  return (
    <div className= "  ">
      <div className="">
        {/* <div className="card-header py-2">
          <h2 className="heading">
            Order Book <span>(BTC/USDT)</span>
          </h2>
        </div> */}
        <div className="card-body pt-0 pb-3 px-2">
          <Tab.Container defaultActiveKey="Openorder">
            <nav className="buy-sell style-1">
              <Nav className=" nav-tabs" id="nav-tab1" role="tablist">
                <Nav.Link
                  as="button"
                  className="nav-link "
                  eventKey="Openorder"
                  type="button"
                >
                  Open Orders
                </Nav.Link>
                <Nav.Link
                  as="button"
                  className="nav-link"
                  eventKey="Orderhistory"
                  type="button"
                >
                  Market Trades
                </Nav.Link>
              </Nav>
            </nav>
            <Tab.Content>
              <Tab.Pane eventKey="Openorder">
             <div className="p-1">
             {/* flex overflow-y-auto text-blue-500 font-semibold justify-between */}
             <div className="list-row-head overflow-y-auto">
                  <span>Price</span>
                  <span>Amount</span>
                  <span className="text-end">Total</span>
                </div>
                <div className="list-table danger h-[27vh] overflow-y-auto">
                  {listData.map((data, i) => (
                    <div className="list-row" key={i}>
                      <span>19852.63</span>
                      <span>0.050300</span>
                      <span className="text-end">2.362877</span>
                      <div className="bg-layer"></div>
                    </div>
                  ))}
                </div>
                <div className="list-bottom-info">
                  <h6 className="text-danger mb-0">
                    19858.19 <i className="fa-solid fa-caret-up"></i>
                  </h6>
                </div>
                <div className="list-table success h-[27vh]  overflow-y-auto">
                  {listData.map((data, i) => (
                    <div className="list-row" key={i}>
                      <span>19852.63</span>
                      <span>0.050300</span>
                      <span className="text-end">2.362877</span>
                      <div className="bg-layer"></div>
                    </div>
                  ))}
                </div>
             </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Orderhistory">
                <div className="list-row-head">
                  <span>Time</span>
                  <span>Price</span>
                  <span className="text-end">Amount</span>
                </div>
                <div className="list-table danger h-[60vh] overflow-y-auto">
                  {listData.map((data, i) => (
                    <div className="list-row" key={i}>
                      <span>19852.63</span>
                      <span>0.050300</span>
                      <span className="text-end">2.362877</span>
                      <div className="bg-layer"></div>
                    </div>
                  ))}
                </div>
               
                
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default orderbook;
