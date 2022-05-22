<template>
  <div class="login">
    <h1 class="login__title-h-1 title-h-1">Вход</h1>

    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(logIn)" class="login__form form">
        <ValidationProvider
          rules="is:admin|required"
          v-slot="{ errors, reset }"
          class="form__field"
        >
          <input
            v-model.trim="login"
            @input="reset"
            @focus="reset"
            type="text"
            name="login"
            placeholder="Логин"
            class="form__input"
          >
          <span class="form__error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          rules="is:12345|required"
          v-slot="{ errors, reset }"
          class="form__field"
        >
          <input
            v-model.trim="password"
            @input="reset"
            @focus="reset"
            type="password"
            name="password"
            placeholder="Пароль"
            class="form__input"
          >
          <span class="form__error">{{ errors[0] }}</span>
        </ValidationProvider>

        <button class="form__button button">Войти</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex';

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { is, required } from 'vee-validate/dist/rules';

extend('is', {
  ...is,
  message: (fieldName) => {
    return `Не правильный ${fieldName}`;
  }
});

extend('required', {
  ...required,
  message: 'Поле обязательное для заполнения'
});

export default Vue.extend({
  name: 'Login',

  components: {
    ValidationProvider,
    ValidationObserver
  },


  data() {
    return {
      login: 'admin',
      password: '12345',
    }
  },

  methods: {
    ...mapMutations(['AUTH']),
    logIn() {
      this.AUTH();
      this.$router.push('/');
    }
  },
})
</script>

<style lang="scss">
.login {
  margin: auto;

	&__title-h-1 {
    margin-bottom: 20px;
  }
}
</style>