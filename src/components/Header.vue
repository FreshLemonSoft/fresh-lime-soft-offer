<template>
    <header>
        <div class="content">
            <div class="header">
                <div class="logo">
                    <router-link class="logo" to="/">
                        <Logo />
                    </router-link>
                </div>
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