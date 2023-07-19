import { useDispatch } from "react-redux";
import { useId, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { addColumnsTask } from "../../../../widgets";

interface IProps {
  id: string;
  tasks: Array<{ id: string, name: string }>
}

export const useCreatingTask = ({id, tasks}: IProps) => {
  const dispatch = useDispatch();

  const newId = useId()

  const [isOpenForm, setIsOpenForm] = useState(false)

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Название задачи слишком короткое')
      .max(150, 'Название задачи слишком длинное')
      .required('Введите название задачи'),
  });

  const createTasks = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: validation,
    onSubmit: (values, actions) => {

      const newTask = {id: newId, name: values.name}

      dispatch(addColumnsTask({id, tasks: [...tasks, newTask]}))

      createTasks.resetForm();

      setIsOpenForm(false);
    },
  });

  const handlerIsCloseForm = () => {
    createTasks.resetForm();
    setIsOpenForm(false)
  }
  const handlerIsOpenForm = () => {
    setIsOpenForm(true)
  }
  return {
    createTasks,
    isOpenForm,
    handlerIsOpenForm,
    handlerIsCloseForm,
  }
}
