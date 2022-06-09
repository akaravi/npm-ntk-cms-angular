export class ItemState<TcClass> {
  item: TcClass;
  actionStart = false;
  actionEnd = false;
  status: string;
  message: string;
}
