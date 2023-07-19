import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useAddColumn } from "../../helper";
import { AddColumnButton } from "shared/Column";

export const AddColumn = () => {

  const {handlerAddColumn} = useAddColumn();

  return (
    <AddColumnButton onClick={handlerAddColumn}>
      <AddCircleOutlineIcon/>
      <span>Добавить колонку</span>
    </AddColumnButton>
  )
}
