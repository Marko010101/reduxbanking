import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import accountReducer from "./features/accounts/accountSlice.js";
import customerReducer from "./features/customers/customersSlice.js";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// Allowed Redux to use Middleware thunk
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
