import { useDispatch } from "react-redux";
import { addColumns } from "@state/slices/columnsSlices";
import { AddColumnButton } from "@style/column";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const AddColumn = () => {
  const dispatch = useDispatch();

  const handlerAddColumn = () => {
    dispatch(addColumns())
  }

  return (
    <AddColumnButton onClick={handlerAddColumn}>
      <AddCircleOutlineIcon/>
    </AddColumnButton>
  )
}
