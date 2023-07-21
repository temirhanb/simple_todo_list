import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editNameColumns } from "widgets";

interface IProps {
  id: string;
  name: string
}

export const useEditColumnName = ({id, name}: IProps) => {

  const dispatch = useDispatch();

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Название списка слишком короткое')
      .max(150, 'Название списка слишком длинное')
      .required('Введите название списка'),
  });

  const editColumnName = useFormik({
    initialValues: {
      name: name,
    },
    validationSchema: validation,
    onSubmit: (values, actions) => {
      dispatch(editNameColumns({id, name: values.name}))
    },
  });

  return {
    editColumnName,
  }
}
