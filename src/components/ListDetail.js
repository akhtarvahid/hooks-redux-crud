import React from "react";
import { useParams } from "react-router-dom";
import { lists } from "../actions/crudActions";
import Header from "./Header";

function ListDetails() {
  let slug = useParams();

  const found = lists.filter(list => list.id === Number(slug.id));

  return (
    <div>
      ListDetails
    </div>
  );
}

export default ListDetails;
