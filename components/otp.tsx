import React from "react";
import Image from "next/image";
import { PinInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { useForm } from "@mantine/form";
import { toast } from "react-toastify";
import { cookieStorage } from "@ibnlanre/portal";
export default function Otp() {
  const { push } = useRouter();
  const { mutate } = useMutation({
    mutationFn: () => builder.use().account.api.otpCode(myForm.values),
    mutationKey: builder.account.api.otpCode.get(),
    onSuccess(data, variables, context) {
      toast.success("OTP Verified");
      push("/confirm");
    },
  });
  const myForm = useForm({
    initialValues: {
      email: cookieStorage.getItem("userEmail") || "",
      verification_code: "",
    },
  });
  return (
    <form
      className="flex justify-center h-[100vh] bg-[#F7F7F8] items-center"
      onSubmit={myForm.onSubmit(() => {
        mutate();
      })}
    >
      <div className="p-[30px] rounded-[14px] bg-white">
        <div className="flex flex-col justify-center items-center gap-[30px]">
          <Image src={"/images/afex.png"} width={100} height={50} alt={""} />
          <p className="text-[#000000] text-[25px] pb-[30px]">Enter OTP</p>
          <p className="text-[14px] text-[#000000] font-medium ">
            Enter the 6-digits verification code
          </p>
        </div>
        <div className="pb-[20px]">
          <PinInput
            size="lg"
            length={6}
            type="number"
            placeholder=""
            {...myForm.getInputProps("verification_code")}
          />
        </div>
        <button
          className="sign flex justify-center bg-[#C81107] text-white text-center py-[15px] w-full rounded-[8px]"
          type="submit"
        >
          <span>Reset Your Password</span>
        </button>
      </div>
    </form>
  );
}
