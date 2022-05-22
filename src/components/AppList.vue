<template>
  <ul class="list">
    <li class="list__item">
      <div class="list__cell">id</div>
      <div
        @click="sort"
        title="Сортировать"
        class="list__cell list__cell--name"
      >
        Наименование
      </div>
      <div class="list__cell">Описание</div>
      <div class="list__cell">Заметка</div>
    </li>

    <li
      v-for="item in list"
      :key="item.id"
      class="list__item"
    >
      <div class="list__cell">{{ item.id }}</div>
      <div class="list__cell">{{ item.name }}</div>
      <div class="list__cell">{{ item.description }}</div>
      <div class="list__cell">{{ item.note }}</div>
      <div class="list__cell">
        <router-link :to="{ name: 'Create', params: { itemEdit: item } }">Редактировать</router-link>
      </div>
      <div class="list__cell">
        <button @click="remove(item.id)" class="form__button button">Удалить</button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'AppList',

  data() {
    return {
      isSortAscending: false,
      isSortDescending: true,
    }
  },

  computed: {
    ...mapGetters(['list'])
  },

  methods: {
    ...mapMutations([
      'REMOVE_ITEM',
      'SORT_ASCENDING',
      'SORT_DESCENDING'
    ]),
    remove(idItem: number) {
      this.REMOVE_ITEM(idItem);
    },
    sort() {
      if (this.list.length) {
        if (this.isSortDescending) {
          this.SORT_ASCENDING();
          this.isSortAscending = true;
          this.isSortDescending = false;

          return;
        }

        if (this.isSortAscending) {
          this.SORT_DESCENDING();
          this.isSortDescending = true;
          this.isSortAscending = false;
        }
      }
    }
  },
})
</script>

<style lang="scss">
.list {
  display: table;
  border-collapse: collapse;

	&__item {
    display: table-row;

    &:first-of-type {
      text-align: center;
      font-weight: 500;
    }
  }

  &__cell {
    position: relative;
    padding: 10px 20px;
    display: table-cell;
    border: 1px solid rgb(193, 193, 193);

    &--name {
      cursor: pointer;
    }
  }
}
</style>