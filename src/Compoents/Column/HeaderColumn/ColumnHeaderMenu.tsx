import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { copyColumns, deleteColumns, editNameColumns, IColumnsSlices } from "../../../state/slices/columnsSlices";

interface IProps {
  setAnchorEl: (item: null | HTMLElement) => void;
  anchorEl: null | HTMLElement
}

export const ColumnHeaderMenu: React.FC<IProps & IColumnsSlices> = (
  {
    id,
    name,
    tasks,
    setAnchorEl,
    anchorEl
  }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlerDeleteColumn = () => {
    dispatch(deleteColumns(id))
    handleClose()
  }
  const handlerEditColumn = () => {
    dispatch(editNameColumns({id, name: 'test title'}))
    handleClose()
  }
  const handlerCopyColumn = () => {
    dispatch(copyColumns({id: id + 'copy', name: 'copy ' + name, tasks}))
    handleClose()
  }

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handlerEditColumn}>Изменить имя списка</MenuItem>
      <MenuItem onClick={handlerCopyColumn}>Копировать список</MenuItem>
      <MenuItem onClick={handlerDeleteColumn}>Удалить список</MenuItem>
    </Menu>
  )
}
