import React from "react";

import { ColumnMenu } from "../ColumnsMenu";
import { IColumnsSlices } from "widgets/";
import { ContainerHeaderColumn, HeaderColumnIconGear, InputBaseCustomStyle } from "shared/";
import { useEditColumnName } from "../../helper/hooks/useEditColumnName";

export const HeaderColumn: React.FC<IColumnsSlices> = (props) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const {editColumnName} = useEditColumnName({id: props.id, name: props.name})

  return (
    <ContainerHeaderColumn>
      <form
        onSubmit={editColumnName.handleSubmit}
        onBlur={editColumnName.handleSubmit}
      >
        <InputBaseCustomStyle
          id="name"
          onChange={editColumnName.handleChange}
          value={editColumnName.values.name}
        />
      </form>
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
