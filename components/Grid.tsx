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
import { TextInput } from "@mantine/core";
export function Gridbuttom() {
  const [opened, { open, close }] = useDisclosure(false);
  const [red, setRed] = useState(false);
  const [list, setList] = useState(false);
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
        <div className="flex gap-[5px] rounded-[50px] p-[10px] border-[#F5F6F7] border-[1px] ">
          <div onClick={() => setList(false)}>
            <Image src={"/images/layout.png"} alt={""} width={40} height={40} />
          </div>
          <div onClick={() => setList(true)}>
            <Image src={"/images/list.png"} alt={""} width={40} height={40} />
          </div>
        </div>
        <div className="flex items-center p-[15px] border-[1px] border-[#EBEBEB] rounded-[12px] justify-center gap-[20px]">
          <SearchNormal1 size="20" color="#9FA19C" />
          <TextInput
            styles={{
              input: {
                width: "400px",
                border: "1px solid #9FA19C",
                paddingBlock: "17px",
                paddingInline: "17px",
                "::placeholder": {
                  fontSize: "12px",
                  color: "#9FA19C",
                },
              },
            }}
            placeholder="Search by Xpert Name / Phone Number / E-mail"
          />
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="p-[10px] rounded-full border-[1px] ">
            <Edit2 size="20" color="#C81107" />
          </div>
          <div className="p-[10px] rounded-full border-[1px] ">
            <LogoutCurve size="20" color="#C81107" />
          </div>
          <div className="p-[10px] rounded-full border-[1px] ">
            <ProfileDelete size="20" color="#C81107" />
          </div>
        </div>
      </div>
      <div className="bg-white mt-[5px] flex flex-wrap h-[58vh] p-[20px] overflow-auto text-[24px]">
        {list ? (
          <div className="flex flex-wrap">
            <div className="flex flex-col gap-[10px]">
              <div className="listCard flex flex-col justify-center items-center">
                {/* <Image src={"/images/afex.png"} alt={""} width={50} height={50} /> */}
                <div className="flex flex-col gap-[15px]">
                  <Image
                    src={"/images/secure.png"}
                    alt={""}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <p className="text-white text-[22px] w-[88px] text-center">
                    Ayodeji <span className="font-bold">Balogun</span>
                  </p>
                </div>
              </div>
              <p className="flex flex-col gap-[10px] text-[#7C827D] text-[14px] font-bold items-center">
                <span className="text-[#7C827D] text-[14px] font-bold">
                  Ayodeji Balogun
                </span>
                <span className="text-[#B4B4B0] text-[12px] uppercase">
                  28.11.2023
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap">
            <div className="flex flex-col items-center gap-[12px]">
              <div
                className="p-[8px] rounded-[16px] bg-white card-shadow"
                onClick={() => setRed(true)}
                style={{
                  border: red ? "#E1261C" : "#f5f6f7",
                }}
              >
                <div className="listcard flex items-center justify-center">
                  <div className="flex gap-[30px]">
                    <div className="scan flex items-center pr-[30px]">
                      <div className="flex items-center">
                        <Image
                          src={"/images/scanCenter.png"}
                          alt={""}
                          width={15}
                          height={15}
                          className="onTop bg-white p-[4px] rounded-[8px]"
                        />
                      </div>
                    </div>
                    <div className="text-white text-[22px] w-[88px]">
                      Ayodeji <span className="font-bold">Balogun</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="flex flex-col gap-[10px] text-[#7C827D] text-[14px] font-bold items-center">
                <span
                  className="text-[#7C827D] text-[14px] font-bold"
                  style={{
                    color: red ? "#E1261C" : "#7C827D",
                  }}
                >
                  Ayodeji Balogun
                </span>
                <span className="text-[#B4B4B0] text-[12px] uppercase">
                  28.11.2023
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      <AddCard close={close} opened={opened} />
    </div>
  );
}
