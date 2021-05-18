<template>
    <header>
        <div class="content">
            <div class="header">
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
    </header>
</template>

<script>
import Logo from '../assets/svg/Logo.vue'

export default {
    components: {
        Logo
    }
}
</script>