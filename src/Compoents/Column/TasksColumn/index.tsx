import React from "react";
import { ContainerTasks, TaskItem } from "../../../style/column";

interface Props {
  tasks: Array<{ id: number, name: string }>
}

export const TasksColumn = ({tasks}: Props): JSX.Element => {

  return (
    <ContainerTasks>
      {tasks.map(item => <TaskItem>{item.name}</TaskItem>)}
    </ContainerTasks>
  )
}
