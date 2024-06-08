import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

const OrderTab = () => {
  const { loading, userData, error } = useSelector((state) => state.user);
  return (
    <>
      <div className="table-responsive dataTabletrade ">
        <div id="futureorder_wrapper" className="dataTables_wrapper no-footer">
          <table
            id="example"
            className="table display dataTable no-footer"
            style={{ minWidth: "845px" }}
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Ticket No.</th>
                <th>Issue Category</th>
                <th>Bank Name</th>
                <th>Description </th>
                <th>Status</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <div className="text-center w-full">Loading</div>
              ) : (
                <>
                  {userData &&
                    userData?.data?.bank_info.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.holder}</td>
                        <td>{item.accNumber}</td>

                        <td>{item.ibanCode}</td>
                        <td>{item.branch}</td>
                        <td
                          className={` text-white${
                            item.verifystatus === 1
                              ? "bg-green-700"
                              : "bg-red-700"
                          }`}
                        >
                          {item.verifystatus === 1 ? "Verified" : "Pending"}
                        </td>
                        <td className="text-end">
                          <div className="d-flex justify-content-end">
                            <Link
                              href={"#"}
                              className="btn btn-primary shadow btn-xs sharp me-3"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </Link>
                            <Link
                              href={"#"}
                              className="btn btn-danger shadow btn-xs sharp"
                            >
                              <i className="fa fa-trash"></i>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
          <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
            <div></div>

            <Link className="text-blue-500 font-semibold " href={"/"}>
              view all
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderTab;
