import React from "react";

const hero = () => {
  return (
    <div class="bg-white">


      <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-20">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p class="text-base font-semibold tracking-wider text-blue-600 uppercase">
                Invest in your future! Invest in KAIRAA
              </p>
              <h1 clawss="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-6xl">
                Faster, better, stronger than your average crypto exchange
              </h1>
              <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Coinbase is the most trusted platform in the UK for buying,
                selling and trading crypto*.
              </p>

              <a
                href="#"
                title=""
                class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Join for free
                <svg
                  class="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>

              <p class="mt-5 text-gray-600">
                Already joined us?
                <a
                  href="#"
                  title=""
                  class="text-black transition-all duration-200 hover:underline"
                >
                  Log in
                </a>
              </p>
            </div>

            <div>
              <img
                class="w-full"
                src="https://images.ctfassets.net/o10es7wu5gm1/6hY7NCjeaBrrcDqnY7Ad0j/8e92c63dd463c9c729722c070f6df0b3/UK-EN-GBP_2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
