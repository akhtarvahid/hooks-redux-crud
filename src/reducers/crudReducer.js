import { LIST_ITEMS, ADD_ITEM, UPDATE_ITEM } from "../actions/types";
let initialState = {
  lists: [],
  item: {}
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_ITEMS:
      return {
        ...state,
        lists: action.payload
      };
    case ADD_ITEM:
      return {
        ...state,
        lists: [...state.lists, action.payload],
        item: { ...state.item, loading: false }
      };
    case UPDATE_ITEM:
      let update = state.lists.map(list =>
        list.id === action.payload.id ? action.payload : list
      );
      return {
        ...state,
        lists: update,
        item: { ...state.item, loading: false }
      };
    default:
      return state;
  }
}
