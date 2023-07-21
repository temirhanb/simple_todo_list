import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { useConfigMenuItems, useHeaderMenuItem } from "../../helper";
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
    handleClose,
  } = useHeaderMenuItem({
    setAnchorEl,
    id,
    name,
    tasks
  });

  const menuItemsList = useConfigMenuItems({
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
      {menuItemsList.map(({name, onClick}, index) => (
        <MenuItem key={index} onClick={onClick}>{name}</MenuItem>
      ))}
    </Menu>
  )
}
