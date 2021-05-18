<template>
    <footer>
        <div class="content">
            <div class="footer">
                <div class="logo">
                    <router-link class="logo" to="/">
                        <Logo />
                    </router-link>
                </div>
                <nav class="nav">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/admin">Admin</router-link></li>
                </nav>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from '../assets/svg/Logo.vue'

export default {
    components: {
        Logo
    }
}
</script>