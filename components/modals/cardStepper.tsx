import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { StepTowCard } from "../steps/stepTowcard";
import { StepThreeCard } from "../steps/stepThreeCard";
import { StepOneCard } from "../steps/StepOneCard";
import { FileWithPath } from "@mantine/dropzone";

export function ShowStepper() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const create = () => {
    console.log("hello");
  };
  const [upload, setUplode] = useState<FileWithPath | null>(null);

  return (
    <>
      <Stepper
        color="#C81107"
        active={active}
        onStepClick={setActive}
        breakpoint="md"
      >
        <Stepper.Step label="" description="">
          <StepOneCard load={upload} setUpload={setUplode} />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <StepTowCard />
        </Stepper.Step>
        <Stepper.Step label="" description="">
          <StepThreeCard />
        </Stepper.Step>
      </Stepper>

      <Group position="apart" mt="xl">
        <Button className="" variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button
          onClick={active < 2 ? nextStep : create}
          className="bg-[#C81107]"
        >
          {active > 1 ? "Create" : "Next"}
        </Button>
      </Group>
    </>
  );
}
