import * as React from "react";
import { useSelector } from "react-redux";

import { ColumnItem } from "../../Compoents/Column";
import { RootState } from "../../app/providers/with-redux";
import { AddColumn } from "../../Compoents/Column/AddColumn";
import { Layout } from "./styles";

export const TaskListPage: React.FC = () => {

  const columns = useSelector((state: RootState) => state.columns);

  return (
    <Layout>
      {columns.map((item) => <ColumnItem {...item} key={item.id}/>)}
      <AddColumn/>
    </Layout>
  )
}
