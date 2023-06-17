import React, { useState } from "react";

const DBNewItem = () => {
  const [itemName,setItemName]=useState("")
  return (
    <div className="flex items-center justify-center flex-col pt-6 px-24 w-full">
      <div className="border border-gray-300 rounded-md p-4 w-full flex flex-col items-center justify-center gap-4">

        <InputValueField
        type="text"
        placeHolder={"Item name here"}
        stateFunc={setItemName}
        stateValue={itemName}
        />
      </div>
    </div>
  );
};
export const InputValueField = ({
  type,
  placeHolder,
  stateValue,
  stateFunc,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full px-4 py-3 bg-lightOverlay shadow-md outline-none rounded-md border border-gray-200 focus:border-red-400"
        value={stateValue}
        onChange={(e) => stateFunc(e.target.value)}
      />
    </>
  );
};
export default DBNewItem;
