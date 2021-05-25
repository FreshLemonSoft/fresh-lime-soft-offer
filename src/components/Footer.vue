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