import React from "react";
import Image from "next/image";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { AddCardProp } from "./mantine";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { cookieStorage } from "@ibnlanre/portal";

export function Logout({ close, opened }: AddCardProp) {
  const { push } = useRouter();
  const { mutate } = useMutation({
    mutationFn: () => builder.use().addressData.api.address(),
    mutationKey: builder.addressData.api.address.get(),
    onSuccess(data, variables, context) {
      cookieStorage.clear();
      push("/login");
    },
  });
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
          <Image src={"/images/53.png"} alt={""} width={100} height={100} />
          <p className="text-[#54565B] text-[16px] font-semibold font-Roboto ">
            Logout?
          </p>
          <p className="text-[#54565B] font-normal font-Roboto text-[12px] text-center ">
            You are about to logout of the platform, click the logout button to
            proceed
          </p>
          <div className="pt-[20px] flex justify-between gap-[30px]">
            <button
              className="text-[12px] font-Roboto py-[13px] px-[44px] delete"
              onClick={close}
            >
              cancel
            </button>
            <button
              className="text-[#F2F2F2] text-[12px] font-Roboto py-[13px] px-[44px] bg-[#C81107] rounded-[8px]"
              onClick={() => mutate()}
            >
              Logout
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
