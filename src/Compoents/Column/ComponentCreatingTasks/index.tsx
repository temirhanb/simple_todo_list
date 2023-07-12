import React from "react";
import { useDispatch } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { TasksAddButton } from "../../../style/column";
import { useFormik } from "formik";

interface IProps {
  id: string
}

export const ComponentCreatingTasks: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const createTasks = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handlerAddTask = () => {
    // dispatch(addColumnsTask(id))
  }

  return (
    <TasksAddButton onClick={handlerAddTask}>
      <AddCircleOutlineIcon/>
      <span>Добавить задачу</span>
    </TasksAddButton>
  )
}
