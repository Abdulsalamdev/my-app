import React from "react";
import Image from "next/image";
import { PasswordInput, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AccountCreate } from "./modals/accountCreate";
export function Newpass() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex justify-center h-[100vh] bg-[#F7F7F8] items-center">
      <div className="p-[30px] rounded-[14px] bg-white">
        <div className="flex flex-col justify-center items-center gap-[30px]">
          <Image src={"/images/afex.png"} width={100} height={50} alt={""} />
          <p className="text-[#000000] text-[25px] pb-[30px]">Recover</p>
        </div>
        <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
          Email Address
        </p>
        <div className="pb-[10px] w-[clamp(200px,22.5vw,360px)]">
          <TextInput placeholder="example@gmail.com" />
        </div>
        <p className="text-[14px] text-[#54565B] font-Roboto font-normal pb-[10px]">
          New Password
        </p>
        <div className="b-[15px]">
          <PasswordInput />
        </div>
        <p className="text-[14px] text-[#54565B] font-Roboto font-normal py-[10px]">
          Confirm Password
        </p>
        <div className="pb-[15px]">
          <PasswordInput />
        </div>
        <button
          className="sign flex justify-center bg-[#C81107] text-white text-center py-[15px] w-full rounded-[8px]"
          onClick={open}
        >
          <span>confirm Password</span>
        </button>
      </div>
      <AccountCreate close={close} opened={opened} />
    </div>
  );
}
