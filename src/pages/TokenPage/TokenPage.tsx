import axios from "axios";
import * as React from "react";
import { Component, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function TokenPage() {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/users/token/${params.token}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  }, []);
  return <div></div>;
}

export default TokenPage;
