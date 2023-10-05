import { createStore } from "redux";
import RootReducer from "./redux/reducer/RootReducer";

const Store = createStore(RootReducer);

export default Store;
