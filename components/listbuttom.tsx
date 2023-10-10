import {
  Add,
  Edit2,
  LogoutCurve,
  ProfileDelete,
  SearchNormal1,
  TextalignJustifyright,
  TextalignLeft,
  Tree,
} from "iconsax-react";
import React, { useState } from "react";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { AddCard } from "./modals/mantine";
import Link from "next/link";
export function Listbuttom() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="bg-[#F2F2F2] p-[15px] zindex">
      <div className="bg-white flex justify-between py-[20px] px-[30px] items-center rounded-t-[20px]">
        <p className="text-[16px] text-[#54565B] font-bold font-Roboto">
          Cards Listing
        </p>
        <div className="flex gap-[20px]">
          <Link href={"/address"}>
            <button className="text-[#C81107] flex justify-center px-[15px] py-[8px] text-[16px] font-bold font-Roboto border-[1px] border-[#C81107] rounded-[8px] items-center hover:bg-[#C81107] hover:text-white">
              View Address
            </button>
          </Link>
          <button
            className="flex gap-[5px] items-center px-[15px] py-[8px]  bg-[#C81107] rounded-[8px]"
            onClick={open}
          >
            <Add size="20" color="#Ffff" />
            <span className="text-[16px] text-white">New card</span>
          </button>
        </div>
      </div>
      <div className="bg-white py-[20px] px-[30px] mt-[5px] flex justify-between items-center">
        <div className="flex gap-[10px] rounded-[10px] p-[10px] border-[#F5F6F7] border-[1px] ">
          <TextalignLeft size="20" color="#C81107" />
          <TextalignJustifyright size="20" color="#9FA19C" />
        </div>
        <div className="flex items-center p-[15px] border-[1px] border-[#EBEBEB] rounded-[12px] justify-center gap-[20px]">
          <SearchNormal1 size="20" color="#9FA19C" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by Xpert Name / Phone Number / E-mail"
            className=" w-[440px]"
          />
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="p-[10px] rounded-full border-[1px] ">
            <Edit2 size="20" color="#C9C8C6" />
          </div>
          <div className="p-[10px] rounded-full border-[1px] ">
            <LogoutCurve size="20" color="#C9C8C6" />
          </div>
          <div className="p-[10px] rounded-full border-[1px] ">
            <ProfileDelete size="20" color="#C9C8C6" />
          </div>
        </div>
      </div>
      <div className="bg-white mt-[5px] flex justify-center p-[20px]">
        <div className="flex flex-col items-center gap-[10px]">
          <Image src={"/images/empty.png"} width={150} height={150} alt={""} />
          <p className="text-[20px] font-bold font-Roboto text-[#54565B]">
            Create Card
          </p>
          <p className="text-[16px] text-[#9FA19C] text-center w-[320px]">
            You will need to create a card before you can view the list of cards
            you have created.
          </p>
          <button
            className="flex gap-[5px] items-center px-[15px] py-[8px]  bg-[#C81107] rounded-[8px]"
            onClick={open}
          >
            <Add size="20" color="#Ffffff" />
            <span className="text-[16px] text-white">Create card</span>
          </button>
        </div>
      </div>
      <AddCard close={close} opened={opened} id={null} />
    </div>
  );
}
