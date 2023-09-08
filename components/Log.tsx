import React from "react";
import { Loader, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export function Log() {
  const [login, setLogin] = useState(false as boolean);
  return (
    <div className="shadow">
      <p className="text-[#54565B] text-[24px] font-Roboto font-bold pb-[30px]">
        Sign in with SSO
      </p>
      <p className="text-[14px] text-[#54565B] font-Roboto font-normal pb-[10px]">
        Email Address
      </p>
      <div className="pb-[30px] w-[clamp(200px,22.5vw,360px)]">
        <TextInput placeholder="Enter email address" />
      </div>
      <p className="text-[14px] text-[#54565B] font-Roboto font-normal pb-[10px]">
        Password
      </p>
      <div className="b-[15px]">
        <PasswordInput />
      </div>
      <Link href={"#"}>
        <div className="text-[#C81107] text-[12px] font-bold font-Roboto flex justify-end pt-[20px] pb-[50px]">
          Forgot Password?
        </div>
      </Link>
      <button
        className="sign flex justify-center bg-[#C81107] text-white text-center py-[20px] w-full rounded-[8px]"
        onClick={() => setLogin(true)}
      >
        {login ? <Loader /> : <span>Sign In</span>}
      </button>
    </div>
  );
}
