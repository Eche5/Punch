import React from "react";
import union from "../assets/Union.png";
import shopify from "../assets/pexels-christina-morillo-1181424-removebg-preview 1.png";
import mag from "../assets/pexels-puwadon-sangngern-13419240-removebg-preview 1.png";
import webflow from "../assets/image 247.png";
import data from "../assets/image 244.png";
import dotnet from "../assets/image 246.png";
import skill from "../assets/skill.png";
import category from "../assets/category.png";
import back from "../assets/arrowback.png";
import ui from "../assets/image 248.png";
import illus from "../assets/illus.png";
import profile from "../assets/profile.png";
import graphics from "../assets/image 249.png";
import unreal from "../assets/image 250.png";
import cinema from "../assets/image 251.png";
import more from "../assets/more.png";

import input from "../assets/input.png";

function Steps() {
  const IT = [
    { id: "shop", image: shopify, name: "Shopify Developer" },
    { id: "mag", image: mag, name: "Magneto Developer" },
    { id: "data", image: data, name: "Data Scientist" },
    { id: "web", image: webflow, name: "Webflow Developer" },
    { id: "dot", image: dotnet, name: "Dotnet Developer" },
    { id: "dot", image: input },
  ];
  const Creative = [
    { id: "shop", image: back },
    { id: "mag", image: ui, name: "UX Designer" },
    { id: "data", image: graphics, name: "Graphics Designer" },
    { id: "web", image: illus, name: "Illustration Artist" },
    { id: "dot", image: unreal, name: "Unreal Engine" },
    { id: "dot", image: cinema, name: "Cinema 4D" },
  ];
  return (
    <div className=" bg-[#EDEFFF] skew-y-[-3deg] pb-20 px-4">
      <div className="  skew-y-3   mt-40 relative font-switzer flex flex-col text-[#202229] justify-center gap-20">
        <div className="font-switzer relative ">
          <img
            src={union}
            className="absolute xl:top-[-120px] top-[-30px] w-full"
          />
          <h1 className="xl:w-[977px] xl:text-[54px] text-[30px] leading-[64px] text-[#202229] font-bold text-center xl:pt-56 pt-20 mx-auto">
            Your one-stop marketplace for finding the talent your business
            needs.
          </h1>
        </div>
        <div className=" xl:px-20 flex flex-col gap-10 ">
          <div className="xl:flex justify-between grid grid-cols-1 gap-10 items-center">
            <div className=" xl:w-[380px] flex flex-col justify-center gap-4">
              <h3 className=" text-[24px] font-medium">
                Find Dev and IT professionals to scale your business.
              </h3>
              <ul className=" xl:grid grid-cols-2 flex flex-col gap-10 text-[16px] font-normal xl:gap-4">
                <li className=" flex items-center gap-2 text-[#202229CC]">
                  <img src={skill} />
                  989 Skills
                </li>
                <li className=" flex items-center gap-2 text-[#202229CC]">
                  <img src={category} />
                  45 Sub-Categories
                </li>
                <li className=" flex items-center gap-2 text-[#202229CC]">
                  <img src={profile} />
                  1011 Profiles
                </li>
              </ul>
            </div>
            <div className="xl:w-[730px] bg-[#FFFFFF] xl:h-[224px] rounded-[7px] flex flex-col justify-center p-4 gap-4 ">
              <h3>IT & Development</h3>
              <div className="flex flex-col justify-center items-center">
                <div className="grid xl:grid-cols-6 grid-cols-3 xl:gap-4 gap-8">
                  {IT.map((dev) => (
                    <div key={dev.id} className="flex flex-col items-center ">
                      <div className="w-[96px] h-[96px] bg-[#F6F6F6] rounded-[74px] flex items-center justify-center">
                        <img
                          src={dev.image}
                          alt={dev.name}
                          className="max-w-full max-h-full"
                        />
                      </div>
                      <p className=" w-[81px] h-[36px]  text-[14px] font-semibold text-center">
                        {dev.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div></div> */}
          <div className="xl:flex justify-between grid grid-cols-1 gap-10 items-center">
            <div className=" xl:w-[380px] flex flex-col justify-center gap-4">
              <h3 className=" text-[24px] font-medium">
                Explore Creative individuals with a keen eye for detail.
              </h3>
              <ul className=" xl:grid grid-cols-2 flex flex-col gap-10 text-[16px] font-normal xl:gap-4">
                <li className=" flex items-center gap-2 text-[#202229CC]">
                  <img src={skill} />
                  989 Skills
                </li>
                <li className=" flex items-center gap-2 text-[#202229CC]">
                  <img src={category} />
                  45 Sub-Categories
                </li>
                <li className=" flex items-center gap-2 text-[#202229CC]">
                  <img src={profile} />
                  1011 Profiles
                </li>
              </ul>
            </div>
            <div className="xl:w-[730px] bg-[#FFFFFF] xl:h-[224px] text-[#202229] rounded-[7px] flex flex-col justify-center p-4 gap-4 ">
              <h3>Design & Creative</h3>
              <div className="flex flex-col justify-center items-center">
                <div className="grid xl:grid-cols-6 grid-cols-3 xl:gap-4 gap-8">
                  {Creative.map((dev) => (
                    <div key={dev.id} className="flex flex-col items-center">
                      <div className="w-[96px] h-[96px] bg-[#F6F6F6] rounded-[74px] flex items-center justify-center">
                        <img
                          src={dev.image}
                          alt={dev.name}
                          className="max-w-full max-h-full"
                        />
                      </div>
                      <p className=" w-[81px] h-[36px]  text-[14px] font-semibold text-center">
                        {dev.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="xl:flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button className="h-[74px] w-[74px] rounded-[30px] bg-[#202229] flex justify-center items-center">
                <img src={more} />
              </button>
              <p className="font-medium text-[22px] leading-[18px]">
                Explore More
              </p>
            </div>
            <div className=" flex-1 flex justify-center">
              <p className="font-bold text-[22px] leading-[32px] text-start">
                30 more <span className="font-medium">to explore</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
