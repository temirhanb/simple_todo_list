import { useDispatch } from "react-redux";
import { addColumns } from "../../../../state/slices/columnsSlices";

export const useAddColumn = () => {
  const dispatch = useDispatch();

  const handlerAddColumn = () => {
    dispatch(addColumns())
  }
  return {handlerAddColumn}
}
