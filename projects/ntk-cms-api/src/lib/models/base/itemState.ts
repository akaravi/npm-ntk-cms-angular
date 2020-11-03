export class ItemState<TcClass> {
  Item: TcClass;
  ActionStart = false;
  ActionEnd = false;
  Status: string;
  Message: string;
}
