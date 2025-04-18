import { filterContacts } from "./actions";
const initialState = {
  text: "",
};
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterContacts.type:
      return {
        text: action.payload,
      };
    default:
      return state;
  }
};
