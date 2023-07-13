import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { IColumnsSlices } from "../../../state/slices/columnsSlices";
import { useHeaderMenuItem } from "./hook/useHeaderMenuItem";

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

  const {
    handlerEditColumn,
    handlerDeleteColumn,
    handleClose,
    handlerCopyColumn
  } = useHeaderMenuItem({
    setAnchorEl,
    id,
    name,
    tasks
  })

  return (
    <Menu
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
