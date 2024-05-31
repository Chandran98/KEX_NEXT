/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const stats = () => {
  return (
    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Join one of India's leading digital asset platforms</h2>
            <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>
{/* 
        <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <div>
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 6+ </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                <p class="text-base mt-0.5 text-gray-500">Creating the successful path</p>
            </div>

            <div>
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 4821 </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
                <p class="text-base mt-0.5 text-gray-500">In last 6 years</p>
            </div>

            <div>
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 37+ </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Team members</p>
                <p class="text-base mt-0.5 text-gray-500">Working for your success</p>
            </div>
        </div> */}
          <div class=" text-black flex justify-between w-full p-5 mt-[2rem] ">
      <div class="w-full md:w-full xl:w-[1200px] grid grid-cols-2 gap-5 md:flex md:justify-between justify-start md:items-center md:divide-x-2 divide-gray-200">
        <div class="">
          <h1 class="md:text-[1.7rem] text-[1.2rem] leading-relaxed font-bold">200+</h1>
          <p class="text-[rgba(29,29,29,0.4)] text-md whitespace-nowrap">
            {/* {{ t("Countries Covered") }} */}
            Countries Covered</p>
        </div>
  
        <div class="md:pl-10 w-1/2 md:w-auto">
          <h1 class="md:text-[1.7rem] text-[1.2rem] leading-relaxed font-bold whitespace-nowrap">29 Million</h1>
          <p class="text-[rgba(29,29,29,0.4)] text-md whitespace-nowrap">
            {/* {{ t("Global Investors") }} */}
            Global Investors
            </p>
        </div>
  
        <div class="md:pl-10 w-1/2 md:w-auto">
          <h1 class="md:text-[1.7rem] text-[1.2rem] leading-relaxed font-bold">700+</h1>
          <p class="text-[rgba(29,29,29,0.4)] text-md whitespace-nowrap">
            {/* {{ t("Coins") }} */}
            Coins
            </p>
        </div>
  
        <div class="md:pl-10 w-1/2 md:w-auto">
          <h1 class="md:text-[1.7rem] text-[1.3rem] leading-relaxed whitespace-nowrap font-bold">$875.69 Million</h1>
          <p class="text-[rgba(29,29,29,0.4)] text-md whitespace-nowrap">
            {/* {{ t("24h Trading Volume") }} */}
            24h Trading Volume
            </p>
        </div>
      </div>
    </div>
    </div>
</section>

  )
}

export default stats