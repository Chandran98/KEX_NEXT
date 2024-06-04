import Link from 'next/link';
import React, {useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
// import {Link} from 'react-router-dom'; 

const tabDataBlog = [
    { Name:"Cedric Kelly", Trade:"Senior Developer", Side:"Edinburgh", Number:"75", Date:"2022/05/29", Amount:"$433,060"},
    { Name:"Ashton Cox", Trade:"Junior Technical Author", Side:"San Francisco", Number:"66", Date:"2022/01/12", Amount:"$86,000"},
    { Name:"Brielle Williamson", Trade:"Integration Specialist", Side:"New York", Number:"71", Date:"2022/12/02", Amount:"$372,000"},
    { Name:"Tiger Nixon", Trade:"System Architect", Side:"Edinburgh", Number:"36", Date:"2022/12/25", Amount:"$170,750"},
    { Name:"Tiger Nixon", Trade:"System Architect", Side:"Edinburgh", Number:"61", Date:"2022/04/25", Amount:"$320,800"},
    { Name:"Garrett Winters", Trade:"Accountant", Side:"Tokyo", Number:"63", Date:"2022/07/25", Amount:"$170,750"},
    { Name:"Cedric Kelly", Trade:"Senior Developer", Side:"Edinburgh", Number:"75", Date:"2022/05/29", Amount:"$433,060"},
    { Name:"Ashton Cox", Trade:"Junior Technical Author", Side:"San Francisco", Number:"66", Date:"2022/01/12", Amount:"$86,000"},
    { Name:"Brielle Williamson", Trade:"Integration Specialist", Side:"New York", Number:"71", Date:"2022/12/02", Amount:"$372,000"},
    { Name:"Tiger Nixon", Trade:"System Architect", Side:"Edinburgh", Number:"36", Date:"2022/12/25", Amount:"$170,750"},
    { Name:"Tiger Nixon", Trade:"System Architect", Side:"Edinburgh", Number:"61", Date:"2022/04/25", Amount:"$320,800"},
    { Name:"Garrett Winters", Trade:"Accountant", Side:"Tokyo", Number:"63", Date:"2022/07/25", Amount:"$170,750"},
    { Name:"Cedric Kelly", Trade:"Senior Developer", Side:"Edinburgh", Number:"75", Date:"2022/05/29", Amount:"$433,060"},
    { Name:"Ashton Cox", Trade:"Junior Technical Author", Side:"San Francisco", Number:"66", Date:"2022/01/12", Amount:"$86,000"},
    { Name:"Brielle Williamson", Trade:"Integration Specialist", Side:"New York", Number:"71", Date:"2022/12/02", Amount:"$372,000"},
    { Name:"Tiger Nixon", Trade:"System Architect", Side:"Edinburgh", Number:"36", Date:"2022/12/25", Amount:"$170,750"},
    { Name:"Tiger Nixon", Trade:"System Architect", Side:"Edinburgh", Number:"61", Date:"2022/04/25", Amount:"$320,800"},
    { Name:"Garrett Winters", Trade:"Accountant", Side:"Tokyo", Number:"63", Date:"2022/07/25", Amount:"$170,750"},
    { Name:"Cedric Kelly", Trade:"Senior Developer", Side:"Edinburgh", Number:"75", Date:"2022/05/29", Amount:"$433,060"},
    { Name:"Ashton Cox", Trade:"Junior Technical Author", Side:"San Francisco", Number:"66", Date:"2022/01/12", Amount:"$86,000"},
    { Name:"Brielle Williamson", Trade:"Integration Specialist", Side:"New York", Number:"71", Date:"2022/12/02", Amount:"$372,000"},
    { Name:"Tiger Nixon", Trade:"System Architect", Side:"Edinburgh", Number:"36", Date:"2022/12/25", Amount:"$170,750"},
    { Name:"Tiger Nixon", Trade:"System Architect", Side:"Edinburgh", Number:"61", Date:"2022/04/25", Amount:"$320,800"},
    { Name:"Garrett Winters", Trade:"Accountant", Side:"Tokyo", Number:"63", Date:"2022/07/25", Amount:"$170,750"},
];

const OrderTab = () =>{
    const [data, setData] = useState(
		document.querySelectorAll("#futureorder_wrapper tbody tr")
	);
	const sort = 6;
	const activePag = useRef(0);
	const [test, settest] = useState(0);

	// Active data
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove("d-none");
			} else {
				data[i].classList.add("d-none");
			}
		}
	};
   // use effect
    useEffect(() => {
      setData(document.querySelectorAll("#futureorder_wrapper tbody tr"));
      //chackboxFun();
	}, [test]);

  
   // Active pagginarion
    activePag.current === 0 && chageData(0, sort);
   // paggination
    let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		settest(i);
	};

    const {loading,orderDetails,error} = useSelector((state) => state.order);
    return(
        <>
            <div className="table-responsive dataTabletrade ">
                <div id="futureorder_wrapper" className="dataTables_wrapper no-footer">
                    <table id="example" className="table display dataTable no-footer" style={{minWidth:"845px"}}>
                        <thead>
                            <tr>
                            <th>Pair</th>
                          <th>Price</th>
                          <th>Side</th>
                          <th className="">Amount</th>
                          <th>Total</th>
                          <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        loading?<div className="text-center w-full">Loading</div>:<>
                         {orderDetails &&
                            orderDetails?.data?.order
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
  
                                  <td className="">{item.amount.toFixed(4)}</td>
                                  <td>{item.total.toFixed(4)}</td>
                                  <td>
                                    {new Date(item.date).toLocaleTimeString()}
                                  </td>
                                </tr>
                              ))}</>
                       }                                                      
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
                    {/* <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
                        <div className="dataTables_info">
                            Showing {activePag.current * sort + 1} to{" "}
                            {data.length > (activePag.current + 1) * sort
                                ? (activePag.current + 1) * sort
                                : data.length}{" "}
                            of {data.length} entries
                        </div>
                        <div
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
                        </div>
                    </div> */}
                </div>                                                
            </div>
        </>
    )
}
export default OrderTab;