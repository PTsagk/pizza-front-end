import * as React from "react";
import { Component } from "react";
import AdminForm from "../../components/AdminForm/AdminForm";
import { Link } from "react-router-dom";
import AdminPizzaList from "../../components/AdminPizzaList/AdminPizzaList";
import AdminOthersForm from "../../components/AdminForm/AdminOthersForm";

function AdminProducts() {
  const [formActive, setFormActive] = React.useState("");
  return (
    <div
      className="w-[100%] min-h-[100vh] relative
    flex flex-col justify-center items-center pizza-bg"
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
      <ul className="flex flex-col bg-black p-10">
        <AdminPizzaList activateForm={() => setFormActive("pizza")} />
      </ul>
      <div className={`absolute ${!formActive && "hidden"}`}>
        {formActive == "pizza" && (
          <AdminForm closeForm={() => setFormActive("")} />
        )}
        {formActive == "other" && (
          <AdminOthersForm closeForm={() => setFormActive("")} />
        )}
      </div>
    </div>
  );
}

export default AdminProducts;
