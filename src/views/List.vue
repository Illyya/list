<template>
  <div class="list-page">
    <h1 class="list-page__title-h-1 title-h-1">Список</h1>

    <AppList class="list-page__list"/>

    <router-link to="/create">Создать запись</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppList from '@/components/AppList/List.vue'

export default Vue.extend({
  name: 'List',

  components: {
    AppList
  },
})
</script>

<style lang="scss">
.list-page {

  &__title-h-1 {
    margin-bottom: 50px;
  }

  &__list {
    margin-bottom: 50px;
  }
}
</style>