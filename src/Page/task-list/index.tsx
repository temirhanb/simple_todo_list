import * as React from "react";
import { useSelector } from "react-redux";

import { ColumnItem } from "widgets/columns";
import { RootState } from "app/providers/with-redux";
import { AddColumn } from "features/columns";

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
