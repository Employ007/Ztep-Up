import React from "react";
import { global } from "styled-jsx/css";
import Rightbar from "./Leftbar";
import Leftbar from "./Rightbar";
import TopNav from "./TopNav";

const Layout = ({childrens}) => {
  return (
    <>
      <div className="max-w-[1580px] mx-auto flex">
        <Rightbar/>

        <div className="w-[calc(100%-490px)] bg-[#F5F5F5]">
          <TopNav/>
          <div className="p-[32px]">
          {childrens}

          </div>
        </div>
        <Leftbar/>
      </div>
    </>
  );
};

export default Layout;
