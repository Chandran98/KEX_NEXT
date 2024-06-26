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

import {
  GlobalFilter,
  ColumnFilter,
} from "../../components/referal/referalcomp";

import "../../assets/css/style.css";

function dateFormat(value) {
  let objectDate = new Date(value);
  let day = ("0" + (objectDate.getDate() + 1)).slice(-2);
  let month = ("0" + (objectDate.getMonth() + 1)).slice(-2);
  let year = objectDate.getFullYear();

  return day + "/" + month + "/" + year;
}

const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    //disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Email Id",
    Footer: "Email Id",
    accessor: "email",
    Filter: ColumnFilter,
  },
  {
    Header: "Date of  Birth",
    Footer: "Date of  Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return dateFormat(value);
    },
    Filter: ColumnFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
  },
];

const MOCK_DATA = [
  {
    id: 1,
    first_name: "Genevieve",
    last_name: "Blind",
    date_of_birth: "1/24/1996",
    country: "Afghanistan",
    phone: "2268978063",
    age: 82,
  },
  {
    id: 3,
    first_name: "Caroline",
    last_name: "Haddock",
    date_of_birth: "12/5/1989",
    country: "Afghanistan",
    phone: "8251841635",
    age: 52,
  },
  {
    id: 4,
    first_name: "Susana",
    last_name: "Tripney",
    date_of_birth: "6/28/2004",
    country: "Afghanistan",
    phone: "8961163082",
    age: 8,
  },
  {
    id: 2,
    first_name: "Peggie",
    last_name: "Ninnoli",
    date_of_birth: "12/29/1990",
    country: "Afghanistan",
    phone: "2211803633",
    age: 22,
  },
  {
    id: 5,
    first_name: "Ailina",
    last_name: "Walkley",
    date_of_birth: "6/19/2015",
    country: "Afghanistan",
    phone: "7514804940",
    age: 37,
  },
  {
    id: 7,
    first_name: "Malinda",
    last_name: "Tollady",
    date_of_birth: "11/12/2011",
    country: "Afghanistan",
    phone: "6911451962",
    age: 66,
  },
  {
    id: 9,
    first_name: "Florance",
    last_name: "Wahlberg",
    date_of_birth: "7/21/2009",
    country: "Afghanistan",
    phone: "4741700349",
    age: 66,
  },
  {
    id: 6,
    first_name: "Shae",
    last_name: "Ranald",
    date_of_birth: "3/4/1997",
    country: "Afghanistan",
    phone: "9551173716",
    age: 8,
  },
  {
    id: 8,
    first_name: "Ed",
    last_name: "Camidge",
    date_of_birth: "3/4/1982",
    country: "Afghanistan",
    phone: "8281579568",
    age: 65,
  },
  {
    id: 11,
    first_name: "Minnie",
    last_name: "Greatreax",
    date_of_birth: "3/22/1991",
    country: "Afghanistan",
    phone: "1247240549",
    age: 83,
  },
  {
    id: 15,
    first_name: "Damian",
    last_name: "Davidof",
    date_of_birth: "11/17/2008",
    country: "Afghanistan",
    phone: "4367200073",
    age: 68,
  },
  {
    id: 10,
    first_name: "Celinka",
    last_name: "Morrison",
    date_of_birth: "1/12/2000",
    country: "Afghanistan",
    phone: "7764595498",
    age: 10,
  },
  {
    id: 14,
    first_name: "Claudine",
    last_name: "Allgood",
    date_of_birth: "4/15/2007",
    country: "Afghanistan",
    phone: "6127875221",
    age: 90,
  },
  {
    id: 12,
    first_name: "Cleo",
    last_name: "Ourtic",
    date_of_birth: "5/26/1983",
    country: "Afghanistan",
    phone: "5821432556",
    age: 38,
  },
  {
    id: 19,
    first_name: "Godiva",
    last_name: "Strettle",
    date_of_birth: "4/20/2004",
    country: "Afghanistan",
    phone: "4456693345",
    age: 6,
  },
  {
    id: 13,
    first_name: "Ripley",
    last_name: "Rusling",
    date_of_birth: "4/25/1978",
    country: "Afghanistan",
    phone: "4527623871",
    age: 9,
  },
  {
    id: 18,
    first_name: "Carmencita",
    last_name: "Giottini",
    date_of_birth: "1/5/2016",
    country: "Afghanistan",
    phone: "6353138726",
    age: 99,
  },
  {
    id: 16,
    first_name: "Colline",
    last_name: "Behnen",
    date_of_birth: "12/13/1993",
    country: "Afghanistan",
    phone: "1891513218",
    age: 49,
  },
  {
    id: 15,
    first_name: "Shanan",
    last_name: "Darcey",
    date_of_birth: "10/30/1991",
    country: "Afghanistan",
    phone: "8361660601",
    age: 51,
  },
  {
    id: 17,
    first_name: "Joshuah",
    last_name: "Cossons",
    date_of_birth: "2/20/1986",
    country: "Afghanistan",
    phone: "5695954134",
    age: 19,
  },
];
const page = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
    gotoPage,
    pageCount,
    pageOptions,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;




  return (
    <div className=" m-4 ">
      <section className="card py-10 p-5 m-2 mb-4 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900">Number of Referrals</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
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
                      strokeLinejoin="round"
                      stroke-width="1"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">6+</h4>
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
                      strokeLinejoin="round"
                      stroke-width="1"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">37+</h4>
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
                      strokeLinejoin="round"
                      stroke-width="1"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">3,274</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Referal Code
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
                      strokeLinejoin="round"
                      stroke-width="1"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">98%</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Referral Link
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <PageTitle activeMenu="Sorting" motherMenu="Table" /> */}
      <div className="card m-2 ">
        <div className="card-header">
          <h4 className="card-title">Table Filtering</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()} className="table dataTable display">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                        {column.canFilter ? column.render("Filter") : null}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="">
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {" "}
                            {cell.render("Cell")}{" "}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="d-flex justify-content-between">
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
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default page;
