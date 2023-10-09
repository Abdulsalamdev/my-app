import { builder } from "@/api/builder";
import { Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

export function AddressSteps() {
  // const [opened, { open, close }] = useDisclosure(false);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () =>
      builder.use().addressData.api.createAddress(myForm.values),
    mutationKey: builder.addressData.api.createAddress.get(),
    onSuccess(data, variables, context) {
      toast.success("address created successfully");
      queryClient.invalidateQueries(builder.addressData.api.address.get());
    },
  });
  const myForm = useForm({
    initialValues: {
      address_title: "",
      company_address: "",
      // country: "",
      city: "",
      country: {},
      latitude: "",
      longitude: "",
    },
  });
  // console.log(myForm.values);
  return (
    <form
      className="flex flex-col gap-[25px]"
      onSubmit={myForm.onSubmit(() => {
        mutate();
      })}
    >
      <div className="flex flex-col gap-[10px]">
        <p className="text-[14px] text-[#54565B] font-medium">Address Title</p>
        <TextInput
          {...myForm.getInputProps("address_title")}
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
          {...myForm.getInputProps("company_address")}
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
          {...myForm.getInputProps("city")}
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
          placeholder="City"
        />
        <Select
          {...myForm.getInputProps("country")}
          placeholder="Country"
          data={["Nigeria", "Kenya", "uganda"]}
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
            {...myForm.getInputProps("latitude")}
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
            {...myForm.getInputProps("longitude")}
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
    </form>
  );
}
