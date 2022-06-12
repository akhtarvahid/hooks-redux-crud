import { LIST_ITEMS, ADD_ITEM, UPDATE_ITEM } from "../actions/types";
export let lists = [
  {
    id: 1,
    title: "javaScript",
    description: "Learn from documentation",
    completed: true
  },
  {
    id: 2,
    title: "Sass",
    description: "Learn from ",
    completed: false
  },
  {
    id: 3,
    title: "React",
    description: "Learn from react.js",
    completed: false
  },
  {
    id: 4,
    title: "Node",
    description: "Nodejs documentation",
    completed: false
  },
  {
    id: 5,
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
