import React from "react";
import { useDispatch } from "react-redux";
import { addColumnsTask } from "../../../state/slices/columnsSlices";

interface IProps {
  id: number
}

export const ButtonAddTask: React.FC<IProps> = ({id}) => {
  const dispatch = useDispatch();

  const handlerAddTask = () => {
    dispatch(addColumnsTask(id))
  }
  return (
    <button onClick={handlerAddTask}>add</button>
  )
}
