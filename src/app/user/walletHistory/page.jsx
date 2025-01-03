/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import AllOrder from "./comp";
import CryptoHistory from "./crypto";
import { useDispatch } from "react-redux";
import { cryptoHistory, fiatHistory } from "@/redux/reducer/wallet/walletApi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DashBoardHeader from "@/components/header";

const page = () => {
  const [checked, setChecked] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fiatHistory());
    dispatch(cryptoHistory());
  }, [dispatch]);
  const filerData = ["All","Deposit", "Withdraw"];
  const statusData = ["All","Pending", "Completed","Cancelled"];
  console.log(checked, "checked");
  return (
    <>
     <DashBoardHeader/>
      <div className=" m-4  ">
        <div className=" ">
        <div className="card p-5">
            <Tab.Container defaultActiveKey="All">
              <div className="card-border-0 pb-2 flex-wrap">
                <h4 className="heading me-2">Wallet History</h4>
                <nav className=" sm:flex mx-4 ">
                  <Nav
                    as="div"
                    className="order nav nav-tabs "
                    role="tablist"
                  >
                    <Nav.Link as="button" eventKey="All">
                      Fiat
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="Nav-History">
                      Crypto
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
                  </DropdownMenu> <DropdownMenu>
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
                    <AllOrder />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Nav-History">
                    <CryptoHistory />
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
