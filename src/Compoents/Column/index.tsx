import { ContainerColumn, HeaderColumn, HeaderColumnIconGear, HeaderColumnTitle } from "../../style/column";

export const ColumnItem = () => {
  return (
    <ContainerColumn>
      <HeaderColumn>
        <HeaderColumnTitle>
          Колонка 1
        </HeaderColumnTitle>
        <HeaderColumnIconGear src={'./icons/gear.svg'}/>
      </HeaderColumn>
    </ContainerColumn>
  )
}
