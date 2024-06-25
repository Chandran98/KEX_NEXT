/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useMemo, useRef } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
// import PageTitle from "../../../layouts/PageTitle";

import { useDispatch, useSelector } from "react-redux";
import { referralDetails } from "@/redux/reducer/user/userApi";

function dateFormat(value) {
  let objectDate = new Date(value);
  let day = ("0" + (objectDate.getDate() + 1)).slice(-2);
  let month = ("0" + (objectDate.getMonth() + 1)).slice(-2);
  let year = objectDate.getFullYear();

  return day + "/" + month + "/" + year;
}

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(referralDetails());
  }, []);

  const { loading, referalData } = useSelector((state) => state.user);

  // const tableInstance = useTable(
  //   {
  //     columns,
  //     data,
  //     initialState: { pageIndex: 0 },
  //   },
  //   useFilters,
  //   useGlobalFilter,
  //   usePagination
  // );

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   prepareRow,
  //   state,
  //   page,
  //   gotoPage,
  //   pageCount,
  //   pageOptions,
  //   nextPage,
  //   previousPage,
  //   canNextPage,
  //   canPreviousPage,
  //   setGlobalFilter,
  // } = tableInstance;

  // const { globalFilter, pageIndex } = state;

  return (
    <div className=" m-4 ">
      <section className="card py-10 p-5 m-2 mb-4 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Number of Referrals
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">{referalData?.data?.total_invites}</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Total Invites
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">{referalData?.data?.trade_rewards.toFixed(2)}</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Total Rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">{referalData?.data?.code}</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Referal Code
                    </p>
                  </div>
                </div>
              </div>
            </div>
{/* 
            <div className=" bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <div className="ml-4">
                    <span className=" font-bold text-gray-900">{`https://kairaaexchange.com/register/${referalData?.data?.code}`}</span>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Referral Link
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* <PageTitle activeMenu="Sorting" motherMenu="Table" /> */}
      <div className="card m-2 ">
        {/* <div className="card-header">
          <h4 className="card-title">Table Filtering</h4>
        </div> */}
        <div className="card-body">
          <div className="table-responsive">
            {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
            <table className="table shadow-hover dataTable display">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Unique Id</th>
                  <th>Email</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {referalData?.data?.invite_history.map((e, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.unique_id}</td>
                    <td>{e.email}</td>
                    <td>{e.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="d-flex justify-content-between">
              <span>
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>
                {""}
              </span>
              <span className="table-index">
                Go to page :{" "}
                <input
                  type="number"
                  className="ml-2"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                />
              </span>
            </div>
            <div className="text-center mb-3">
              <div className="filter-pagination  mt-3">
                <button
                  className=" previous-button"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {"<<"}
                </button>

                <button
                  className="previous-button"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>
                <button
                  className="next-button"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  Next
                </button>
                <button
                  className=" next-button"
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {">>"}
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
