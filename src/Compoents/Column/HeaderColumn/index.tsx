import { ContainerHeaderColumn, HeaderColumnIconGear, HeaderColumnTitle } from "../../../style/column";
import React from "react";
import { IColumnsSlices } from "../../../state/slices/columnsSlices";
import { ColumnHeaderMenu } from "./ColumnHeaderMenu";


export const HeaderColumn: React.FC<IColumnsSlices> = (props) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <ContainerHeaderColumn>
      <HeaderColumnTitle>
        {props.name}
      </HeaderColumnTitle>
      <div
        onClick={handleClick}
      >
        <HeaderColumnIconGear/>
      </div>
      <ColumnHeaderMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        {...props}
      />
    </ContainerHeaderColumn>
  )
}
