import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { useHeaderMenuItem } from "../../helper";
import { IColumnsSlices } from "widgets/";

interface IProps {
  setAnchorEl: (item: null | HTMLElement) => void;
  anchorEl: null | HTMLElement
}

export const ColumnMenu: React.FC<IProps & IColumnsSlices> = (
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
