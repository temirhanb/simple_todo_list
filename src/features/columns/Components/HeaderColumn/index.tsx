import React from "react";
import { IColumnsSlices } from "widgets/columns";
import { ContainerHeaderColumn, HeaderColumnIconGear, HeaderColumnTitle } from "shared/Column";
import { ColumnMenu } from "../ColumnsMenu";


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
