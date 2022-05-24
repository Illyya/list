<template>
  <li class="list__item">
    <div class="list__cell">{{ item.id }}</div>
    <div class="list__cell">{{ item.name }}</div>
    <div class="list__cell">{{ item.description }}</div>
    <div class="list__cell">{{ item.note }}</div>
    <div class="list__cell">
      <router-link :to="{ name: 'Create', params: { itemEdit: item } }">Редактировать</router-link>
    </div>
    <div class="list__cell">
      <button @click="$emit('remove')" class="form__button button">Удалить</button>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ListItem',

  props: {
    item: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    },
  },
})
</script>