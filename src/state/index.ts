import { configureStore } from "@reduxjs/toolkit";
import columnsSlices from './slices/columnsSlices'

export default configureStore({
  reducer: {
    columns: columnsSlices
  }
})
