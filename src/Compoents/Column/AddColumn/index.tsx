import { AddColumnButton } from "../../../style/column";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useAddColumn } from "./hook/useAddColumn";

export const AddColumn = () => {

  const {handlerAddColumn} = useAddColumn();

  return (
    <AddColumnButton onClick={handlerAddColumn}>
      <AddCircleOutlineIcon/>
      <span>Добавить колонку</span>
    </AddColumnButton>
  )
}
