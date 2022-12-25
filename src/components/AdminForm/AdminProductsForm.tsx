import * as React from "react";
import { Component } from "react";
import MyDropdown from "../Dropdown/MyDropdown";
import MyDropdownOption from "../Dropdown/MyDropdownOption";
import "./AdminForm.css";
import { styles } from "../../statics/styles";
import axios from "axios";
import { useProductContext } from "../../Context/productsContext";
import { pizzaTypes } from "../../statics/texts";
import { MdAttachFile, MdOutlineFileDownloadDone } from "react-icons/md";

function AdminProductsForm({ closeForm, formType }) {
  const { ingredients } = useProductContext();

  const [typeValue, setTypeValue] = React.useState("Drink");
  const [typeDisplay, setTypeDisplay] = React.useState("Drink");
  const [categoryValue, setCategoryValue] = React.useState("Classic");
  const [categoryDisplay, setCategoryDisplay] = React.useState("Classic");

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [ingredientsMap, setIngredientsMap] = React.useState<
    Map<string, boolean>
  >(new Map());

  const [errors, setErrors] = React.useState({
    name: "",
    price: "",
    ingredients: "",
    image: "",
    show: false,
  });

  function changeCategory(object: { value: string; display: string }) {
    setCategoryValue(object.value);
    setCategoryDisplay(object.display);
  }

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    if (formType == "pizza") submitPizzaProduct();
    else submitOthersProduct();
  }

  function verifyInputs(name, price, image, ingredients) {
    const tmpErrors = {
      name: "",
      price: "",
      ingredients: "",
      image: "",
      show: false,
    };
    if (!image) {
      tmpErrors.image = "Please provide an image";
      tmpErrors.show = true;
    }
    if (ingredients && Array.from(ingredients.values()).length < 1) {
      tmpErrors.ingredients = "Please provide atleast 1 ingredient";
      tmpErrors.show = true;
    }
    if (!name) {
      tmpErrors.name = "Please provide a name";
      tmpErrors.show = true;
    }
    if (!price) {
      tmpErrors.price = "Please provide a price";
      tmpErrors.show = true;
    }
    setErrors(tmpErrors);
    return tmpErrors.show;
  }

  function submitPizzaProduct() {
    if (verifyInputs(name, price, image, ingredientsMap)) return;

    let formData = new FormData();
    if (!image) return;
    formData.append("file", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", categoryValue);
    formData.append("description", description);
    for (const ingredient of Array.from(ingredientsMap.keys())) {
      formData.append("ingredients", ingredient);
    }

    axios
      .post(`${import.meta.env.VITE_API}/pizza`, formData)
      .then((res) => window.location.reload())
      .catch((e) => console.log(e));
  }

  function submitOthersProduct() {
    if (verifyInputs(name, price, image, null)) return;
    let formData = new FormData();
    if (!image) return;
    formData.append("file", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("type", typeValue);
    formData.append("description", description);

    axios
      .post(`${import.meta.env.VITE_API}/product`, formData)
      .then((res) => window.location.reload())
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
    const regexTest = /[^a-zA-Z\s0-9]/;
    if (!regexTest.test(str)) setName(str);
  }
  function handlePriceChange(str: string) {
    const regexTest = /^-?\d+(?:[.,]\d{1,2}?)?$/;
    // const regexTest = /[0-9]*(?=[.,][0-9]{1,2}?)?$/;
    if (regexTest.test(str) || !str) setPrice(str);
  }
  function handleDescriptionChange(str: string) {
    setDescription(str);
  }
  function handleFileInput(e) {
    setImage(e.target.files[0]);
  }

  function changeType(object: { value: string; display: string }) {
    setTypeValue(object.value);
    setTypeDisplay(object.display);
  }
  return (
    <form className="bg-white p-5 font-outfit font-bold w-[600px]">
      <div className="flex flex-col mb-[20px]">
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
        {errors.name && (
          <div className="error-input-message form-shadow">{errors.name}</div>
        )}
      </div>
      {formType == "pizza" && (
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
      )}
      {formType == "other" && (
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
      )}
      <div className="flex flex-col mb-[20px]">
        <div className="admin-form-inputs-c form-shadow">
          <label htmlFor="product-price" className="admin-form-label">
            Price
          </label>
          <input
            type="number"
            id="product-price"
            value={price}
            onChange={(e) => handlePriceChange(e.target.value)}
            className="admin-form-inputs number-input"
          />
        </div>
        {errors.price && (
          <div className="error-input-message form-shadow">{errors.price}</div>
        )}
      </div>
      <div className="admin-form-inputs-c form-shadow mb-[20px]">
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
      {formType == "pizza" && (
        <div className="admin-form-inputs-c form-shadow mb-[20px]">
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
      )}
      <div className="flex flex-col mb-[20px]">
        <div className="form-shadow overflow-hidden w-[100%] flex">
          <label
            htmlFor="product-image"
            className="file-input-label flex items-center justify-center"
          >
            <div className={`${image ? "noscale" : "fullscale"}`}>
              <MdAttachFile />
            </div>
            <div className={`${image ? "fullscale" : "noscale"}`}>
              <MdOutlineFileDownloadDone />
            </div>
          </label>
          <input
            onChange={(e) => handleFileInput(e)}
            type="file"
            id="product-image"
            accept="image/*"
            className="admin-form-file-input"
          />
        </div>
        {errors.image && (
          <div className="error-input-message form-shadow">{errors.image}</div>
        )}
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

export default AdminProductsForm;
