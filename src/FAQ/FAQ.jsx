import React from "react";

function FAQ() {
  return (
    <div className=" bg-[#EDEFFF] ">
      <div className=" font-switzer bg-[#F3F3F3] skew-y-[-3deg] py-20 flex flex-col gap-20 px-4 xl:px-0">
        <h3 className=" font-bold xl:text-[54px] text-[30px] leading-[64px] text-center skew-y-3">
          Frequently asked questions
        </h3>
        <div>
          <div className=" h-[112px] border-[1px] skew-y-3 flex  items-center">
            <div className=" w-[230px] border-[1px] h-[112px] flex items-center justify-center ">
              <h3>General</h3>
            </div>
            <div className="border-[1px]  h-[112px] xl:px-[27.5rem]  flex items-center xl:justify-start justify-center ">
              <p className=" text-center">I want to work part-time, is that possible</p>
            </div>
          </div>
          <div className="border-[1px]  h-[112px] skew-y-3 xl:pl-[42rem]  flex items-center xl:justify-start justify-center ">
            <p className=" text-center">How long are the average projects?</p>
          </div>
          <div className="border-[1px]  h-[112px] bg-[#E8E8E8] xl:pl-[42rem] skew-y-3  flex items-center xl:justify-start justify-center ">
            <p className=" font-semibold">How does the payment works?</p>
          </div>
          <div className="border-[1px] xl:pl-[42rem] h-[112px] skew-y-3  flex items-center xl:justify-start justify-center ">
            <p className=" text-center">How much can I earn?</p>
          </div>
          <div className=" h-[112px] border-[1px] skew-y-3 flex  items-center">
            <div className=" w-[230px] border-[1px] h-[112px] bg-[#E8E8E8] flex items-center justify-center ">
              <h3 className=" font-semibold">General</h3>
            </div>
            <div className=" w-[230px] border-[1px] h-[112px] flex items-center pl-8 xl:pl-0 justify-center  ">
              <h3>Joining Process</h3>
            </div>
            <div className="border-[1px]  h-[112px] flex xl:px-[13rem] items-center  ">
              <p className=" text-center">
                I want to work part-time, is that possible
              </p>
            </div>
          </div>
          <div className="border-[1px] xl:pl-[42rem] h-[112px] skew-y-3  flex items-center xl:justify-start justify-center xl:px-[31.5rem] ">
            <p className=" text-center">How long are the average projects?</p>
          </div>
          <div className="border-[1px] xl:pl-[42rem] h-[112px] skew-y-3  flex items-center xl:justify-start justify-center xl:px-[31.5rem] ">
            <p className=" text-center">How long are the average projects?</p>
          </div>
          <div className="border-[1px] xl:pl-[42rem] h-[112px] skew-y-3  flex items-center xl:justify-start justify-center xl:px-[31.5rem] ">
            <p className=" text-center">How much can I earn?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
