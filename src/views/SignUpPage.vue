<template>
   <div class="content">
      <form class="auth" @submit="signup">
         <h2 class="auth-type">Регистрация</h2>
         <input 
            class="input-value" 
            type="text" 
            placeholder="Имя или @mail"
            v-model="auth.name"
            required>
         <input 
            class="input-value" 
            type="text" 
            placeholder="Номер телефона HR"
            v-model="auth.phone"
            required>
         <input 
            class="input-value" 
            type="password" 
            placeholder="Пароль"
            v-model="auth.password"
            required>
         <button 
            type="submit" 
            class="submit-btn auth-btn"
            @click.prevent="signup">Зарегистрироваться</button>
            <p>или <router-link to="/admin/login">Войти</router-link></p>
      </form>
   </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { mapActions } from 'vuex'

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
            phone: '',
            password: ''
         }
      }
   },
   methods: {
      ...mapActions([
         'SIGNUP_NEW_USER',
      ]),


      signup() {
         this.SIGNUP_NEW_USER(this.auth)
         
         if(!localStorage.getItem('token')) {
            this.pushTo('/admin/signup')
         } else if(localStorage.getItem('token')) {
            setTimeout(() => {
               this.pushTo('/admin')
            }, 1000);
         } else {
            console.log('ERROR');
         }
      }
   },
   mounted() {
      if(localStorage.getItem('token')) {
         this.pushTo('/admin')
      } else if(!localStorage.getItem('token')) {
         this.pushTo('/admin/signup')
      } else {
         console.log('ERROR');
      }
   }

}
</script>