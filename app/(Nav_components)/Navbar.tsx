"use client"
import React from "react";
import Nav_Left from "./Nav_Left";
import Nav_right from "./Nav_right";
import Link from "next/link";
import Course from "./Course";
import More from "./More";
import { MobileMenu_data, Signup_data } from "@/Redux-store/Redux-action";
import { useSelector } from "react-redux";
import SignupProvider from "../(Body_Section)/SignupProvider";
import MobileMenu from "../(Body_Section)/(MobileMenu)/MobileMenu";
function Navbar() {

  const Signup: boolean = useSelector(Signup_data);
  const Mobilemenu: boolean = useSelector(MobileMenu_data);

  return (
    <>
      <div
        className="w-full h-[65px]  fixed shadow-lg   shadow-[#2A0E61]/50  bg-slate-3
    00/30  bg-[#03001417]   backdrop-blur-md z-50 "
      >
        <div className=" w-full 1300:w-[1232px] h-full flex flex-row items-center justify-between 1140:justify-around 1300:justify-between m-auto px-[10px] 400:px-[20px] 500:px-[40px] 1140:p-0 ">
          <Nav_Left />
          <div className=" w-[500px] h-full hidden 860:flex flex-row items-center justify-between ">
            <div
              className="w-full h-auto flex flex-row items-center justify-between mr-[15px]  bg-[#0300145e] border
             border-[#7042f861] px-[20px]
           py-[10px] rounded-full "
            >
              <Link href={"/"} className="Nav_text">
                Home
              </Link>
              <Link href={"/projects"} className="Nav_text">
                Projects
              </Link>
              <Link href={"/about"} className="Nav_text">
                About me
              </Link>
              <More />
            </div>
          </div>
          <Nav_right />
        </div>
      </div>

      {Signup ? <SignupProvider /> : <div></div>}
      {Mobilemenu ? <MobileMenu /> : <div></div>}
    </>
  );
}

export default Navbar;
