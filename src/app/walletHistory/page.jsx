/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";
import AllOrder from "./comp";
import { useDispatch } from "react-redux";
import { cryptoHistory, fiatHistory } from "@/redux/reducer/wallet/walletApi";
const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fiatHistory());
    dispatch(cryptoHistory());
  }, [dispatch]);
  return (
    <>
      <div className="">
        <div className="col-xxl-12">
          <div className="card">
            <Tab.Container defaultActiveKey="All">
              <div className="card-border-0 pb-2 flex-wrap">
                <h4 className="heading me-2">Trade History</h4>
                <nav>
                  <Nav
                    as="div"
                    className="order nav nav-tabs xl:w-[22vw] lg:w-[30vw] md:w-[40vw] "
                    role="tablist"
                  >
                    <Nav.Link as="button" eventKey="All">
                      Order
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="Nav-History">
                      Order History
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="Nav-Trade">
                      Trade Histroy
                    </Nav.Link>
                  </Nav>
                </nav>
              </div>
              <div className="card-body pt-2">
                <Tab.Content>
                  <Tab.Pane eventKey="All">
                    <AllOrder />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Nav-History">
                    {/* <OrderHistory /> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="Nav-Trade">
                    {/* <TradeHistory /> */}
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
