import styled from "@emotion/styled";
import SettingsIcon from '@mui/icons-material/Settings';

export const ContainerColumn = styled.div`
  display: flex;
  width: 390px;
  background: #101204;
  border-radius: 30px;
  max-height: 100%;
  height: max-content;
  position: relative;
  margin: 5px;
  flex-direction: column;
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
  width: 30vw;
  height: 56px;
  margin: 5px;
  border-radius: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #706f6f;
  padding: 0 20px;

  &:hover {
    background: #b0b0b0;
  }
`

export const ContainerTasks = styled.div`
  margin: 20px;
  max-width: 100%;
  height: auto;
`

export const TaskItem = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  background: #22272b;
`

export const TasksAddButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 20px;
  width: max-content;

  &:hover {
    background: #22272b;
  }
`
