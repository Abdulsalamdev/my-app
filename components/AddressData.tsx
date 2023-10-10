import { ArrowLeft2, Add, FolderCross } from "iconsax-react";
import React, { useState } from "react";
import { AddAddress } from "./modals/AddAddress";
import { DeleteAddress } from "./modals/deleteAddress";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useQueries, useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { ADDRESSAPI } from "./types/types";
// import { toast } from "react-toastify";
import { AdminPro } from "./AminPro";

export default function AddressData() {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const { data: addressList, isLoading } = useQuery({
    queryFn: () => builder.use().addressData.api.address(),
    queryKey: builder.addressData.api.address.get(),
    select: ({ data }) => data?.data,

    // onError(err) {
    //   console.log("Error founddddd");
    // },
  });

  isLoading && <AdminPro />;
  return (
    <div className="bg-[#F5F5F6]">
      <div className="w-[96%] m-auto  py-[30px]">
        <Link href={"#"}>
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
        <div className="flex flex-wrap items-center  bg-white gap-[50px] p-[clamp(15px,1.7vw,30px)]">
          {addressList?.map((arg: ADDRESSAPI) => (
            <div className="address p-[clamp(10px,1.3vw,18px)]" key={arg.id}>
              <p className="text-[16px] font-Roboto font-medium text-[#000000]">
                {arg.address_title}
              </p>
              <p className="text-[12px] font-Roboto font-normal w-[clamp(290px,23vw,335px)] text-[#727272] pt-[10px]">
                {arg.company_address}
              </p>
              <div className="flex gap-[30px] items-center pt-[10px]">
                <button
                  className="text-[#1D925D] text-[14px] font-Roboto"
                  onClick={() => {
                    console.log(arg.id);
                    open();
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-[#C81107] text-[14px] font-Roboto"
                  onClick={() => {
                    console.log(arg.id as string);
                    openDelete();
                  }}
                >
                  Delete Address
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddAddress close={close} opened={opened} />
      <DeleteAddress id={deleteId} close={closeDelete} opened={openedDelete} />
    </div>
  );
}
