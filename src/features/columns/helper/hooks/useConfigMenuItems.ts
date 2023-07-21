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
      name: 'Копировать список', onClick: handlerCopyColumn,
    },
    {
      name: 'Удалить список', onClick: handlerDeleteColumn,
    },
  ]
}
