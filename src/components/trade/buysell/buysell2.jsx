"use client";
import React from 'react'
import { Tab,Nav } from "react-bootstrap";
import OrderForm from "./component/orderForm";

const buysell2 = () => {
  return (
    <div className="">
    <div className="card h-auto">
        <div className="card-body px-0">
            <Tab.Container defaultActiveKey="Navbuy">
                <div className="">
                    <div className=" buy-sell">
                        <Nav className="nav nav-tabs" eventKey="nav-tab2" role="tablist">
                            <Nav.Link as="button" className="nav-link " eventKey="Navbuy" type="button">buy</Nav.Link>
                            <Nav.Link as="button" className="nav-link" eventKey="Navsell"  type="button">sell</Nav.Link>
                        </Nav>
                    </div>
                    <Tab.Content  >
                        <Tab.Pane  eventKey="Navbuy" >
                            <Tab.Container defaultActiveKey="Navbuymarket">
                                <div className="limit-sell">
                                    <Nav  className="nav nav-tabs" id="nav-tab3" role="tablist">
                                        <Nav.Link as="button"  eventKey="Navbuymarket"  type="button"  >market </Nav.Link>
                                        <Nav.Link as="button"  eventKey="Navbuylimit"  type="button" >limit</Nav.Link>
                                    </Nav>
                                </div>
                                <Tab.Content  id="nav-tabContent1">
                                    <Tab.Pane  eventKey="Navbuymarket"></Tab.Pane>
                                    <Tab.Pane  eventKey="Navbuylimit"></Tab.Pane>
                                </Tab.Content>
                                <div className="sell-element">
                                    <OrderForm />
                                </div>	
                            </Tab.Container>	
                        </Tab.Pane>
                        <Tab.Pane eventKey="Navsell">
                            <Tab.Container defaultActiveKey="Navsellmarket">
                                <div className="limit-sell">
                                    <Nav className="nav nav-tabs">
                                        <Nav.Link as="button" eventKey="Navsellmarket"  type="button">market order</Nav.Link>
                                        <Nav.Link as="button" eventKey="Navselllimit"  type="button" >limit order</Nav.Link>
                                    </Nav>
                                </div>
                                <Tab.Content id="nav-tabContent2">
                                    <Tab.Pane id="Navsellmarket" ></Tab.Pane>
                                    <Tab.Pane  id="Navselllimit" ></Tab.Pane>														
                                </Tab.Content>
                                <div className="sell-element">
                                    <OrderForm />
                                </div>	
                            </Tab.Container>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>	
        </div>
    </div>
</div>
  )
}

export default buysell2