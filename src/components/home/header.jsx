"use client";
import ThemeSwitcher from "@/utils/themes/themes";
import Image from "next/image";
import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
const Header = () => {
  const router = useRouter();

  const headerData = [
    { name: "Dashboard", link: "/user/dashboard" },
    { name: "Market", link: "/market" },
    { name: "Trade", link: "/trade/kaitcoin-inr" },
    { name: "P2p", link: "/p2p" },
    { name: "Swap", link: "/swap" },
    { name: "Referal", link: "/user/referal" },
  ];

  const onlogout = () => {
    localStorage.removeItem("auth-token");
    deleteCookie("auth-token");
    toast.success("logged out successfully");
    router.refresh();
  };

  const currentTime = Math.floor(Date.now() / 1000);

  const tokenData = getCookie("auth-token");
  const mytoken = jwt.decode(tokenData)?.exp > currentTime;

  return (
    <div className=" z-10 sticky top-0">
      <header className="bg-white ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <Image src={"/kex.png"} width={50} height={50} alt="" />
              </Link>
            </div>

            <div className=" flex gap-24">
              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                {headerData.map((e, i) => {
                  return (
                    <Link
                      key={i}
                      href={e.link}
                      className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                    >
                      {e.name}
                    </Link>
                  );
                })}
              </div>
              {/* <div className="flex gap-8 items-center">
                <ThemeSwitcher />
                {mytoken ? (
                 <button
                 onClick={onlogout}
                 className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
               >
                 Log Out
               </button>
                ) : (
                  <>
                    <a
                    href="/signin"
                    title=""
                    className="  hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                    role="button"
                  >
                    Join Now
                  </a></>
             
                )}
              </div> */}
              {mytoken ? (
                <button
                  onClick={onlogout}
                  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                >
                  Log Out
                </button>
              ) : (
                <button
                  // onClick={onlogout}

                  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                >
                  Join Now
                </button>
                // <>
                //   <a
                //   href="/signin"
                //   title=""
                //   className="  hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                //   role="button"
                // >
                //   Join Now
                // </a></>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
