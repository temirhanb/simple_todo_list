import { ContainerHeaderColumn, HeaderColumnIconGear, HeaderColumnTitle } from "../../../style/column";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteColumns, editNameColumns } from "../../../state/slices/columnsSlices";
import { Menu, MenuItem } from "@mui/material";

interface IProps {
  id: number;
  name: string;
}

export const HeaderColumn: React.FC<IProps> = ({id, name}) => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <ContainerHeaderColumn>
      <HeaderColumnTitle>
        {name}
      </HeaderColumnTitle>
      <HeaderColumnIconGear
        onClick={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handlerEditColumn}>Изменить имя колонки</MenuItem>
        <MenuItem onClick={handlerDeleteColumn}>Удалить колонку</MenuItem>
      </Menu>
    </ContainerHeaderColumn>
  )
}
