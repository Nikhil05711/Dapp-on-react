import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducer/Index";

const store = configureStore({ rootReducer });

export default store;
