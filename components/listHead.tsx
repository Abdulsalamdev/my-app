import React from "react";
import Image from "next/image";
import { NotificationBing, LogoutCurve } from "iconsax-react";
import Link from "next/link";
// import { useDisclosure } from "@mantine/hooks";
// import { CardSuccess } from "./modals/CardSuccess";
// import { DeleteCards } from "./modals/deleteCards";
// import { DeleteAddress } from "./modals/deleteAddress";
// import { SaveAddress } from "./modals/SaveAddress";

export function ListHead() {
  // const [opened, { open, close }] = useDisclosure(false);
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
        <Link href={"/login"}>
          <LogoutCurve size="20" color="#8F8E91" />
        </Link>
        {/* <button onClick={open}>open</button> */}
      </div>
      {/* <SaveAddress close={close} opened={opened} /> */}
    </div>
  );
}
