import React from "react";
import { IColumnsSlices } from "../libs";
import { ContainerColumn } from "shared/Column";
import { ComponentCreatingTasks, HeaderColumn, TasksColumn } from "features/columns";


export const ColumnItem: React.FC<IColumnsSlices> = (props) => {

  return (
    <ContainerColumn>
      <HeaderColumn {...props}/>
      <TasksColumn tasks={props.tasks}/>
      <ComponentCreatingTasks id={props.id} tasks={props.tasks}/>
    </ContainerColumn>
  )
}
