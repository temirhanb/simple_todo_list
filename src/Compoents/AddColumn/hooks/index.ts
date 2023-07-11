import { useDispatch } from "react-redux";
import { addColumns } from "@state/slices/columnsSlices";

export const useHandlerAddColumns = () => {
  const dispatch = useDispatch();

  return () => {
    dispatch(addColumns())
  };
}
