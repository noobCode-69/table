export interface ColumnType<T> {
  title: string;
  dataIndex: string;
  render?: (data: any) => JSX.Element;
  sort?: (a: any, b: any) => boolean;
}
