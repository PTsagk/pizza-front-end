import * as React from "react";
import { Component } from "react";
import MyDropdown from "../Dropdown/MyDropdown";
import MyDropdownOption from "../Dropdown/MyDropdownOption";
import "./AdminForm.css";
import { styles } from "../../statics/styles";
import axios from "axios";
import { useProductContext } from "../../Context/productsContext";
import { pizzaTypes } from "../../statics/texts";

function AdminPizzaForm({ closeForm }) {
  const { ingredients } = useProductContext();

  const [categoryValue, setCategoryValue] = React.useState("Classic");
  const [categoryDisplay, setCategoryDisplay] = React.useState("Classic");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const imageRef = React.useRef(null);
  const [ingredientsMap, setIngredientsMap] = React.useState<
    Map<string, boolean>
  >(new Map());
  const [errors, setErrors] = React.useState({
    name: "",
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
    if (!name) {
    }
    let formData = new FormData();
    if (!imageRef.current) return;
    formData.append("file", imageRef.current);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", categoryValue);
    formData.append("description", description);
    for (const ingredient of Array.from(ingredientsMap.keys())) {
      formData.append("ingredients", ingredient);
    }

    axios
      .post(`${import.meta.env.VITE_API}/pizza`, formData)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }

  function handleCheckboxClick(id: string) {
    const tmpMap = new Map(ingredientsMap);
    if (tmpMap.has(id)) {
      tmpMap.delete(id);
    } else {
      tmpMap.set(id, true);
    }
    setIngredientsMap(tmpMap);
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
    // console.log(e.target.files[0].type);
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
          Category
        </label>
        <MyDropdown display={categoryDisplay}>
          {pizzaTypes.map((t) => (
            <MyDropdownOption
              value={t}
              display={t}
              setDropbox={(obj) => changeCategory(obj)}
            ></MyDropdownOption>
          ))}
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
      <div className="admin-form-inputs-c form-shadow">
        <label htmlFor="product-price" className="admin-form-label">
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
                  onClick={() => handleCheckboxClick(ingredient.id)}
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
        <label htmlFor="product-price" className="admin-form-label">
          Image
        </label>
        <input
          onChange={(e) => handleFileInput(e)}
          type="file"
          id="product-price"
          accept="image/*"
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

export default AdminPizzaForm;
