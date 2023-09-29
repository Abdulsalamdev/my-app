import React from "react";
import Image from "next/image";
import { PinInput } from "@mantine/core";
export default function Otp() {
  return (
    <div className="flex justify-center h-[100vh] bg-[#F7F7F8] items-center">
      <div className="p-[30px] rounded-[14px] bg-white">
        <div className="flex flex-col justify-center items-center gap-[30px]">
          <Image src={"/images/afex.png"} width={100} height={50} alt={""} />
          <p className="text-[#000000] text-[25px] pb-[30px]">Enter OTP</p>
          <p className="text-[14px] text-[#000000] font-medium ">
            Enter the 6-digits verification code
          </p>
        </div>
        <div className="pb-[20px]">
          <PinInput size="lg" length={6} type="number" placeholder="" />
        </div>
        <button className="sign flex justify-center bg-[#C81107] text-white text-center py-[15px] w-full rounded-[8px]">
          <span>Reset Your Password</span>
        </button>
      </div>
    </div>
  );
}