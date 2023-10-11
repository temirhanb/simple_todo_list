import { WidgetContainer } from "../styles";

export const TaskWidget = ({name}: { name: string }) => {
  return (
    <WidgetContainer>tasks: {name}</WidgetContainer>
  )
}
