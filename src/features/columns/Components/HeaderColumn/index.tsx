import React from "react";

import { ColumnMenu } from "../ColumnsMenu";
import { IColumnsSlices } from "../../../../widgets";
import { ContainerHeaderColumn, HeaderColumnIconGear, HeaderColumnTitle } from "../../../../shared";


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
      <ColumnMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        {...props}
      />
    </ContainerHeaderColumn>
  )
}
