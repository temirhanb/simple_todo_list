import { useDispatch } from "react-redux";
import { addColumns } from "../../state/slices/columnsSlices";

export const AddColumn = () => {
  const dispatch = useDispatch();

  const handlerAddColumn = () => {
    // @ts-ignore
    dispatch(addColumns(12))
  }

  return (
    <>
      <div onClick={handlerAddColumn}>
        add
      </div>
    </>
  )
}
