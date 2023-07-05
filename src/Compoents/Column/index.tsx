import React from "react";
import { ContainerColumn, HeaderColumn, HeaderColumnIconGear, HeaderColumnTitle } from "../../style/column";
import { useDispatch } from "react-redux";
import { deleteColumns } from "../../state/slices/columnsSlices";

interface IProps {
  id: number;
  name: string;
  title: string
}

export const ColumnItem: React.FC<IProps> = ({id, name}) => {
  const dispatch = useDispatch();

  const handlerDeleteColumn = () => {
    dispatch(deleteColumns(id))
  }
  return (
    <ContainerColumn>
      <HeaderColumn>
        <HeaderColumnTitle>
          {name}
        </HeaderColumnTitle>
        <HeaderColumnIconGear
          onClick={handlerDeleteColumn}
          src={'./icons/gear.svg'}/>
      </HeaderColumn>
    </ContainerColumn>
  )
}
