import { useId } from "react";
import { useDispatch } from "react-redux";
import { copyColumns, deleteColumns, editNameColumns, IColumnsSlices } from "widgets/";

interface IProps {
  setAnchorEl: (item: null | HTMLElement) => void;
}

export const useHeaderMenuItem = (
  {
    setAnchorEl,
    id,
    name,
    tasks
  }: IProps & IColumnsSlices) => {

  const dispatch = useDispatch();

  const newId = useId()

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlerDeleteColumn = () => {
    dispatch(deleteColumns(id))
    handleClose()
  }

  const handlerCopyColumn = () => {
    dispatch(copyColumns({id: newId, name: 'copy ' + name, tasks}))
    handleClose()
  }

  return {
    handlerDeleteColumn,
    handlerCopyColumn,
    handleClose
  }
}
