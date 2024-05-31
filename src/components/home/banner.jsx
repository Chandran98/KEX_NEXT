/* eslint-disable @next/next/no-img-element */
import React from "react";

const banner = () => {
  const ecosystemData = [
    "Kairaa Chain",
    "Kait Staking",
    "Kairaa NFT",
    "V Pay",
    "Buymoe",
    "Picknow",
  ];
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Kairaa Ecosystem
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemData.map((e, i) => {
              return (
                <div
                  key={i}
                  className="overflow-hidden bg-white rounded shadow"
                >
                  <div className="p-8">
                    <div className="flex items-center">
                      <img
                        className="flex-shrink-0 w-12 h-auto"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png"
                        alt=""
                      />
                      <div className="ml-5 mr-auto">
                        <p className="text-xl font-semibold text-black">{e}</p>
                        <p className="mt-px text-sm text-gray-600">
                          Direct Integration
                        </p>
                      </div>
                      <svg
                        className="hidden w-5 h-5 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600 mt-7">
                      Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              );
            })}

            {/* 
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png"
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">P2P</p>
                    <p className="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    className="block w-6 h-6 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/shopify-logo.png"
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">Swap</p>
                    <p className="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/intercom-logo.png"
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">
                      Crypto Derivaties
                    </p>
                    <p className="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/twitter-logo.png"
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">
                      Farm yielding
                    </p>
                    <p className="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <img
                    className="flex-shrink-0 w-12 h-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png"
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">
                      Bot Trading
                    </p>
                    <p className="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    className="hidden w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div> */}
          </div>

          {/* <div className="mt-12 text-center">
            <a
              href="#"
              title=""
              className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Check all 1,593 applications
            </a>
          </div> */}
        </div>
      </section>
      <section className=" bg-gray-100 sm:py-16 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold leading-tight text-black sm:text-4xl lg:text-3xl">
            Trade on the go. Anywhere, anytime.
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            New to crypto? No problem. Buy crypto for as little as $5 in a tap, and grow your skills as you go.
            </p>
          </div> */}
          {/* grid items-center grid-cols-1 gap-12 lg:grid-cols-2 */}
          <div className="  p-5  grid grid-cols-1 lg:grid-cols-2">
            <div className=" flex flex-col sm:items-center lg:items-start  justify-center">
              <h5 className=" text-blue-600 font-medium mb-5 ">
                KAIRAA EXCHANGE APP
              </h5>
              <h2 className="text-xl font-bold leading-tight text-black sm:text-4xl lg:text-2xl">
                Trade on the go. Anywhere, anytime.
              </h2>
              <p className=" text-black pr-8 mt-5">
                Seize market opportunities and manage your portfolio on the go.
                Gain access to advanced charts, real-time data, and much more.
              </p>

              <div className="flex gap-6">
                <img
                  className=" w-40 h-24"
                  src="https://static2.crypto.com/exchange/assets/icons/app-store.svg"
                  alt=""
                />
                <img
                  className=" w-40 h-24"
                  src="https://static2.crypto.com/exchange/assets/icons/google-play.svg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <img
                class="w-full"
                src="https://hbg-fed-static-prd.hbfile.net/enhome/_next/static/media/leftImg.79bf1f9e.png"
                alt=""
              />
            </div>

            {/* <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">1</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Create a free account
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">2</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Complete your KYC & get Verified
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">3</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Go for Trade
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section class=" bg-white w-full flex justify-center  h-[220px]  bg-kcoin md:bg-[url('/banner.svg')] bg-no-repeat ">
        <div class="w-full flex flex-col items-center mt-[3rem]">
          <h1 class="xl:text-[2.3rem] lg:text-[2rem] text-[1.6rem] text-center font-semibold">
            Start Your Crypto Journey Now!
          </h1>
          <a
            href="/signup"
            class="xl:text-xl text-md mt-5 text-center bg-black  p-4 px-7 rounded-full font-semibold leading-6 text-gray-100"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </>
  );
};

export default banner;
