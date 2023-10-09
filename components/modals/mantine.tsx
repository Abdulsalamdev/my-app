import { Modal } from "@mantine/core";
import { ShowStepper } from "./cardStepper";

export interface AddCardProp {
  close: () => void;
  opened: boolean;
  id: string | null;
}

export const AddCard = ({ close, opened }: AddCardProp) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={true}
        title="Create Card"
        centered
        size="md"
      >
        <ShowStepper />
      </Modal>
    </>
  );
};
