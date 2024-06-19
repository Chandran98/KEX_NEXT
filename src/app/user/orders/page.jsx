/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import OrderData from "./ordertab";
// import CryptoHistory from "./crypto";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { myOrderDetails } from "@/redux/reducer/order/orderApi";
import DashBoardHeader from "@/components/header";

const page = () => {
  const [checked, setChecked] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myOrderDetails());
  }, [dispatch]);
  const { loading, orderDetails, error } = useSelector((state) => state.order);
  const filerData = ["All", "Deposit", "Withdraw"];
  const statusData = ["All", "Pending", "Completed", "Cancelled"];
  console.log(checked, "checked");
  return (
    <>
    <DashBoardHeader/>
      <div className=" m-4  ">
        <div className=" ">
          <div className="card p-5">
            <Tab.Container defaultActiveKey="All">
              <div className="card-border-0 pb-2 flex-wrap">
                <h4 className="heading me-2">Order History</h4>
                <nav className=" sm:flex mx-4 ">
                  <Nav as="div" className="order nav nav-tabs " role="tablist">
                    <Nav.Link as="button" eventKey="All">
                      Open Orders
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="Nav-History">
                      Closed Orders
                    </Nav.Link>
                  </Nav>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="ml-10 bg-[#004dec] border border-blue-500 rounded-lg text-white p-3">
                      {checked === "" ? "Type" : checked}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Type</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {filerData.map((e, i) => (
                        <DropdownMenuItem key={i} onClick={() => setChecked(e)}>
                          {e}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>{" "}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="ml-10 bg-[#004dec] border border-blue-500 rounded-lg text-white p-3">
                      {checked === "" ? "Status" : checked}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Status</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {statusData.map((e, i) => (
                        <DropdownMenuItem key={i} onClick={() => setChecked(e)}>
                          {e}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </nav>
              </div>
              <div className="card-body pt-2">
                <Tab.Content>
                  <Tab.Pane eventKey="All">
                     {loading?<span>loading</span>: <OrderData e={orderDetails?.data?.order} />}
                    </Tab.Pane>
                  <Tab.Pane eventKey="Nav-History">
                     {loading?<span>loading</span>: <OrderData e={orderDetails?.data?.active} />}
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
