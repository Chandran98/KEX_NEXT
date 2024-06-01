"use client"
import Link from 'next/link';
import React from 'react';

import {Dropdown, Tab, Nav} from 'react-bootstrap';

const buysell = () => {

  return (
    <div className="">
    <div className="card">
        <div className="card-header border-0 pb-0">
            <h4 className="heading mb-0">Future Trade</h4>
        </div>
        <div className="card-body pt-2">
            <div className="d-flex align-items-center justify-content-between my-3">
                <span className="small text-muted">Avbl Balance</span>
                <span className="">210.800 USDT</span>
            </div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text">Price</span>
                    <input type="text" className="form-control" />
                    <span className="input-group-text">USDT</span>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Size</span>
                    <input type="text" className="form-control" />
                    <Dropdown>
                        <Dropdown.Toggle  className="btn btn-primary btn-outline-primary left-radius">USDT</Dropdown.Toggle>
                        <Dropdown.Menu align="end"> 
                            <Dropdown.Item>USDT</Dropdown.Item>
                            <Dropdown.Item>BTC</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {/* <div className="mb-3 mt-4">
                    <label className="form-label">TP/SL</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Take Profit" />
                       
                        <Dropdown>
                            <Dropdown.Toggle  className="btn btn-primary btn-outline-primary left-radius">Mark</Dropdown.Toggle>
                            <Dropdown.Menu align="end"> 
                                <Dropdown.Item>Last</Dropdown.Item>
                                <Dropdown.Item>Mark</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="input-group mb-3"><input type="text" className="form-control" placeholder="Stop Loss" />
                        
                        <Dropdown>
                            <Dropdown.Toggle  className="btn btn-primary btn-outline-primary left-radius">Mark</Dropdown.Toggle>
                            <Dropdown.Menu align="end"> 
                                <Dropdown.Item>Last</Dropdown.Item>
                                <Dropdown.Item>Mark</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>*/}
                <div className="input-group mb-3">
                    <span className="input-group-text">Stop Price</span>
                    <input type="text" className="form-control" />
                   
                    <Dropdown>
                        <Dropdown.Toggle  className="btn btn-primary btn-outline-primary left-radius">Mark</Dropdown.Toggle>
                        <Dropdown.Menu align="end"> 
                            <Dropdown.Item>Limit</Dropdown.Item>
                            <Dropdown.Item>Mark</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div> 
                <div className="d-flex mt-24 justify-content-between flex-wrap">
                    <div className="d-flex">
                        <div className="">Cost</div>
                        <div className="text-muted px-1"> 0.00 USDT</div>
                    </div>
                    <div className="d-flex">
                        <div className="">Max</div>
                        <div className="text-muted px-1"> 6.00 USDT </div>
                    </div>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                    <Link href={"#"} className="btn btn-success py-2 text-uppercase">BUY</Link>
                    <Link href={"#"} className="btn btn-danger py-2 text-uppercase">Sell</Link>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default buysell