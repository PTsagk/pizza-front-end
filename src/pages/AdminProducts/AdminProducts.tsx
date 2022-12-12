import * as React from "react";
import { Component } from "react";
import AdminProductsForm from "../../components/AdminForm/AdminProductsForm";
import { Link } from "react-router-dom";
import AdminPizzaList from "../../components/AdminLists/AdminPizzaList";
import AdminDrinksList from "../../components/AdminLists/AdminDrinksList";
import AdminDessertsList from "../../components/AdminLists/AdminDessertsList";

function AdminProducts() {
  const [formActive, setFormActive] = React.useState("");
  return (
    <div
      className="w-[100%] min-h-[100vh] relative
    flex flex-col justify-center items-center pizza-bg p-5"
    >
      <div className="mt-[10%] bg-white rounded-[5px] overflow-hidden">
        <Link
          to={"./products"}
          className="button bg-primary text-white px-4 text-[32px]"
        >
          Products
        </Link>
        <Link
          to={"./orders"}
          className="button bg-black text-white px-4 text-[32px]"
        >
          Orders
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col bg-black p-10">
          <AdminPizzaList activateForm={() => setFormActive("pizza")} />
        </div>
        <div className="flex flex-col bg-black p-10">
          <AdminDrinksList activateForm={() => setFormActive("other")} />
        </div>
        <div className="flex flex-col bg-black p-10">
          <AdminDessertsList activateForm={() => setFormActive("other")} />
        </div>
      </div>
      <div
        className={`fixed z-40 top-0 auth-bg flex items-center justify-center w-[100%] h-[100%] ${
          !formActive && "hidden"
        }`}
      >
        {formActive && (
          <AdminProductsForm
            closeForm={() => setFormActive("")}
            formType={formActive}
          />
        )}
      </div>
    </div>
  );
}

export default AdminProducts;
