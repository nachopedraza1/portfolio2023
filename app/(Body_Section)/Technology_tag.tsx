import React from "react";

interface Props {
  data: Project_data;
}

function Technology_tag({ data }: Props) {
  return (
    <div className="w-full h-auto flex flex-row items-center flex-wrap mt-[10px] ">
      <div
        className={`tag ${
          data.technology_feature.includes("HTML") ? "" : " hidden"
        }  bg-[#E54F24]    text-white  `}
      >
        HTML
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("CSS") ? "" : " hidden"
        }  bg-[#2062AF]    text-white `}
      >
        CSS
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("JavaScript") ? "" : " hidden"
        }  bg-[#F0DB4F]    text-black `}
      >
        JavaScript
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Tailwind") ? "" : " hidden"
        }  bg-[#4ad7f0]    text-[#258899] `}
      >
        Tailwind
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("React") ? "" : " hidden"
        }   bg-[#83e0f8]    text-[#226879] `}
      >
        React
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("React Native") ? "" : " hidden"
        }  bg-[#83e0f8]    text-[#1b859f] `}
      >
        React Native
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Tauri") ? "" : " hidden"
        }  bg-[#FFC131]    text-[#44a1ab] `}
      >
        Tauri
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Redux") ? "" : " hidden"
        }  bg-[#764ABC]    text-white `}
      >
        Redux
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("ReactQuery") ? "" : " hidden"
        }  bg-[#FF4154]    text-white `}
      >
        ReactQuery
      </div>

      <div
        className={`tag ${
          data.technology_feature.includes("TypeScript") ? "" : " hidden"
        }  bg-[#2D79C7]    text-[#b0cae4] `}
      >
        TypeScript
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Nextjs") ? "" : " hidden"
        }  bg-[#13224a]    text-[#fdfdfd]  `}
      >
        Nextjs
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Nodejs") ? "" : " hidden"
        }  bg-[#79B562]    text-[#fdfdfd] `}
      >
        Nodejs
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Golang") ? "" : " hidden"
        }  bg-[#00ACD7]    text-[#fdfdfd] `}
      >
        Go
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Gin") ? "" : " hidden"
        }  bg-[#0090D1]    text-[#f1db4b] `}
      >
        Gin
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Express") ? "" : " hidden"
        }  bg-[#333331]    text-gray-300 `}
      >
        Express
      </div>

      <div
        className={`tag ${
          data.technology_feature.includes("MongoDB") ? "" : " hidden"
        }  bg-[#10AA50]    text-[#fdfdfd]  `}
      >
        Mongo DB
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Firebase") ? "" : " hidden"
        }  bg-[#e9b422]    text-[#fdfdfd]  `}
      >
        Firebase
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Postger sql") ? "" : " hidden"
        }  bg-[#336791]    text-[#fdfdfd]  `}
      >
        Postger sql
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("My sql") ? "" : " hidden"
        }  bg-[#01526A]    text-[#fdfdfd]  `}
      >
        My sql
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Framer Motion") ? "" : " hidden"
        }  bg-[#ff13ffd3]   text-[#fdfdfd] `}
      >
        Framer Motion
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Graphql") ? "" : " hidden"
        }   bg-[#E632AD]     text-[#fdfdfd] `}
      >
        Graphql
      </div>
      <div
        id="cursive"
        className={`tag ${
          data.technology_feature.includes("JWT") ? "" : " hidden"
        }  bg-[#000000]    text-[#fdfdfd] flex flex-row font-semibold `}
      >
        <span className=" text-[#CB37F2] mr-[3px]">Json</span>
        <span className=" text-[#00B0E5]  mr-[3px]">Web</span>
        <span className=" text-[#EE0156]">Tocken</span>
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Prisma") ? "" : " hidden"
        }  bg-[#123A50]    text-[#fdfdfd]  `}
      >
        Prisma
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Docker") ? "" : " hidden"
        }  bg-[#2496ED]    text-[#fdfdfd]  `}
      >
        Docker
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Stripe") ? "" : " hidden"
        }  bg-[#665BFF]    text-[#fdfdfd]  `}
      >
        Stripe
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Expo") ? "" : " hidden"
        }  bg-[#422EDF]    text-[#fdfdfd]  `}
      >
        Expo
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Material UI") ? "" : " hidden"
        }  bg-[#422EDF]    text-[#fdfdfd]  `}
      >
        Material UI
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("NextAuth") ? "" : " hidden"
        }  bg-[#123A50]    text-[#fdfdfd]  `}
      >
        NextAuth
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("SASS") ? "" : " hidden"
        }  bg-[#ec4899]    text-[#fdfdfd]  `}
      >
        SASS
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Bootstrap") ? "" : " hidden"
        }  bg-[#7911f7]    text-[#fdfdfd]  `}
      >
        Bootstrap
      </div>
    </div>
  );
}

export default Technology_tag;
