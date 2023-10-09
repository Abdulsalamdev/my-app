import React from "react";
import { Loader, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { cookieStorage, usePortal } from "@ibnlanre/portal";

export function Log() {
  const { push } = useRouter();
  // const [myUser, setMyUser] = usePortal("");
  const { mutate, isLoading } = useMutation({
    mutationFn: () => builder.use().account.api.sign_in(myForm.values),
    mutationKey: builder.account.api.sign_in.get(),
    onSuccess(data, variables, context) {
      toast.success("login successfully");
      push("/address");
      cookieStorage.setItem("my-user", JSON.stringify(data.data));
      // console.log(data?.data);
      myForm.reset();
    },
    onError(err) {
      console.log(err);
      toast.error("wrong input");
    },
  });

  const myForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  return (
    <form
      onSubmit={myForm.onSubmit(() => {
        mutate();
      })}
      className="shadow"
    >
      <p className="text-[#54565B] text-[24px] font-Roboto font-bold pb-[30px]">
        Sign in with SSO
      </p>
      <p className="text-[14px] text-[#54565B] font-Roboto font-normal pb-[10px]">
        Email Address
      </p>
      <div className="pb-[30px] w-[clamp(200px,22.5vw,360px)]">
        <TextInput
          placeholder="Enter email address"
          {...myForm.getInputProps("email")}
        />
      </div>
      <p className="text-[14px] text-[#54565B] font-Roboto font-normal pb-[10px]">
        Password
      </p>
      <div className="b-[15px]">
        <PasswordInput {...myForm.getInputProps("password")} />
      </div>
      <Link href={"/passreset"} className="flex justify-end">
        <span className="text-[#C81107] text-[12px] font-bold font-Roboto py-[15px]">
          Forgot Password?
        </span>
      </Link>
      <button
        type="submit"
        className="sign flex justify-center bg-[#C81107] text-white text-center py-[20px] w-full rounded-[8px]"
      >
        {isLoading ? <Loader /> : <span>Sign In</span>}
      </button>

      <div className="pt-[5px]">
        <Link href={"/signup"} className="text-[15px] font-medium font-Roboto ">
          don't have account?{" "}
          <span className="text-[#DC372F]">New account</span>
        </Link>
      </div>
    </form>
  );
}
