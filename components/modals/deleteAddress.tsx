import React from "react";
import Image from "next/image";
import { Modal, Group, Button } from "@mantine/core";
import { AddCardProp } from "./mantine";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { toast } from "react-toastify";

export function DeleteAddress({ close, opened, id }: AddCardProp) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => builder.use().addressData.api.deleteAddress(id as string),
    mutationKey: [...builder.addressData.api.deleteAddress.get(), id],
    onSuccess(data, variables, context) {
      toast.success("address deleted successfully");
      queryClient.invalidateQueries(builder.addressData.api.address.get());
    }, 
  });
  // const myForm = useForm({
  //   initialValues: {
  //     company_address_slug: "",
  //   },
  // });
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
            Delete Company Address?
          </p>
          <p className="text-[#54565B] font-normal font-Roboto text-[12px] text-center w-[340px]">
            You are about to delete this company address. Click the delete
            button below if you would like to continue?
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
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
