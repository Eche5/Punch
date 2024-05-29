import more from "../assets/more.png";
import point from "../assets/Rectangle 3281.png";
import yellow from "../assets/yellow.png";
import green from "../assets/green.png";


import video from "../assets/Group 626340.png";
import Marquee from "react-fast-marquee";
import group2 from "../assets/Group 626502.png";

function Why() {
  return (
    <div className=" font-switzer text-[#202229] bg-[#EDEFFF] xl:flex items-center py-20 grid grid-cols-1 gap-10 px-10 pr-0 xl:gap-40">
      <div className="xl:w-[380px] pr-4 xl:pl-0">
        <h4 className=" xl:w-[380px] xl:h-[128px] font-bold leading-[64px] text-[30px] xl:text-[54px] ">
          Why choose Zwilt?
        </h4>
        <p className=" xl:w-[326px] font-normal xl:text-[22px] leading-8">
          We take complex hiring processes - and simplify them. Connecting you
          to the world’s highly qualified talent pool.
        </p>
      </div>
      <Marquee
        style={{
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div className=" flex items-center xl:w-[1300px] h-[652px] rounded-[20px] p-10 pr-0 bg-white  overflow-hidden">
          <div className=" flex flex-col gap-10">
            <h4 className=" font-bold text-[54px] leading-[64px] w-[464px]">
              Onboard without the risk.
            </h4>
            <div>
              <p className=" flex items-center gap-4">
                <img src={point} />
                We pick the best for you to select.
              </p>
              <p className=" flex items-center gap-4">
                <img src={point} />
                Thousands of vetted candidates in dozens of categories.
              </p>
              <p className=" flex items-center gap-4">
                <img src={point} />
                Risk-free resource swapping for the best fit.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="h-[74px] w-[74px] rounded-[30px] bg-[#202229] flex justify-center items-center">
                <img src={more} />
              </button>
              <p className="font-medium text-[22px] leading-[18px]">
                Learn More
              </p>
            </div>
          </div>
          <img src={video} />
        </div>
        <div className=" flex items-center xl:w-[1300px] h-[652px] rounded-[20px] p-10 pr-0 bg-white overflow-hidden">
          <div className=" flex flex-col gap-10">
            <h4 className=" font-bold text-[54px] leading-[64px] w-[239px]">
              An open book.
            </h4>
            <div>
              <p className=" flex items-center gap-4">
                <img src={yellow} />
                Easy and transparent one-to-one chat with candidates.
              </p>
              <p className=" flex items-center gap-4">
                <img src={yellow} />
                Simple and convenient payment methods.
              </p>
              <p className=" flex items-center gap-4">
                <img src={yellow} />
                Review past ratings.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="h-[74px] w-[74px] rounded-[30px] bg-[#202229] flex justify-center items-center">
                <img src={more} />
              </button>
              <p className="font-medium text-[22px] leading-[18px]">
                Learn More
              </p>
            </div>
          </div>
          <img src={group2} />
        </div>
        <div className=" flex items-center xl:w-[1300px] h-[652px] rounded-[20px] p-10 pr-0 bg-white overflow-hidden">
          <div className=" flex flex-col gap-10">
            <h4 className=" font-bold text-[54px] leading-[64px] w-[279px]">
              Stay in the loop.
            </h4>
            <div>
              <p className=" flex items-center gap-4">
                <img src={green} />
                Track your staff activity down to every minute with screenshots.
              </p>
              <p className=" flex items-center gap-4">
                <img src={green} />
                Comprehensive timesheet data to process payments.
              </p>
              <p className=" flex items-center gap-4">
                <img src={green} />
                Create projects to organize and assign tasks more effectively.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="h-[74px] w-[74px] rounded-[30px] bg-[#202229] flex justify-center items-center">
                <img src={more} />
              </button>
              <p className="font-medium text-[22px] leading-[18px]">
                Learn More
              </p>
            </div>
          </div>
          <img src={video} />
        </div>
      </Marquee>
    </div>
  );
}

export default Why;
