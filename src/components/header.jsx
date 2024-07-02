import Link from "next/link";
import React from "react";
import Header from "@/components/home/header";


const DashBoardHeader = () => {
  const headerTile = [
    { page: "/user/dashboard", title: "My profile" },
    { page: "/user/mywallet", title: "Wallet" },
    { page: "/user/banks", title: "Banks" },
    { page: "/user/walletHistory", title: "Wallet history" },
    { page: "/user/orders", title: " Orders History" },
    { page: "/user/ticket", title: "Tickets" },
  ];
  return (
    <div>
            <Header />

      <div className="bg-white rounded-md md:flex   p-2 m-4">
        {headerTile.map((e, i) => (
          <Link className=" flex-1" key={i} href={e.page}>
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
