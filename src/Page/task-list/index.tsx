import * as React from "react";
import { useSelector } from "react-redux";

import { Layout } from "./styles";
import { ColumnItem } from "../../Compoents/Column";
import { RootState } from "../../app/providers/with-redux";
import { AddColumn } from "../../Compoents/Column/AddColumn";

export const TaskListPage: React.FC = () => {

  const columns = useSelector((state: RootState) => state.columns);

  return (
    <Layout>
      {columns.map((item) => <ColumnItem {...item} key={item.id}/>)}
      <AddColumn/>
    </Layout>
  )
}
