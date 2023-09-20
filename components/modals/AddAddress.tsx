import React from "react";
import { Modal } from "@mantine/core";
import { ShowStepper } from "./cardStepper";
import { AddressSteps } from "../steps/Address";

interface AddCardProp {
  close: () => void;
  opened: boolean;
}
export default function AddAddress({ close, opened }: AddCardProp) {
  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={true}
        title="Add Address"
        centered
        size="md"
      >
        <AddressSteps />
      </Modal>
    </div>
  );
}
