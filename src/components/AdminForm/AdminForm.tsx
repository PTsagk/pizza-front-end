import * as React from "react";
import { Component } from "react";
import MyDropdown from "../Dropdown/MyDropdown";
import MyDropdownOption from "../Dropdown/MyDropdownOption";
import "./AdminForm.css";
import { styles } from "../../statics/styles";

function AdminForm() {
  const [categoryValue, setCategoryValue] = React.useState("Other");
  const [categoryDisplay, setCategoryDisplay] = React.useState("Other");

  function changeCategory(object: { value: string; display: string }) {
    setCategoryValue(object.value);
    setCategoryDisplay(object.display);
  }

  return (
    <form action="" className="bg-white p-5 font-outfit font-bold">
      <div className="flex form-shadow overflow-hidden rounded-[2px] mb-7">
        <label
          htmlFor="product-name"
          className="text-white bg-primary px-5
        py-2"
        >
          Title
        </label>
        <input
          type="text"
          id="product-name"
          className="text-black font-normal px-3 outline-none"
        />
      </div>
      <div className="flex form-shadow rounded-[2px] mb-7">
        <label
          htmlFor="product-category"
          className="text-white bg-primary px-5
        py-2"
        >
          Category
        </label>
        <MyDropdown display={categoryDisplay}>
          <MyDropdownOption
            value={"vegan"}
            display={"Vegan"}
            setDropbox={(obj) => changeCategory(obj)}
          ></MyDropdownOption>
          <MyDropdownOption
            value={"meat"}
            display={"Meat Lover's"}
            setDropbox={(obj) => changeCategory(obj)}
          ></MyDropdownOption>
          <MyDropdownOption
            value={"other"}
            display={"Other"}
            setDropbox={(obj) => changeCategory(obj)}
          ></MyDropdownOption>
        </MyDropdown>
      </div>
      <div className="flex form-shadow overflow-hidden rounded-[2px] mb-7">
        <label
          htmlFor="product-price"
          className="text-white bg-primary px-5
        py-2"
        >
          Price
        </label>
        <input
          type="text"
          id="product-price"
          className="text-black font-normal px-3 outline-none"
        />
      </div>
      <div className="flex form-shadow overflow-hidden rounded-[2px] mb-7">
        <label
          htmlFor="product-description"
          className="text-white bg-primary px-5
        py-2"
        >
          Description
        </label>
        <textarea
          name="product-description"
          id="product-description"
          className="form-area"
          cols={60}
          rows={5}
        ></textarea>
      </div>
      <div className="flex form-shadow overflow-hidden rounded-[2px] mb-7">
        <label
          htmlFor="product-price"
          className="text-white bg-primary px-5
        py-2"
        >
          Ingredients
        </label>
        <ul
          className={`overflow-y-auto h-[100px] 
          ${styles.flexCol} w-[100%]`}
        >
          <li className={`${styles.flexRow} w[100%]`}>
            <input type="checkbox" id="mozzarella" />
            <label htmlFor="mozzarella">Mozzarella</label>
          </li>
        </ul>
      </div>
      <div className="flex form-shadow overflow-hidden rounded-[2px] mb-7">
        <label
          htmlFor="product-price"
          className="text-white bg-primary px-5
        py-2"
        >
          Image
        </label>
        <input
          type="file"
          id="product-price"
          className="text-black font-normal px-3 outline-none"
        />
      </div>
      <div className={`${styles.flexRow} w[100%]`}>
        <button className="bg-black text-white text-[20px] w-[195px] h-[55px] form-submit-button">
          Save
        </button>
      </div>
    </form>
  );
}

export default AdminForm;
