import { Select, TextInput } from "@mantine/core";
import React from "react";

export function AddressSteps() {
  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex flex-col gap-[10px]">
        <p className="text-[14px] text-[#54565B] font-medium">Address Title</p>
        <TextInput
          placeholder="e.g. Headquarter Abuja"
          styles={{
            input: {
              border: "1px solid #9FA19C",
              paddingBlock: "17px",
              paddingInline: "17px",
              "::placeholder": {
                fontSize: "12px",
                color: "#9FA19C",
              },
            },
          }}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[14px] text-[#54565B] font-medium">
          Company Address
        </p>
        <TextInput
          placeholder="House Number / Street / Landmark"
          styles={{
            input: {
              border: "1px solid #9FA19C",
              paddingBlock: "17px",
              paddingInline: "17px",
              "::placeholder": {
                fontSize: "12px",
                color: "#9FA19C",
              },
            },
          }}
        />
      </div>
      <div className="flex justify-between">
        <TextInput
          styles={{
            input: {
              border: "1px solid #9FA19C",
              paddingBlock: "17px",
              paddingInline: "17px",
              "::placeholder": {
                fontSize: "12px",
                color: "#9FA19C",
              },
            },
          }}
          placeholder="Enter Name"
        />
        <Select
          placeholder="Country"
          data={[
            { value: "react", label: "Iwo Road" },
            { value: "ng", label: "Best Way" },
            { value: "svelte", label: "Joy" },
            { value: "vue", label: "Love" },
          ]}
          styles={{
            input: {
              border: "1px solid #9FA19C",
              paddingBlock: "17px",
              paddingInline: "17px",
              "::placeholder": {
                fontSize: "12px",
                color: "#9FA19C",
              },
            },
          }}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[14px] text-[#54565B] font-medium">
          Office Coordinates
        </p>
        <div className="flex justify-between">
          <TextInput
            placeholder="Latitude (e.g. 9.356767 N)"
            styles={{
              input: {
                border: "1px solid #9FA19C",
                paddingBlock: "17px",
                paddingInline: "17px",
                "::placeholder": {
                  fontSize: "12px",
                  color: "#9FA19C",
                },
              },
            }}
          />
          <TextInput
            placeholder="Longitude (e.g. 7.356700 E)"
            styles={{
              input: {
                border: "1px solid #9FA19C",
                paddingBlock: "17px",
                paddingInline: "17px",
                "::placeholder": {
                  fontSize: "12px",
                  color: "#9FA19C",
                },
              },
            }}
          />
        </div>
      </div>
      <button className="text-[16px] py-[15px] px-[20px] bg-[#C81107] w-full text-[#DEDDDC] ">
        Add Address
      </button>
    </div>
  );
}
