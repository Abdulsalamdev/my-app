import React from "react";
import Image from "next/image";
export function StepThreeCard() {
  return (
    <div className="border-t-2 p-[20px] border-[#F3F3F3]">
      <p className="text-[#54565B] text-[12px] font-normal pb-[20px]">
        Select your preferable card style from the below styles
      </p>
      <div>
        <div className="flex flex-col items-center gap-[12px]">
          <div className="p-[8px] rounded-[16px] bg-white card-shadow">
            <div className="listcard flex items-center justify-center">
              <div className="flex gap-[30px]">
                <div className="scan flex items-center pr-[30px]">
                  <div className="flex items-center">
                    <Image
                      src={"/images/scanCenter.png"}
                      alt={""}
                      width={15}
                      height={15}
                      className="onTop bg-white p-[4px] rounded-[8px]"
                    />
                  </div>
                </div>
                <div className="text-white text-[22px] w-[88px]">
                  Ayodeji <span className="font-bold">Balogun</span>
                </div>
              </div>
            </div>
          </div>
          <p className="flex flex-col gap-[10px] text-[#7C827D] text-[14px] font-bold items-center">
            <span className="text-[#7C827D] text-[14px] font-bold">
              Ayodeji Balogun
            </span>
            <span className="text-[#B4B4B0] text-[12px] uppercase">
              28.11.2023
            </span>
          </p>
        </div>
      </div>

      <button></button>
    </div>
  );
}
