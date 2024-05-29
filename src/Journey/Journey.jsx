import React from "react";
import one from "../assets/1.png";
import two from "../assets/Two.png";
import three from "../assets/3.png";

import more from "../assets/more.png";
import group2 from "../assets/Group 626351.png";
import group3 from "../assets/Group 626358.png";

import group from "../assets/Group 1094.png";
function Journey() {
  return (
    <div className=" font-switzer py-20 px-10 xl:flex flex-col xl:gap-20 items-center">
      <h4 className=" text-center xl:text-[54px] text-[30px] font-bold leading-[64px]">
        Start your journey today.
      </h4>
      <div className=" flex flex-col gap-10">
        <h2></h2>
        <div className=" bg-[#EDEFFF] xl:w-[1300px] xl:h-[387.5px] xl:flex justify-between items-center skew-y-[-3deg]">
          <div className="flex items-start gap-4 skew-y-3  p-6">
            <img src={one} alt="Star performer" />
            <div className="flex flex-col gap-4">
              <p className="xl:w-[445px] xl:text-[34px] text-[20px] font-semibold">
                Find your next star performer.
              </p>
              <p className="xl:w-[407px]">
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>
              <div className="flex items-center gap-4">
                <button className="h-[49.79px] w-[49.79px] rounded-[20px] bg-[#202229] flex justify-center items-center">
                  <img src={more} alt="More" />
                </button>
                <p className="font-medium xl:text-[22px] text-sm leading-[18px]">
                  Join Now
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={group} className=" xl:h-[387.5px]  " />
          </div>
        </div>
        <div className=" bg-[#FFF7E1] xl:w-[1300px] xl:h-[387.5px] xl:flex justify-between items-center skew-y-[-3deg]">
          <div className="flex items-start gap-4  skew-y-3  p-6">
            <img src={two} alt="Star performer" />
            <div className="flex flex-col gap-4">
              <p className="xl:w-[445px] xl:text-[34px] text-[20px] font-semibold">
                Evaluate to your heart’s content.
              </p>
              <p className="xl:w-[407px]">
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>
              <div className="flex items-center gap-4">
                <button className="h-[49.79px] w-[49.79px] rounded-[20px] bg-[#202229] flex justify-center items-center">
                  <img src={more} alt="More" />
                </button>
                <p className="font-medium xl:text-[22px] text-sm leading-[18px]">
                  Browse More
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={group2} className=" xl:h-[387.5px] " />
          </div>
        </div>
        <div className=" bg-[#F3F3F3] xl:w-[1300px] xl:h-[387.5px] xl:flex justify-between items-center skew-y-[-3deg]">
          <div className="flex items-start gap-4  skew-y-3 p-6">
            <img src={three} alt="Star performer" />
            <div className="flex flex-col gap-4">
              <p className="xl:w-[445px] xl:text-[34px] text-[20px] font-semibold">
                Start building your team.
              </p>
              <p className="xl:w-[407px]">
                Onboard your candidate right away and start creating the next
                big thing.
              </p>
              <div className="flex items-center gap-4">
                <button className="h-[49.79px] w-[49.79px] rounded-[20px] bg-[#202229] flex justify-center items-center">
                  <img src={more} alt="More" />
                </button>
                <p className="font-medium xl:text-[22px] text-sm leading-[18px]">
                  Join Now
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={group3} className=" xl:h-[387.5px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
