import React from "react";
import { ContainerColumn, HeaderColumn, HeaderColumnIconGear, HeaderColumnTitle } from "../../style/column";

interface IProps {
  id: number;
  name: string;
  title: string
}

export const ColumnItem: React.FC<IProps> = ({name}) => {

  return (
    <ContainerColumn>
      <HeaderColumn>
        <HeaderColumnTitle>
          {name}
        </HeaderColumnTitle>
        <HeaderColumnIconGear src={'./icons/gear.svg'}/>
      </HeaderColumn>
    </ContainerColumn>
  )
}
