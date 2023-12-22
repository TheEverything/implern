import React from "react";

interface Props {
  className: string;
}

function Navbar({ className }: Props) {
  return (
    <div className={className}>
      <div className="top-0 left-0 right-0 fixed flex flex-col justify-center items-center z-1 ">Navbar</div>
    </div>
  );
}

export default Navbar;
