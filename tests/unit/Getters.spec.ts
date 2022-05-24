import getters from "@/store/getters"

describe("maxId", () => {
  it("Максимальный id элемента из списка", () => {
    const list = [
      { name: 'Item', description: 'Description item', note: 'Note item', id: 1 },
      { name: 'Item', description: 'Description item', note: 'Note item', id: 2 },
      { name: 'Item', description: 'Description item', note: 'Note item', id: 3 },
      { name: 'Item', description: 'Description item', note: 'Note item', id: 4 },
    ]

    const state = {
      isAuthorized: false,
      list
    }

    const actual = getters.maxId(state, state, state, state);

    expect(actual).toEqual(4);
  })
})