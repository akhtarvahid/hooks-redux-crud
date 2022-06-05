import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Header from "./Header";

function ListDetails() {
  const location = useLocation();
  let slug = useParams();
  let history = useNavigate();

  console.log(location, slug, history);
  return (
    <div>
      <Header />
      ListDetails
    </div>
  );
}

export default ListDetails;
