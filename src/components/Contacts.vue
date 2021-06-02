<template>
    <ul class="contacts">
        <li>С уважением,</li>
        <li><a href="https://www.freshlimesoft.com">Fresh Lime Soft</a></li>   
        <li><a :href="'tel:' + phone">{{phone}}</a></li>   

        <li class="social">
            <a href="https://web.facebook.com/Fresh-Lime-Soft-LLC-1076470329199224/" target="_blanc">
                <LogoFacebook />
            </a>
            <a href="https://www.instagram.com/freshlimesoft/" target="_blanc">
                <LogoInstagram />
            </a>
            <a href="https://www.linkedin.com/company/fresh-lemon-software-llc/about/" target="_blanc">
                <LogoLinkedin />
            </a>
            <a href="https://telegram.me/KaterinaFLS" target="_blanc">
                <LogoTelegram />
            </a>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'

import LogoFacebook from '../assets/svg/LogoFacebook.vue'
import LogoInstagram from '../assets/svg/LogoInstagram.vue'
import LogoLinkedin from '../assets/svg/LogoLinkedin.vue'
import LogoTelegram from '../assets/svg/LogoTelegram.vue'

export default {
    data() {
        return {
            phone: localStorage.getItem('phone')
        }
    },
    components: {
        LogoFacebook,
        LogoTelegram,
        LogoInstagram,
        LogoLinkedin
    },
    computed: {
        ...mapGetters([
            'HR_CONTACT_PHONE'
        ])
    },
    // mounted() {
    //     console.log(this.HR_CONTACT_PHONE);
    // },
}
</script>