import React from "react";
import Image from "next/image";
import { Log } from "./Log";
export function SideLog() {
  return (
    <div className="w-[90%] m-auto py-[2rem]">
      <Image src={"/images/afex.png"} width={50} height={50} alt={""}></Image>
      <div className="flex justify-between items-center pt-[50px] flex-wrap gap-[30px]">
        <div className="hidden md:flex flex-col items-center">
          <Image
            src={"/images/secure.png"}
            alt={""}
            width={200}
            height={200}
          ></Image>
          <p className="text-[24px] text-[#54565B] font-Roboto font-bold py-[10px]">
            Streamline your Login Experience with SSO{" "}
          </p>
          <p className="max-w-[500px] text-center text-[14px] text-[#9FA19C]">
            Welcome to our Single Sign-On login page! With just one set of login
            credentials, you can now access all your favorite applications and
            services without the need to enter multiple usernames and passwords
          </p>
        </div>
        <Log />
      </div>
    </div>
  );
}
