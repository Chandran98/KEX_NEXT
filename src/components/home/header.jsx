import ThemeSwitcher from "@/utils/themes/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiProfileFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { token } from "@/utils/utils";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  // const headerData = ["Market", "Trade", "P2p", "Swap", "Referal"];
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
    router.push("/");
  };

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
                    // <a
                    //   key={i}
                    //   href="#"
                    //   title=""
                    //   className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                    // >
                    //   {e.toUpperCase()}
                    // </a>
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
              <div className="flex gap-8 items-center">
                <ThemeSwitcher />
                {/* {token() ? (
                  <>
                    <CgProfile className=" text-black  text-xl" />

                    <button
                      onClick={onlogout}
                      className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                    >
                      Log Out
                    </button>
                   
                  </>
                ) : (
                  <a
                    href="/signin"
                    title=""
                    className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                    role="button"
                  >
                    Join Now
                  </a>
                )} */}
                <a
                  href="/"
                  title=""
                  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                  role="button"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

{
  /* <template>
  
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    UsersIcon,
    ChartBarIcon,
    SquaresPlusIcon,
    XMarkIcon,
    GlobeAltIcon,
XCircleIcon,
CurrencyDollarIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  
  const products = [
    { name: 'Spot Trading', description: 'Trade crypto with comprehensive tools', href: '#', icon: ChartPieIcon },
    { name: 'P2P Trading', description: 'Bank transfer and 20+ Options', href: '#', icon: UsersIcon },
    { name: 'Future Trading', description: 'Browse your future trade', href: '#', icon: ChartBarIcon },
  ]
  const callsToAction = [
  
  
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]
  
  const mobileMenuOpen = ref(false)
  </script> */
}
