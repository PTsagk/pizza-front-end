import * as React from "react";
import { Component } from "react";
import "./MyDropdown.css";
function MyDropdown({ display, children }) {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      if (isActive) {
        window.addEventListener("click", handleWindowClick);
      } else {
        window.removeEventListener("click", handleWindowClick);
      }
    }, 0);

    return () => window.removeEventListener("click", handleWindowClick);
  }, [isActive]);

  function handleWindowClick() {
    setIsActive(false);
  }

  return (
    <div className="flex flex-col relative justify-center overflow-visible items-center w-[100%]">
      <button
        type="button"
        className=""
        onClick={() => setIsActive((prev) => !prev)}
      >
        {display}
      </button>
      <div
        className={`flex flex-col justify-center absolute
            items-center top-[100%] bg-white w-[100%] border
          ${!isActive && "hidden"} dropdown-list`}
      >
        {children}
      </div>
    </div>
  );
}

export default MyDropdown;
