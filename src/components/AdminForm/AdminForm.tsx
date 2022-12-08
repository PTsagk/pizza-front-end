import * as React from "react";
import { Component } from "react";
import MyDropdown from "../Dropdown/MyDropdown";
import MyDropdownOption from "../Dropdown/MyDropdownOption";
import "./AdminForm.css";
import { styles } from "../../statics/styles";
import axios from "axios";
import { useProductContext } from "../../Context/productsContext";

function AdminForm({ closeForm }) {
  const { ingredients } = useProductContext();

  const [categoryValue, setCategoryValue] = React.useState("Other");
  const [categoryDisplay, setCategoryDisplay] = React.useState("Other");
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const imageRef = React.useRef(null);
  const [errors, setErrors] = React.useState({
    title: "",
    price: "",
    description: "",
    ingredients: "",
    image: null,
    show: false,
  });

  function changeCategory(object: { value: string; display: string }) {
    setCategoryValue(object.value);
    setCategoryDisplay(object.display);
  }

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    console.log(categoryValue);
    console.log(title);
    console.log(price);
    console.log(description);
    console.log(imageRef.current);
    if (!title) {
    }
    // axios
    //   .post(`${import.meta.env.VITE_API}/pizza`, {
    //     title,
    //     price,
    //     description,
    //     image: imageRef,
    //     category: categoryValue,
    //   })
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
  }

  function handleTitleChange(str: string) {
    const regexTest = /[^a-zA-Z0-9\s]/;
    if (!regexTest.test(str)) setTitle(str);
  }
  function handlePriceChange(str: string) {
    const regexTest = /[^0-9\.\,]/;
    if (!regexTest.test(str)) setPrice(str);
  }
  function handleDescriptionChange(str: string) {
    setDescription(str);
  }
  function handleFileInput(e) {
    console.log(e.target.files[0].type);
    imageRef.current = e.target.files[0];
  }

  return (
    <form className="bg-white p-5 font-outfit font-bold">
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
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="text-black w-[100%] font-normal px-3 outline-none"
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
          value={price}
          onChange={(e) => handlePriceChange(e.target.value)}
          className="text-black w-[100%] font-normal px-3 outline-none"
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
          value={description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
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
        <div className="flex w-[100%] justify-center">
          <ul
            className={`overflow-y-auto h-[100px] 
          ingredient-list`}
          >
            {ingredients?.map((ingredient) => (
              <li key={ingredient.id} className={`${styles.flexRow} w[100%]`}>
                <input
                  type="checkbox"
                  id={ingredient.ingredient.replace(" ", "-")}
                  name="ingredient"
                />
                <label
                  className="ml-1"
                  htmlFor={ingredient.ingredient.replace(" ", "-")}
                >
                  {ingredient.ingredient}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center form-shadow overflow-hidden rounded-[2px] mb-7">
        <label
          htmlFor="product-price"
          className="text-white bg-primary px-5
        py-2"
        >
          Image
        </label>
        <input
          onChange={(e) => handleFileInput(e)}
          type="file"
          id="product-price"
          className="text-black font-normal px-3 outline-none"
        />
      </div>
      <div className={`${styles.flexRow} w[100%]`}>
        <button
          type="submit"
          onClick={submitForm}
          className="bg-black text-white text-[20px] w-[195px] h-[55px] form-submit-button"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => closeForm()}
          className="bg-black text-white text-[20px] w-[195px] h-[55px] form-submit-button ml-3"
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default AdminForm;
