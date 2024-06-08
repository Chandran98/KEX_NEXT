import React from "react";
import { Button } from "react-bootstrap";

const page = () => {
  return (
    <div class="p-1 ">
      <div class="relative max-w-md mx-auto mt-8 md:mt-16">
        <div class="grid grid-cols-1 bg-white rounded-lg shadow-md">
          <div class="px-4 py-6 sm:px-8 sm:py-7">
            <div className="card-body flex flex-col text-center items-center justify-center">
              <h2>Security Verification</h2>
              <span>
                To secure your account, please complete the following
                verification.
              </span>
              <h5 className="mt-5">Email Verification Code</h5>
              <div className="flex justify-between gap-2 mb-4">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="border hover:border-blue-600 rounded w-12 h-12 text-center text-lg"
                  />
                ))}
              </div>
              <div className="gap-2">
                <span>Enter the six digit code received by</span>
                <span className="text-blue-600 font-bold"> </span>
                <span>please check your mail.</span>
              </div>

              <Button className="w-[20vw] mt-3" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
