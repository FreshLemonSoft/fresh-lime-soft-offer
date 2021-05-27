<template>
   <div class="content">
      <form class="auth" @submit.prevent="signup">
         <h2 class="auth-type">Sign Up</h2>
         <input 
            class="input-value" 
            type="text" 
            placeholder="login or email"
            v-model="auth.name">
         <input 
            class="input-value" 
            type="text" 
            placeholder="phone number"
            v-model="auth.phone">
         <input 
            class="input-value" 
            type="password" 
            placeholder="password"
            v-model="auth.password">
         <button 
            type="signup" 
            class="submit-btn"
            @click.prevent="signup">Login</button>
            <p>or <router-link to="/admin/login">Login</router-link></p>
      </form>
   </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
   setup() {
      const router = useRouter()

      function pushTo() {
         router.push('/admin/login')
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
         'SIGNUP_NEW_USER'
      ]),


      signup() {
         this.SIGNUP_NEW_USER(this.auth)
         // axios.post('http://localhost:9000/admin/register', {
         //           name: this.auth.name,
         //           phone: this.auth.phone,
         //           password: this.auth.password
         //       })
         //       .then(res => {
         //           console.log(res);
         //       })
         //       .catch(err => {
         //           console.log(err);
         //           return err;
         //       })
         // setTimeout(() => {
         //    this.pushTo()
         // }, 200);
      }
   },
}
</script>