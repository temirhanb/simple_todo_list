import { configureStore } from "@reduxjs/toolkit";
import columnsSlices from "../../widgets/columns/model/columnsSlices";

const store = configureStore({
  reducer: {
    columns: columnsSlices
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store;
