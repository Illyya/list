interface Item {
  name: string,
  description: string,
  note: string,
  id: number
}

export interface RootState {
  isAuthorized: boolean,
  list: Array<Item>
}