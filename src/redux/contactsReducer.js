import { addContact, deleteContact } from "./actions";

const initialState = {
  items: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact.type:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case deleteContact.type:
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };

    // case searchContact.type:
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};
