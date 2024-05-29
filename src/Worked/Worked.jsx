import React from "react";
import quote from "../assets/quote.png";
import bottom from "../assets/Vector 343.png";
import groove from "../assets/Group.png";
import groovehq from "../assets/groovehq.png";
import guy from "../assets/image 6.png";
import left from "../assets/arrowleft.png";
function Worked() {
  return (
    <section className=" bg-gradient-to-b from-[#EDEFFF] to-white font-switzer relative  ">
      <div className=" bg-[#202229] skew-y-[-3deg] font-switzer xl:h-[840px] h-full xl:flex justify-around items-center grid-cols-1 grid gap-10 py-20 px-4">
        <img
          src={quote}
          className=" xl:flex justify-items-end absolute right-0 top-0 "
        />
        <div className=" font-bold text-white flex flex-col gap-8 items-start transform skew-y-3">
          <div>
            <h4 className=" xl:text-[54px] text-[30px] xl:w-[379px]  ">
              How it worked
            </h4>
            <h4 className=" xl:text-[54px] text-[30px] xl:w-[379px]  flex items-center gap-2 ">
              for Jason
              <img
                src={guy}
                className=" xl:w-[56px] xl:h-[56px] rounded-[91.16px]"
              />
              at
            </h4>
          </div>

          <img src={groovehq} />
          <p className=" font-normal xl:text-[22px] leading-8 xl:w-[461px]">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since.
          </p>
          <div className=" flex items-center gap-4">
            <div className=" w-[49.79px] h-[49.79px] bg-white rounded-[20.19px] flex justify-center items-center">
              <img src={left} />
            </div>
            <div className=" w-[49.79px] h-[49.79px] bg-white rounded-[20.19px] rotate-180 flex justify-center items-center">
              <img src={left} />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-8 skew-y-3">
          <div className=" flex items-center gap-4">
            <div className=" h-[98.79px] w-[98.79px] rounded-[40.05px] bg-[#AF7CFF] flex justify-center items-center">
              <img src={groove} />
            </div>
            <div>
              <h4 className=" text-[white] font-semibold xl:text-[34px] text-[20px] leading-[44px]">
                Jason Makki
              </h4>
              <p className=" text-[#C6C4C4] text-[16px] font-medium leading-[18px] opacity-[40%]">
                Engineer at GROOVE
              </p>
              <p className=" text-[#C6C4C4] text-[16px] font-medium leading-[18px] opacity-[40%]">
                San Francisco
              </p>
            </div>
          </div>
          <p className=" xl:w-[499px] xl:text-[22px] font-normal text-[#FFFFFF]">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and they’ve
            been heavy hitters in our corner since.Zwilt enabled us to deliver
            on time and they’ve been heavy hitters.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Worked;
