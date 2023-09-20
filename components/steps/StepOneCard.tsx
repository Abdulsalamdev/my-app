import React from "react";
import { Drop } from "../modals/DropZone";
import { DownDrop } from "../onceUse/DownDrop";

export function StepOneCard({ load, setUpload }: any) {
  return (
    <div>
      <Drop upImg={load} setImg={setUpload} />
      <div className="py-[10px]">
        <DownDrop />
      </div>
    </div>
  );
}
