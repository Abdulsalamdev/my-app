import { Select, TextInput } from "@mantine/core";
import Link from "next/link";
import React from "react";

export function Organization() {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex flex-col gap-[10px]">
        <p className="text-[14px] text-[#54565B] font-medium">Work Phone</p>
        <TextInput
          placeholder="Enter Work Phone"
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
          Official Email Address
        </p>
        <TextInput
          placeholder="Enter Email Address"
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
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-[#54565B] font-medium">
            Company Address
          </span>

          <span className="text-[14px] text-[#DC372F] font-medium">
            Add address
          </span>
        </div>
        <Select
          placeholder="Select Address"
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
          Role / Designation
        </p>
        <TextInput
          placeholder="Enter Role / Designation"
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
          Tribe / Department
        </p>
        <TextInput
          placeholder="Enter Tribe / Department"
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
  );
}
