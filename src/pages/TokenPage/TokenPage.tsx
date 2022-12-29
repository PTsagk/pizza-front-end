import axios from "axios";
import * as React from "react";
import { Component, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUxContext } from "../../Context/uxContext";
function TokenPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { setErrorMessage } = useUxContext();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/users/token/${params.token}`)
      .then((res) =>
        setErrorMessage((prev) => {
          const tmp = { ...prev };
          tmp.show = true;
          tmp.message = res.data;
          tmp.isError = false;
          return tmp;
        })
      )
      .catch((e) =>
        setErrorMessage((prev) => {
          const tmp = { ...prev };
          tmp.show = true;
          tmp.message = e.response.data;
          tmp.isError = true;
          return tmp;
        })
      )
      .finally(() => navigate("/"));
  }, []);
  return (
    <div
      className="w-[100vw] h-[100vh] bg-gradient-to-t
  from-primary to-linear_dark relative"
    ></div>
  );
}

export default TokenPage;
