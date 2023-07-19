import React from "react";
import { ContainerTasks, TaskItem } from "../../../../shared";

interface Props {
  tasks: Array<{ id: string, name: string }>
}

export const TasksColumn = ({tasks}: Props): JSX.Element => {

  return (
    <ContainerTasks>
      {tasks.map(item => <TaskItem key={item.id}>{item.name}</TaskItem>)}
    </ContainerTasks>
  )
}
