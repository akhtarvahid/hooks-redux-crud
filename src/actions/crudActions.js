import { LIST_ITEMS, ADD_ITEM, UPDATE_ITEM } from "../actions/types";
import { v4 as uuid } from "uuid";
let lists = [
  {
    id: uuid(),
    title: "javaScript",
    description: "Learn from documentation",
    completed: true
  },
  {
    id: uuid(),
    title: "Sass",
    description: "Learn from ",
    completed: false
  },
  {
    id: uuid(),
    title: "React",
    description: "Learn from react.js",
    completed: false
  },
  {
    id: uuid(),
    title: "Node",
    description: "Nodejs documentation",
    completed: false
  },
  {
    id: uuid(),
    title: "EcmaScript",
    description: "Learn from es6.org",
    completed: false
  }
];
export const getItems = () => {
  return {
    type: LIST_ITEMS,
    payload: lists
  };
};
export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
export const updateItem = item => {
  return {
    type: UPDATE_ITEM,
    payload: item
  };
};
