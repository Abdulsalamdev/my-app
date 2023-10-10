import React from "react";
import Image from "next/image";
import Link from "next/link";
export function Landing() {
  return (
    <div className="">
      <div className="h-[clamp(20px,3vw,40px)] bg-[#E1261C]"></div>
      <div className="w-[95%] ml-auto">
        <Image
          src={"/images/logo.png"}
          alt={""}
          width={50}
          height={50}
          className="pt-[40px]"
        />
        <div className="flex justify-between  gap-[30px] pt-[70px] flex-wrap">
          <div>
            <p className="flex flex-col text-[clamp(30px,5vw,80px)]  font-Roboto font-bold">
              <span className="text-[#54565B] ">Smart</span>
              <span className="text-[#C81107]">Business Card</span>
            </p>
            <p className="max-w-[500px] text-[#54565B] text-[20px] font-Roboto font-normal pb-[50px]">
              Create stylish, customizable and QR code supported digital
              business cards for Xperts
            </p>
            <Link href={"/login"}>
              <button className="login text-white">Create now</button>
            </Link>
          </div>
          <div className="flex landanimate gap-[30px]">
            <div className="flex flex-wrap">
              {" "}
              <Image
                src={"/images/backred.png"}
                alt={""}
                width={300}
                height={300}
              />
              <Image
                src={"/images/fontred.png"}
                alt={""}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
