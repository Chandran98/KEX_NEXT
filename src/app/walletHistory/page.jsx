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
} from "@/components/ui/dropdown-menu"

const page = () => {
  const [checked, setChecked] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fiatHistory());
    dispatch(cryptoHistory());
  }, [dispatch]);
const filerData=["Profile","Billing","Date","Account"]
  console.log(checked,"checked");
  return (
    <>
      <div className="">
        <div className="col-xxl-12">
          <div className="card">
            <Tab.Container defaultActiveKey="All">
              <div className="card-border-0 pb-2 flex-wrap">
                <h4 className="heading me-2">Wallet History</h4>
                <nav className=" flex ">
                  <Nav
                    as="div"
                    className="order nav nav-tabs xl:w-[22vw] lg:w-[30vw] md:w-[40vw] "
                    role="tablist"
                  >
                    <Nav.Link as="button" eventKey="All">
                      Fiat
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="Nav-History">
                      Crypto
                    </Nav.Link>
                      <Nav.Link as="button" eventKey="Nav-Trade">
                        Trade Histroy
                      </Nav.Link>
                  </Nav>
                  <DropdownMenu >
  <DropdownMenuTrigger className="ml-10 bg-green-500 text-white p-4">{checked===""? "Open":checked}</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />{filerData.map((e,i)=>(
    <DropdownMenuItem key={i} onClick={() => setChecked(e)}>{e}</DropdownMenuItem>))}
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
