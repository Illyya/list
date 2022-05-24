import { mount } from '@vue/test-utils'
import ListItem from '@/components/AppList/ListItem.vue'

describe('ListItem.vue', () => {
  it('Проверка входящего параметра', () => {
    const wrapper = mount(ListItem, {
      propsData: {
        item: {
          id: 1,
          name: 'Item',
          description: 'Description item',
          note: 'Note item'
        }
      }
    })

    console.log(wrapper.html())
  })
})
