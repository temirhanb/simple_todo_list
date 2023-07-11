import { useDispatch } from "react-redux";
import { AddColumnButton } from "../../../style/column";
import { addColumns } from "../../../state/slices/columnsSlices";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const AddColumn = () => {
  const dispatch = useDispatch();

  const handlerAddColumn = () => {
    dispatch(addColumns())
  }

  return (
    <AddColumnButton onClick={handlerAddColumn}>
      <AddCircleOutlineIcon color={'success'}/>
    </AddColumnButton>
  )
}
