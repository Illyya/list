import store from "@/store"

describe("ADD_ITEM", () => {
  it("добавляем элемент в список", () => {
    const item = {
      name: 'Item',
      description: 'Description item',
      note: 'Note item',
      id: 1
    }

    const state = {
      list: []
    }

    store.commit('ADD_ITEM', item);

    expect(state).toEqual({
      list: [{
        name: 'Item',
        description: 'Description item',
        note: 'Note item',
        id: 1
      }]
    })
  })
})