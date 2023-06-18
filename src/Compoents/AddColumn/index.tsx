import { useDispatch } from "react-redux";
import { addColumns } from "../../state/slices/columnsSlices";

export const AddColumn = () => {
  const dispatch = useDispatch();

  const handlerAddColumn = () => {
    dispatch(addColumns())
  }

  return (
    <>
      <div onClick={handlerAddColumn}>
        add
      </div>
    </>
  )
}
