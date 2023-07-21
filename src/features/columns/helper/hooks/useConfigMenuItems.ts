import { IColumnsSlices } from "widgets";
import { useHeaderMenuItem } from "./useHeaderMenuItem";

interface IProps {
  setAnchorEl: (item: null | HTMLElement) => void;
}

export const useConfigMenuItems = (
  {
    id,
    name,
    tasks,
    setAnchorEl,
  }: IProps & IColumnsSlices
) => {
  const {
    handlerEditColumn,
    handlerDeleteColumn,
    handlerCopyColumn
  } = useHeaderMenuItem({
    setAnchorEl,
    id,
    name,
    tasks
  })
  return [
    {
      name: 'Изменить имя списка', onClick: handlerEditColumn,
    },
    {
      name: 'Копировать список', onClick: handlerCopyColumn,
    },
    {
      name: 'Удалить список', onClick: handlerDeleteColumn,
    },
  ]
}
