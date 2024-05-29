import zwilt from "../assets/zwilt.png";
import logo from "../assets/Vector.png";
import more from "../assets/more.png";

function Footer() {
  return (
    <div className=" bg-[#0C0C0C] xl:h-[1271px]">
      <div className=" bg-[#0C0C0C] skew-y-[-3deg]">
        <div className="  xl:h-[1207px]  xl:p-20  p-10 font-switzer flex flex-col gap-20">
          <div className=" bg-[#525AA0] h-[481px] flex justify-center items-center ">
            <div className=" flex flex-col gap-10">
              <h3 className="xl:w-[683px] h-[128px] font-bold xl:leading-[64px] xl:text-[54px] text-[30px] text-[#FFFFFF] text-center skew-y-3">
                Need a job done, and done well? Get started
              </h3>
              <div className="flex items-center gap-4 skew-y-3 justify-center">
                <button className="h-[74px] w-[74px] rounded-[30px] rotate-90 bg-[#202229] flex justify-center items-center">
                  <img src={more} />
                </button>
              </div>
            </div>
          </div>
          <div className=" xl:flex items-center gap-40">
            <div className=" skew-y-3 flex flex-col gap-4">
              <div className=" flex items-center">
                <img src={zwilt} />
                <img src={logo} />
              </div>
              <p className=" text-[#FFFFFFCC] text-[14px] font-normal w-[284px]">
                We take complex hiring processes - and simplify them. Connecting
                you to the world’s highly qualified talent pool.
              </p>
              <p className=" text-[#FFFFFF]  font-semibold text-[14px] leading-8 opacity-[40%]">
                LINKS AND REDIRECTS
              </p>
              <div className=" flex items-center gap-4">
                <button className=" w-[162.16px] h-[50px] rounded-[20.27px] bg-[#292B34] text-[14.86px] font-medium leading-3 text-[#EDEFFF]">
                  Hire now
                </button>
                <button className=" w-[162.16px] h-[50px] rounded-[20.27px] bg-[#292B34] text-[14.86px] font-medium leading-3 text-[#EDEFFF]">
                  Apply now
                </button>
              </div>
            </div>
            <div className=" skew-y-3 flex flex-col gap-20">
              <h4 className="xl:w-[779px] h-[128px] font-bold leading-[64px] xl:text-[54px] text-[30px] text-[#FFFFFF]">
                Connecting the right people to the right businesses.
              </h4>
              <div className=" grid xl:grid-cols-4 grid-cols-2 gap-10  text-[#FFFFFF]">
                <ul className=" flex flex-col gap-4">
                  <li className=" font-semibold text-[14px] leading-8 text-[#FFFFFF] opacity-[40%] ">
                    PLATFORM
                  </li>
                  <li>Find Work</li>
                  <li>Find Talent</li>
                  <li>Categories</li>
                  <li>About Us</li>
                </ul>
                <ul className=" flex flex-col gap-4">
                  <li className=" font-semibold text-[14px] leading-8 text-[#FFFFFF] opacity-[40%]">
                    CATEGORIES
                  </li>
                  <li>Data Science</li>
                  <li>IT & Networking</li>
                  <li>Categories</li>
                  <li>Web & Mobile</li>
                </ul>
                <ul className=" flex flex-col gap-4">
                  <li className=" font-semibold text-[14px] leading-8 text-[#FFFFFF] opacity-[40%]">
                    HELP
                  </li>
                  <li>FAQ'S</li>
                  <li>Contact Us</li>
                </ul>
                <ul className=" flex flex-col gap-4">
                  <li className=" font-semibold text-[14px] leading-8 text-[#FFFFFF] opacity-[40%]">
                    GET IN TOUCH @
                  </li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-[#FFFFFF] opacity-[60%] border-t-[1px] p-4 pb-0">
        <div className="flex justify-between">
          <p>All rights reserved by Zwilt</p>
          <div className="flex justify-center gap-8 items-center">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
