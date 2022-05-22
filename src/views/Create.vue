<template>
  <div class="create">
    <div class="create__top">
      <span @click="goBack" class="create__back">&#8592;</span>

      <h1 class="create__title-h-1 title-h-1">{{ itemEdit ? 'Редактирование' : 'Создание' }}</h1>
    </div>

    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(action)" class="create__form form">
        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          class="form__field"
        >
          <input
            v-model.trim="item.name"
            placeholder="Наименование"
            class="form__input"
          >
          <span class="form__error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          class="form__field"
        >
          <input
            v-model.trim="item.description"
            placeholder="Описание"
            class="form__input"
          >
          <span class="form__error">{{ errors[0] }}</span>
        </ValidationProvider>

        <span class="form__field">
          <input
            v-model.trim="item.note"
            placeholder="Заметка"
            class="form__input"
          >
        </span>

        <button class="form__button button" >{{ itemEdit ? 'Редактировать' : 'Создать' }}</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex';

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'Поле обязательное для заполнения'
});

export default Vue.extend({
  name: 'Create',

  props: {
    itemEdit: {
      type: Object,
      required: false
    },
  },

  components: {
    ValidationProvider,
    ValidationObserver
  },

  data() {
    return {
      item: {
        name: null,
        description: null,
        note: null,
        id: null
      }
    }
  },

  computed: {
    ...mapGetters(['maxId']),
    form(): Vue & { reset: () => boolean } {
      return this.$refs.form as Vue & { reset: () => boolean }
    }
  },

  created () {
    if (this.itemEdit) {
      this.item = this.itemEdit;
    }
  },

  methods: {
    ...mapMutations(['ADD_ITEM', 'EDIT_ITEM']),
    action() {
      if (this.itemEdit) {
        this.editItem();
      } else {
        this.addItem();
      }
    },
    addItem() {
      this.item.id = this.maxId + 1;

      this.ADD_ITEM(this.item);

      this.item = {
        name: null,
        description: null,
        note: null,
        id: null
      }

      this.form.reset();
    },
    editItem() {
      this.EDIT_ITEM(this.item);
      this.$router.push('/');
    },
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/list');
    }
  },
})
</script>

<style lang="scss">
.create {
  &__top {
    position: relative;
    margin-bottom: 50px;
  }

  &__back {
    position: absolute;
    left: 0;
    top: 50%;
    font-size: 24px;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>