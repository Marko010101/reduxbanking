import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountSlice.js";
import customerReducer from "./features/customers/customersSlice.js";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
