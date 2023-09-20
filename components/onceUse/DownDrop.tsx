import React from "react";
import { TextInput } from "@mantine/core";
export function DownDrop() {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#54565B] text-[14px] font-bold">First Name</p>
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
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#54565B] text-[14px] font-bold">Last Name</p>
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
      </div>
    </div>
  );
}
