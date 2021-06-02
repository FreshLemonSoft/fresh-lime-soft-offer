<template>
    <header>
        <div class="content">
            <div class="header">
                <div class="logo">
                    <a class="logo" to="https://freshlimesoft.com">
                        <Logo />
                    </a>
                </div>
                <div class="user">
                    Привет {{USER_NAME}}
                    <div @click="logout" class="logout">
                        Выйти
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '../assets/svg/Logo.vue'
import { useRouter } from 'vue-router'
import { mapGetters } from 'vuex'

export default {
    setup() {
        const router = useRouter()

        function pushTo(path) {
         router.push(path)
        }

      return {
        pushTo
      }
    },
    components: {
        Logo
    },
    computed: {
        ...mapGetters([
            'USER_NAME'
        ])
    },
    methods: {  
        logout() {
            localStorage.removeItem('token')
            localStorage.removeItem('phone')
            this.pushTo('/admin/login')
        }
    },
}
</script>