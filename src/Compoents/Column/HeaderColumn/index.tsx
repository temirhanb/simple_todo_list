import { ContainerHeaderColumn, HeaderColumnIconGear, HeaderColumnTitle } from "../../../style/column";
import React from "react";
import { useDispatch } from "react-redux";
import { copyColumns, deleteColumns, editNameColumns, IColumnsSlices } from "../../../state/slices/columnsSlices";
import { Menu, MenuItem } from "@mui/material";


export const HeaderColumn: React.FC<IColumnsSlices> = ({id, name, tasks}) => {
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
  const handlerCopyColumn = () => {
    dispatch(copyColumns({id: id + 'copy', name: 'copy ' + name, tasks}))
    handleClose()
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <ContainerHeaderColumn>
      <HeaderColumnTitle>
        {name}
      </HeaderColumnTitle>
      <div
        onClick={handleClick}
      >
        <HeaderColumnIconGear/>
      </div>
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
    </ContainerHeaderColumn>
  )
}
