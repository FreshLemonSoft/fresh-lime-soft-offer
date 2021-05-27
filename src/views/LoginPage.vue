<template>
   <div class="content">
      <form class="auth" @submit.prevent="login">
         <h2 class="auth-type">Login</h2>
         <input 
            class="input-value" 
            type="text" 
            placeholder="login or email"
            v-model="auth.name">
         <input 
            class="input-value" 
            type="password" 
            placeholder="password"
            v-model="auth.password">
         <button 
            type="login" 
            class="submit-btn"
            @click.prevent="login">Login</button>
            <p>or <router-link to="/admin/signup">Sign Up</router-link></p>
      </form>
   </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
   setup() {
      const router = useRouter()

      function pushTo() {
         router.push('/admin')
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
         this.LOGIN_USER(this.auth,)

         setTimeout(() => {
            if(this.USER_TOKEN) {
               this.pushTo()
            } else if(this.ERROR_MESSAGE) {
               alert(this.ERROR_MESSAGE)
            } else {
               alert('what do you want')
            }
         }, 200);
      }
   },
}
</script>