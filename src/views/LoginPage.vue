<template>
   <div class="content">
      <form class="auth" @submit.prevent="login">
         <h2 class="auth-type">Вход</h2>
         <input 
            class="input-value" 
            type="text" 
            placeholder="Имя или @mail"
            v-model="auth.name"
            required>
         <input 
            class="input-value" 
            type="password" 
            placeholder="Пароль"
            v-model="auth.password"
            required>
         <button 
            type="login" 
            class="submit-btn auth-btn"
            @click.prevent="login">Войти</button>
            <p>или <router-link to="/admin/signup">Регистрация</router-link></p>
      </form>
   </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { mapActions, mapGetters } from 'vuex'

export default {
   setup() {
      const router = useRouter()

      function pushTo(path) {
         router.push(path)
      }

      return {
         router,
         pushTo
      }
   },
   data() {
      return {
         auth: {
            name: '',
            password: ''
         }
      }
   },
   computed: {
      ...mapGetters([
         'USER_TOKEN',
         'ERROR_MESSAGE'
      ]),
   },
   methods: {
      ...mapActions([
         'LOGIN_USER'
      ]),

      login() {
         this.LOGIN_USER(this.auth)

         setTimeout(() => {
            if(localStorage.getItem('token')) {
               this.pushTo('/admin')
            } else if(!localStorage.getItem('token')) {
               this.pushTo('/admin/signup')
            } else {
               alert('error')
            }
         }, 1000);
      }
   },
   mounted() {
      if(localStorage.getItem('token')) {
         this.pushTo('/admin')
      } else if(!localStorage.getItem('token')) {
         this.pushTo('/admin/login')
      } else {
         console.log('ERROR');
      }
   }
}
</script>