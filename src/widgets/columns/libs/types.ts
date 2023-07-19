export interface ITasks {
  id: string,
  name: string
}

export interface IColumnsSlices {
  id: string;
  name: string;
  tasks: Array<ITasks>
}
