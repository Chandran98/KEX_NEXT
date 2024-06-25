import React from "react";
import isUserAuthenticated from "@/components/isAuth";
import {token} from "@/utils/utils";

const page = () => {
  const data = isUserAuthenticated();
  console.log(token(), "data89token");
  return <div>page{token()}</div>;
};

export default page;
