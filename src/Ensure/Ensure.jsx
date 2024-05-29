import React from "react";
import play from "../assets/play.png";
import video from "../assets/video.png";

function Ensure() {
  return (
    <div className=" font-switzer px-10 py-20 flex flex-col gap-10 text-[#202229]">
      <h4 className=" xl:w-[570px] font-bold xl:text-[54px] text-[30px] text-[#202229]">
        How we ensure you’re in good hands.
      </h4>
      <p className=" xl:w-[646px] font-normal xl:text-[22px]">
        With our comprehensive screening process, we hand-pick highly skilled
        candidates so you can onboard them in a matter of days.
      </p>
      <div className=" flex flex-col gap-8">
        <div className=" xl:w-[635px] h-[80px] border-[1px] border-[#F0F0F0] flex items-center xl:gap-10 gap-4 p-8">
          <div className=" w-[57px] h-[57px] rounded-[43.94px] bg-[#ECECEC] flex justify-center items-center">
            <img src={play} />
          </div>
          <p>
            Step 1: <span className=" font-extralight">Resume Screening</span>
          </p>
        </div>
        <div className=" xl:w-[635px] xl:h-[163px] border-[1px] border-[#F0F0F0] drop-shadow-md flex flex-col gap-2 p-8">
          <div className="flex items-center gap-10">
            <div className=" w-[57px] h-[57px] rounded-[43.94px] bg-[#8BA4FD] flex justify-center items-center">
              <img src={video} />
            </div>
            <p>
              Step 2: <span className=" font-extralight">Video interview</span>
            </p>
          </div>

          <p className=" font-normal text-[16px]">
            Candidates are assessed through skill based questions in a virtual
            setting. Allowing you to gauge personality and cultural fit.
          </p>
        </div>
        <div className=" xl:w-[635px] h-[80px] border-[1px] border-[#F0F0F0] flex items-center xl:gap-10 gap-4 p-8">
          <div className=" w-[57px] h-[57px] rounded-[43.94px] bg-[#ECECEC] flex justify-center items-center">
            <img src={play} />
          </div>
          <p>
            Step 3:
            <span className=" font-extralight">Technical Evaluation</span>
          </p>
        </div>
        <div className=" xl:w-[635px] h-[80px] border-[1px] border-[#F0F0F0] flex items-center xl:gap-10 gap-4 p-8">
          <div className=" w-[57px] h-[57px] rounded-[43.94px] bg-[#ECECEC] flex justify-center items-center">
            <img src={play} />
          </div>
          <p>
            Step 4: <span className=" font-extralight">Application Review</span>
          </p>
        </div>
        <div className=" xl:w-[635px] h-[80px] border-[1px] border-[#F0F0F0] flex items-center xl:gap-10 gap-4 p-8">
          <div className=" w-[57px] h-[57px] rounded-[43.94px] bg-[#ECECEC] flex justify-center items-center">
            <img src={play} />
          </div>
          <p>
            Step 5: <span className=" font-extralight">Lets get to work</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ensure;
