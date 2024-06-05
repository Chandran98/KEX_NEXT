/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Link from 'next/link';
import { useSelector } from 'react-redux';
 




const AllOrder = () =>{
	
const{loading,fiatHistoryData,error} =useSelector((state)=>state.wallet);
    return(
        <>
            <div id="history_wrapper"  className="table-responsive dataTablehistory">
                <div  className="dataTables_wrapper no-footer">   
                    <table id="example" className="table shadow-hover dataTable display" style={{minWidth:"845px"}}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Asset</th>
                                <th>Type</th>
                                <th>method</th>
                                <th>Amount</th>
                                <th>Tx Id</th>
                                <th>Status</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fiatHistoryData?.data?.map((item, index)=>(
                                <tr key={index}>
                                    <td>{new Date(item.date).toLocaleDateString()}</td>
                                    <td>{item.currency}</td>
                                    <td>{item.type}</td>
                                    <td>{item.method}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.txnid}</td>
                                    <td>{item.status===1?"Completed":"Failed"}</td>
                                    <td className="text-end">
                                        <div className="d-flex justify-content-end">
                                            <Link href={"#"} className="btn btn-primary shadow btn-xs sharp me-3"><i className="fas fa-pencil-alt"></i></Link>
                                            <Link href={"#"} className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></Link>
                                        </div>												
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
                                to="/history"
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
                                        to="/history"
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
                                to="/history"
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

export default AllOrder;