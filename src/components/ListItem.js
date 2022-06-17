import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ListItem({ lists, editHandler }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action </th>
          <th style={{ display: "flex" }}>
            <span>All</span>
            <Form.Check type="checkbox" />
          </th>
        </tr>
      </thead>
      <tbody>
        {lists &&
          lists.map((list) => (
            <tr key={list.id}>
              <td>
                <Link to={`detail/${list.id}`}>{list.id}</Link>
              </td>
              <td>{list.title}</td>
              <td>{list.description}</td>
              <td>
                <FaEdit style={editStyle} onClick={() => editHandler(list)} />
                <MdDelete style={deleteStyle} />
              </td>
              <td>
                <Form.Check type="checkbox" />
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default ListItem;
const editStyle = {
  fontSize: 22,
  color: "#5fd466",
  marginRight: 10,
  cursor: "copy"
};
const deleteStyle = {
  fontSize: 22,
  color: "red",
  cursor: "pointer"
};
