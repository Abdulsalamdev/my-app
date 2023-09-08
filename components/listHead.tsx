import React from "react";
import Image from "next/image";
import { NotificationBing, LogoutCurve } from "iconsax-react";

export function ListHead() {
  return (
    <div className="w-[94%] flex justify-between m-auto py-[15px] items-center">
      <Image src={"/images/logo.png"} alt={""} width={70} height={70} />
      <div className="flex gap-[20px] items-center">
        <NotificationBing size="20" color="#8F8E91" />
        <div className="flex gap-[7px] items-center">
          <Image src={"/images/gloria.png"} alt={""} width={30} height={30} />
          <p className="text-[14px]">
            Welcome,{" "}
            <span className="text-[14px] text-[#54565B] font-Roboto font-bold">
              {" "}
              Gloria
            </span>
          </p>
        </div>
        <LogoutCurve size="20" color="#8F8E91" />
      </div>
    </div>
  );
}
