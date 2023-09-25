import { PasswordInput, TextInput } from "@mantine/core";
import React from "react";

export function Create() {
  return (
    <form className="shadow">
      <p className="text-[#54565B] text-[24px] font-Roboto font-bold pb-[30px]">
        Create account with SSO
      </p>
      <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
        First Name
      </p>
      <div className="pb-[20px] w-[clamp(200px,22.5vw,360px)]">
        <TextInput placeholder="Enter first name" />
      </div>
      <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
        Last Name
      </p>
      <div className="pb-[20px] w-[clamp(200px,22.5vw,360px)]">
        <TextInput placeholder="Enter last name" />
      </div>
      <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
        Password
      </p>
      <div className="pb-[12px]">
        <PasswordInput />
      </div>
      <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
        confirm Password
      </p>
      <div className="pb-[20px]">
        <PasswordInput />
      </div>
      <button className="sign flex justify-center bg-[#C81107] text-white text-center py-[10px] w-full rounded-[8px]">
        Create
      </button>
    </form>
  );
}
