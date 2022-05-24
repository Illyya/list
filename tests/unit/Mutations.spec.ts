import mutations from "@/store/mutations"

describe("ADD_ITEM", () => {
  it("Добавлет элемент в список", () => {
    const item = {
      name: 'Item',
      description: 'Description item',
      note: 'Note item',
      id: 1
    }

    const state = {
      isAuthorized: false,
      list: []
    }

    mutations.ADD_ITEM(state, item);

    expect(state).toEqual({
      isAuthorized: false,
      list: [{
        name: 'Item',
        description: 'Description item',
        note: 'Note item',
        id: 1
      }]
    })
  })
})