import styled from "@emotion/styled";
import SettingsIcon from '@mui/icons-material/Settings';

export const ContainerColumn = styled.div`
  display: flex;
  width: 390px;
  height: auto;
  background: #282828;
  border-radius: 30px;
  margin: 5px;
`

export const ContainerHeaderColumn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const HeaderColumnTitle = styled.div`
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  color: #F4F4F4;
  margin: 13px 0 0 37px;
`
export const HeaderColumnIconGear = styled(SettingsIcon)`
  width: 30px;
  margin: 21px 37px 0 0;
  height: 30px;
`

export const AddColumnButton = styled.div`
  width: 10vw;
  height: auto;
  margin: 5px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #b0b0b0;
  }
`
