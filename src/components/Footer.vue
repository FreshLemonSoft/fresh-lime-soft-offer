<template>
    <footer>
        <div class="content">
            <div class="footer">
                <div class="logo">
                    <router-link class="logo" to="/">
                        <Logo />
                    </router-link>
                </div>
                <Contacts />
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from '../assets/svg/Logo.vue'
import Contacts from './Contacts.vue'

export default {
    components: {
        Logo,
        Contacts
    }
}
</script>

<style lang="scss">
footer {
    background: rgba(10,31,42,0.95);
    padding: 5px;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>