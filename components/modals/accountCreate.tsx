import { Modal } from "@mantine/core";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AddCardProp {
  close: () => void;
  opened: boolean;
}
export function AccountCreate({ close, opened }: AddCardProp) {
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
          <p className="text-[#000000] text-[17px] font-bold font-Roboto py-[10px]">
            Your account successfully Updated.
          </p>
          <Link href={"/login"} className="">
            <button className="text-[#F2F2F2] text-[12px] font-Roboto py-[13px] px-[44px] bg-[#C81107] rounded-[8px]">
              Go to Home
            </button>
          </Link>
        </div>
      </Modal>
    </>
  );
}
