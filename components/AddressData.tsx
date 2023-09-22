import { ArrowLeft2, Add, FolderCross } from "iconsax-react";
import React from "react";
import AddAddress from "./modals/AddAddress";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

export default function AddressData() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="bg-[#F5F5F6]">
      <div className="w-[96%] m-auto  py-[30px]">
        <Link href={"/list"}>
          <div className="flex gap-[20px] items-center pb-[20px]">
            <ArrowLeft2 size="20" color="#262626" />
            <span className="text-[16px] font-medium text-[#54565B]">
              Cards Listing
            </span>
          </div>
        </Link>
        <div className="flex justify-between items-center mb-[5px] bg-white px-[20px] py-[20px] rounded-t-[20px]">
          <p className="text-[#54565B] text-[16px] font-medium">
            Organisation Addresses
          </p>
          <button
            className="flex gap-[5px] items-center px-[15px] py-[8px]  bg-[#C81107] rounded-[8px] border-none"
            onClick={open}
          >
            <Add size="20" color="#Ffffff" />
            <span className="text-[16px] text-white">New Address</span>
          </button>
        </div>
        <div className="flex justify-between flex-wrap items-center h-[63vh] bg-white">
          <div className="address"></div>
        </div>
      </div>
      <AddAddress close={close} opened={opened} />
    </div>
  );
}
