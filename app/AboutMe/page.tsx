import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../(Footer)/Footer";
function page() {
  return (
    <div className=" pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px] ">
      <div className=" w-full 1250:w-[1210px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
        <Link
          href={"/"}
          className="flex flex-row items-center   justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-4 w-4  mr-[5px] " />
          <span className=" text-[14px]">Back</span>
        </Link>
      </div>
      <div className=" w-full 1250:w-[900px] h-auto m-auto mt-[25px] pb-[100px] ">
        <div className=" text-gray-400 text-[14px]">Ago 7 2023</div>
        <div className="w-full h-auto font-bold text-[29px] my-[15px] text-slate-200  animate-slowfade ">
          Hey ☘️, I&apos;m Juan Pedraza
        </div>
        <div className=" text-gray-300    animate-slideright ">
          Programmer with more than 3 years of experience
          experience, focused on creating fast web applications, fast web applications
          fast web applications,
          intuitive and built with the best
          best market practices.
        </div>
        <div>
          <div className="text-[20px]  my-[15px]  animate-slideright ">
            <span className="monospace">I study and continue to study at </span>
            <span className="text-rose-600"> Udemy</span> ,
            <span className="text-emerald-500"> CoderHouse</span> ,
            <span className=" text-[#F48024]"> Stackoverflow</span>,
            <span className="text-rose-600"> Platzi</span>.
          </div>
        </div>
        <div className="text-gray-300  animate-slideright">
          I am
          passionate about the world of technology and
          I am constantly learning
          to keep myself updated on the latest trends and
          latest trends and emerging
          emerging technologies
        </div>

        <div className="w-full h-auto font-bold text-[29px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Development Experience ⏳
        </div>
        <div className="mt-4  animate-slideright    leading-[30px] monospace text-[16px] 800:text-[20px]">
          I&apos;m a skilled web developer with experience in{" "}
          <span className=" text-blue-500 ">TypeScript</span> and{" "}
          <span className=" text-yellow-500"> JavaScript</span>, and expertise
          in frameworks like <span className=" text-cyan-500">React</span>,{" "}
          <span className="  text-teal-500"> Node.js</span>, and
          <span className="text-[#433a74] "> Next js</span>. I&apos;m a quick
          learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let&apos;s work together to bring your ideas to life!
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade  ">
          Skills 🌏
        </div>
        <div className=" text-gray-300  my-[15px]  animate-slideright">
          I currently have over 3 Years experience With
          , HTML
          , CSS/SCSS
          , JavaScript
          , TypeScript
          , ReactJs
          , NextJs
          , JQuery
          , Docker
          , Redux
          , MaterialUI
          , Bootstrap
          , Tailwind
          , NodeJs
          , Express
          , Mongoose
          , MongoDB
          , Firebase
          , Git
          and more.
        </div>
        {/* <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Backend 🐳
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          Node js , Express js , TypeScript , Mongodb , FireBase ,
          Graphql , Jwt authentication , NextAuh , Docker
        </div>
         <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade ">
          Mobile Application 📱
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          React Native CLI , React NAtive Expo + Next js , TypeScript ,
          ReduxTookit , Tailwind ,
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade ">
          Desktop Software 🪟🍎
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          Tauri With Next js 13 , TypeScript , Tailwind css , ReduxTookit
        </div> */}
        <Link
          href={"/Project"}
          className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[30px] "
        >
          Go Back To
          <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
            Projects
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default page;
