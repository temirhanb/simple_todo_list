import { ReactElement } from "react";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

export type Props = {
  children: ReactChild
}
