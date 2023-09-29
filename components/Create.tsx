import { builder } from "@/api/builder";
import { cookieStorage } from "@ibnlanre/portal";
import { Loader, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

export function Create() {
  const { push } = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      builder.use().account.api.createAccount(createForm.values),
    mutationKey: builder.account.api.createAccount.get(),
    onSuccess(data, variables, context) {
      toast.success("account successfully created");
      push("/login");
      cookieStorage.setItem("my-user", JSON.stringify(data.data));
      console.log(data?.data);
    },
    onError(err) {
      toast.error("invalid input");
      console.log(err);
    },
  });

  const createForm = useForm({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  return (
    <form
      className="shadow1"
      onSubmit={createForm.onSubmit(() => {
        mutate();
      })}
    >
      <p className="text-[#54565B] text-[24px] font-Roboto font-bold pb-[10px]">
        Create account with SSO
      </p>
      <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
        First Name
      </p>
      <div className="pb-[20px] w-[clamp(200px,22.5vw,360px)]">
        <TextInput
          placeholder="Enter first name"
          {...createForm.getInputProps("first_name")}
        />
      </div>
      <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
        Last Name
      </p>
      <div className="pb-[20px] w-[clamp(200px,22.5vw,360px)]">
        <TextInput
          placeholder="Enter last name"
          {...createForm.getInputProps("last_name")}
        />
      </div>
      <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
        Email
      </p>
      <div className="pb-[20px] w-[clamp(200px,22.5vw,360px)]">
        <TextInput
          placeholder="Enter email address"
          {...createForm.getInputProps("email")}
        />
      </div>
      <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
        Password
      </p>
      <div className="pb-[12px]">
        <PasswordInput
          {...createForm.getInputProps("password")}
          // error={values.password}
        />
      </div>
      <p className="text-[16px] font-bold font-Roboto text-[#54565B] pb-[10px]">
        confirm Password
      </p>
      <div className="pb-[20px]">
        <PasswordInput
          {...createForm.getInputProps("confirm_password")}
          // error={values.password}
        />
      </div>
      <button
        className="sign flex justify-center bg-[#C81107] text-white text-center py-[10px] w-full rounded-[8px]"
        type="submit"
      >
        {isLoading ? <Loader /> : <span>Create</span>}
      </button>
    </form>
  );
}
