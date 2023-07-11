import React from "react";
import { ContainerColumn } from "../../style/column";
import { HeaderColumn } from "./HeaderColumn";

interface IProps {
  id: number;
  name: string;
}

export const ColumnItem: React.FC<IProps> = (props) => {

  return (
    <ContainerColumn>
      <HeaderColumn
        {...props}
      />
    </ContainerColumn>
  )
}
