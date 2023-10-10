import { Add, ArrowLeft2, FolderCross } from "iconsax-react";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { AddAddress } from "./modals/AddAddress";
import Link from "next/link";

export function AdminPro() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="bg-[#F5F5F6]">
      <div className="w-[96%] m-auto  py-[30px]">
        <Link href={"/list"}>
          <p className="flex gap-[20px] items-center pb-[20px]">
            <ArrowLeft2 size="20" color="#262626" />
            <span className="text-[16px] font-medium text-[#54565B]">
              Cards Listing
            </span>
            b
          </p>
        </Link>

        <div className="flex justify-between items-center mb-[5px] bg-white px-[20px] py-[20px] rounded-t-[20px]">
          <p className="text-[#54565B] text-[16px] font-medium">
            Organisation Addresses
          </p>
          <button
            className="nflex gap-[5px] items-center px-[15px] py-[8px]  bg-[#C81107] rounded-[8px] border-none"
            onClick={open}
          >
            <Add size="20" color="#Ffffff" />
            <span className="text-[16px] text-white">New Address</span>
          </button>
        </div>
        <div className="flex justify-center items-center h-[63vh] bg-white">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center ">
              <FolderCross size="50" color="#778CA2" />
              <p className="font-bold text-[#54565B] text-[20px] pt-[16px]">
                No Data
              </p>
            </div>
            <p className="text-[#9FA19C] text-[16px] text-center w-[350px] pt-[16px]">
              You are yet to create an address, the company addresses you create
              will appear here
            </p>
          </div>
        </div>
      </div>
      <AddAddress close={close} opened={opened} />
    </div>
  );
}
