import * as React from "react";
import { Component } from "react";
import MyDropdown from "../Dropdown/MyDropdown";
import MyDropdownOption from "../Dropdown/MyDropdownOption";
import "./AdminForm.css";
import { styles } from "../../statics/styles";
import axios from "axios";
import { useProductContext } from "../../Context/productsContext";

function AdminProductsForm({ closeForm }) {
  const [typeValue, setTypeValue] = React.useState("Drink");
  const [typeDisplay, setTypeDisplay] = React.useState("Drink");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const imageRef = React.useRef(null);
  const [errors, setErrors] = React.useState({
    name: "",
    price: "",
    description: "",
    image: null,
    show: false,
  });

  function changeType(object: { value: string; display: string }) {
    setTypeValue(object.value);
    setTypeDisplay(object.display);
  }

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    // console.log(categoryValue);
    // console.log(name);
    // console.log(price);
    // console.log(description);
    // console.log(imageRef.current);
    if (!imageRef.current) return;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("type", typeValue);
    formData.append("file", imageRef.current);
    console.log(formData);
    axios
      .post(`${import.meta.env.VITE_API}/product`, formData)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }

  function handleNameChange(str: string) {
    const regexTest = /[^a-zA-Z0-9\s]/;
    if (!regexTest.test(str)) setName(str);
  }
  function handlePriceChange(str: string) {
    const regexTest = /[^0-9\.\,]/;
    if (!regexTest.test(str)) setPrice(str);
  }
  function handleDescriptionChange(str: string) {
    setDescription(str);
  }
  function handleFileInput(e) {
    imageRef.current = e.target.files[0];
  }

  return (
    <form className="bg-white p-5 font-outfit font-bold">
      <div className="admin-form-inputs-c form-shadow">
        <label htmlFor="product-name" className="admin-form-label">
          Name
        </label>
        <input
          type="text"
          id="product-name"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          className="admin-form-inputs"
        />
      </div>
      <div className="flex form-shadow rounded-[2px] mb-7">
        <label htmlFor="product-category" className="admin-form-label">
          Product
        </label>
        <MyDropdown display={typeDisplay}>
          <MyDropdownOption
            value={"Drink"}
            display={"Drink"}
            setDropbox={(obj) => changeType(obj)}
          ></MyDropdownOption>
          <MyDropdownOption
            value={"Dessert"}
            display={"Dessert"}
            setDropbox={(obj) => changeType(obj)}
          ></MyDropdownOption>
          <MyDropdownOption
            value={"Appetizer"}
            display={"Appetizer"}
            setDropbox={(obj) => changeType(obj)}
          ></MyDropdownOption>
        </MyDropdown>
      </div>
      <div className="admin-form-inputs-c form-shadow">
        <label htmlFor="product-price" className="admin-form-label">
          Price
        </label>
        <input
          type="text"
          id="product-price"
          value={price}
          onChange={(e) => handlePriceChange(e.target.value)}
          className="admin-form-inputs"
        />
      </div>
      <div className="admin-form-inputs-c form-shadow">
        <label htmlFor="product-description" className="admin-form-label">
          Description
        </label>
        <textarea
          name="product-description"
          id="product-description"
          value={description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
          className="form-area"
          cols={60}
          rows={5}
        ></textarea>
      </div>

      <div className="flex items-center form-shadow overflow-hidden rounded-[2px] mb-7">
        <label htmlFor="product-price" className="admin-form-label">
          Image
        </label>
        <input
          onChange={handleFileInput}
          type="file"
          id="product-price"
          accept="image/*"
          className="text-black font-normal px-3 outline-none"
        />
      </div>
      <div className={`${styles.flexRow} w[100%]`}>
        <button
          type="submit"
          onClick={(e) => submitForm(e)}
          className="bg-black text-white text-[20px] w-[195px] h-[55px] form-submit-button"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => closeForm()}
          className="bg-black text-white text-[20px] 
          w-[195px] h-[55px] form-submit-button ml-3"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AdminProductsForm;
