<template>
    <ul class="contacts">
        <li>С уважением,</li>
        <li><a href="https://www.freshlimesoft.com">Fresh Lime Soft</a></li>   
        <li><a :href="'tel:' + NEW_INPUTS.HRcontactPhone || phone">{{NEW_INPUTS.HRcontactPhone || phone}}</a></li>   

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
            <a :href="'https://telegram.me/' + NEW_INPUTS.telegram || telegram" target="_blanc">
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
            phone: localStorage.getItem('phone'),
            telegram: localStorage.getItem('telegram')
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
            'NEW_INPUTS'
        ])
    },
    mounted() {
        console.log(this.NEW_INPUTS);
    },
}
</script>

<style lang="scss">

$bg-color: rgba(10, 31, 42, 0.95);
$lime-green: #55af2a;

.contacts {
   display: flex;
   flex-direction: column;
   list-style: none;
   color: #fff;

   li {
      font-size: 20px;

      & + li {
         margin-top: 10px;
      }

      a {
         text-decoration: none;
         color: inherit;
         line-height: 30px;
         border-bottom: 1px solid $lime-green;
      }
   }
}

.social {
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;

   a {
      padding: 5px;
      border: 1px solid $lime-green;
      border-radius: 10px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
   }
}

@media screen and(max-width: 980px) { 
    .contacts {
        li {
            font-size: 16px;

            & + li {
                margin-top: 5px;
            }

            a {
                line-height: unset;
            }
        } 
    }

    .social {
        a {
            margin-right: 5px;

            &:last-child {
                margin: 0;
            }
        }
    }
}

@media screen and (max-width: 630px) { 
    .contacts {
        li {
            font-size: 15px;
        }
    }
}

@media screen and (max-width: 420px) {
    .contacts {
        li {
            font-size: 12px;
        }
    }
   
    .social {
        a {
            width: 25px;
            height: 25px;
        }
    }
}

</style>