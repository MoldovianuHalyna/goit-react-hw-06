import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsReducer";

import { filterReducer } from "./filtersReducer";
export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
