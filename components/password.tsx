import React from "react";
import Image from "next/image";
import { TextInput } from "@mantine/core";
export function Password() {
  return (
    <div className="flex justify-center h-[100vh] bg-[#F7F7F8] items-center">
      <div className="p-[30px] rounded-[14px] bg-white">
        <div className="flex flex-col justify-center items-center gap-[30px]">
          <Image src={"/images/afex.png"} width={100} height={50} alt={""} />
          <p className="text-[#000000] text-[25px] pb-[20px]">Recover</p>
        </div>
        <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
          Email Address
        </p>
        <div className="pb-[20px] w-[clamp(200px,22.5vw,360px)]">
          <TextInput placeholder="example@gmail.com" />
        </div>
        <button className="sign flex justify-center bg-[#C81107] text-white text-center py-[15px] w-full rounded-[8px]">
          <span>Get OTP</span>
        </button>
      </div>
    </div>
  );
}
