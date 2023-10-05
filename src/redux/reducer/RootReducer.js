import { combineReducers } from "redux";
import ContactReducer from "./ContactReducer";
const RootReducer = combineReducers({
  ContactReducer,
});

export default RootReducer;
