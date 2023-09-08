import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";

interface AddCardProp {
  close: () => void;
  opened: boolean;
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
      >
        {/* Modal content */}
      </Modal>
    </>
  );
};
