import React from "react";
import Image from "next/image";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { AddCardProp } from "./mantine";

export function SaveAddress({ close, opened }: AddCardProp) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size="sm"
      >
        <div className="flex flex-col justify-center items-center ">
          <Image src={"/images/45.png"} alt={""} width={100} height={100} />
          <p className="text-[#54565B] text-[16px] font-semibold font-Roboto ">
            Saved successfully
          </p>
          <p className="text-[#54565B] font-normal font-Roboto text-[12px]">
            Organisation address was submitted successfully.
          </p>
          <div className="pt-[20px]">
            <button
              className="text-[#F2F2F2] text-[12px] font-Roboto py-[14px] px-[44px] bg-[#C81107] rounded-[8px]"
              onClick={close}
            >
              close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
