import React from "react";
import Icon from "../common/icon";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-3 py-4">
      <div className="flex items-center gap-2">
        <Icon
          name="ic:baseline-fitness-center"
          className="size-6 bg-neutral-700"
        ></Icon>
        <div className="text-neutral-700 text-md font-semibold">
          Finger Crossed Fit
        </div>
      </div>
      <Icon name="mdi:menu" className="size-6 bg-neutral-700"></Icon>
    </div>
  );
};

export default Navbar;
