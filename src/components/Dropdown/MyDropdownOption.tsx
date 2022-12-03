import * as React from "react";
import { Component } from "react";
interface IMyDropdownOption {
  value: string;
  display: string;
  setDropbox: (obj: { value: string; display: string }) => void;
}
function MyDropdownOption({ value, display, setDropbox }: IMyDropdownOption) {
  return (
    <button
      type="button"
      onClick={() =>
        setDropbox({
          value,
          display,
        })
      }
      className="dropbox-option"
    >
      {display}
    </button>
  );
}

export default MyDropdownOption;
