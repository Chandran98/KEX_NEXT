import Link from "next/link";
import React from "react";

const DashBoardHeader = () => {
  const headerTile = [
    { page: "/dashboard", title: "My profile" },
    { page: "/mywallet", title: "Wallet" },
    { page: "/banks", title: "Banks" },
    { page: "/walletHistory", title: "Wallet history" },
    { page: "/orders", title: " Orders History" },
    { page: "/ticket", title: "Tickets" },
  ];
  return (
    <div>
      <div className="bg-white rounded-md md:flex   p-2 m-4">
        {headerTile.map((e, i) => (
          <Link  className=" flex-1" key={i} href={e.page}>
            <div className=" hover:bg-black bg-[#004dec]  text-center p-2 m-2 text-white  rounded-md">
              {e.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashBoardHeader;
