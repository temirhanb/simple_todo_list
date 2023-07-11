import React from "react";
import { ContainerColumn } from "../../style/column";
import { HeaderColumn } from "./HeaderColumn";
import { TasksColumn } from "./TasksColumn";
import { IColumnsSlices } from "../../state/slices/columnsSlices";
import { ButtonAddTask } from "./ButtonAddTask";


export const ColumnItem: React.FC<IColumnsSlices> = (props) => {

  return (
    <ContainerColumn>
      <HeaderColumn
        name={props.name}
        id={props.id}

      />
      <TasksColumn
        tasks={props.tasks}>
      </TasksColumn>
      <ButtonAddTask id={props.id}/>
    </ContainerColumn>
  )
}
