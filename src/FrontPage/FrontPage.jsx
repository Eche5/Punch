import pic from "../assets/zwilt-tba-1-01 2.gif";
import input from "../assets/input.png";
export default function FrontPage() {
  return (
    <section className=" grid grid-cols-1 gap-20 pt-28 ">
      <div className=" flex justify-center items-center gap-20">
        <div className="  xl:w-[671px] font-switzer grid grid-cols-1 xl:gap-6 gap-8">
          <div className=" flex flex-col items-center">
            <h1 className=" xl:text-[54px] text-[26px] leading-[64px] text-[#202229] font-bold text-center flex items-center">
              Finding the right fit
              <img src={pic} className=" w-[68px] h-[43px]" /> has
            </h1>
            <h1 className=" xl:text-[54px] text-[26px] leading-[64px] text-black font-bold text-center">
              never been easier.
            </h1>
          </div>

          <p className=" xl:w-[582px] h-[64px] text-center xl:text-[22px]">
            With our rigorous pre-vetting process, you&apos;ll never have to
            worry about finding the ideal candidate ever again.
          </p>
          <div className="xl:w-[570px] w-full flex px-2 border-[1px] border-[#F0F0F0] rounded-[15px]">
            <input
              className="h-[74px] w-full  outline-none focus:ring-0 focus:border-black xl:w-[496px] rounded-[15px] pl-[27px]"
              placeholder="looking for design |"
            />
            <button className="xl:w-[74px] xl:h-[74px] h-[74px] w-[74px] bg-[#FFBE2E] flex justify-center items-center rounded-[15px]">
              <img src={input} className="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className=" xl:w-[920px] xl:h-[230px] bg-[#F8F8F8]  grid grid-cols-1 gap-4 p-4">
          <div className="xl:w-[391px] h-[44px] bg-[#D2D2D2] flex items-center rounded-[15px] mx-auto">
            <p className="bg-[#C7F4C2] xl:w-[192px] w-[150px] h-[44px] rounded-[15px] flex justify-center items-center font-semibold">
              IT & Development
            </p>
            <p className="flex justify-center items-center xl:w-[192px] w-[150px] h-[44px] font-medium text-[#202229]">
              Design and Creative
            </p>
          </div>
          <div className=" grid grid-cols-3">
            <ul className=" grid grid-cols-1 gap-4 text-[#959595]">
              <li>Python Developer</li>
              <li>Shopify Developer</li>
              <li className=" text-[#202229] font-medium">
                MERN Stack Developer
              </li>
              <li>Full Stack Developer</li>
            </ul>
            <ul className=" grid grid-cols-1 gap-4 text-[#959595]">
              <li>Data Scientist</li>
              <li>Front End Developer</li>
              <li>Shopify Developer</li>
              <li>Python Developer</li>
            </ul>
            <ul className=" grid grid-cols-1 gap-4 text-[#959595]">
              <li>Shopify Developer</li>
              <li>Python Developer</li>
              <li>MERN Stack Developer</li>
              <li className=" text-[#202229] font-medium">Explore More</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
