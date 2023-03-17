import { useContext } from "react";
import { CurrentUserContext } from "../../state/context";

export const AddColumn = () => {
  const context = useContext(CurrentUserContext);
  console.log(context)
  const handlerAddColumn = () => {
    context.addColumn()
  }

  return (
    <>
      <div onClick={handlerAddColumn}>
        add
      </div>
    </>
  )
}
