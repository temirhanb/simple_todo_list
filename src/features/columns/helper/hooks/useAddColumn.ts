import { useDispatch } from "react-redux";
import { addColumns } from "../../../../widgets";

export const useAddColumn = () => {
  const dispatch = useDispatch();

  const handlerAddColumn = () => {
    dispatch(addColumns())
  }
  return {handlerAddColumn}
}
