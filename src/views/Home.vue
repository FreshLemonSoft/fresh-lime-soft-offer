<template>
   <Header />

  <div class="offer content">
      <p class="text">Привет, <b>{{NEW_INPUTS.name || '............'}}</b>!</p>
      <p class="text">Наша последняя встреча и твое успешное техническое собеседование многое поставили на свое место и мы поняли, что именно такого человека не хватает в нашей команде в <a href="https://freshlimesoft.com">Fresh Lime Soft</a> на должности {{NEW_INPUTS.rank || '............'}}!</p>
      <p class="text" v-if="NEW_INPUTS.offerType === 'trainee'">На стажировку, которая длится {{NEW_INPUTS.traineePeriod || '............'}} и испытательного срока который длится {{NEW_INPUTS.qualifyingPeriod || '............'}}, мы заключаем договор подряда и предлагаем з/п в размере {{NEW_INPUTS.traineeSalary || '............'}} на стажировке и {{NEW_INPUTS.qualifyingSalary || '............'}} на испытательном сроке. При этом, если ты сразу попадаешь на проект и будешь показывать хорошие результаты, то сроки могут сократиться. После заключаем контракт на год с з/п в размере {{NEW_INPUTS.mainSalary || '............'}}.</p>
      <p class="text" v-else>На испытательный срок, который длится {{NEW_INPUTS.qualifyingPeriod || '............'}}, мы заключаем договор подряда и предлагаем з/п в размере {{NEW_INPUTS.qualifyingSalary || '............'}}. При этом, если ты сразу попадаешь на проект и будешь показывать хорошие результаты, то сроки могут сократиться. После заключаем контракт на год с з/п в размере {{NEW_INPUTS.mainSalary || '............'}}.</p>
      <p class="text">Еще раз напомним условия и требования из вакансии: <a :href="'https://' + NEW_INPUTS.vacancyLink ">{{NEW_INPUTS.vacancyLink || '         '}}</a></p>
      <p class="text">Если все условия подходят и ты уже мечтаешь начать работать в нашей компании, будем рады видеть тебя в нашем офисе {{NEW_INPUTS.appointmentDate}}, по адресу: <a href='https://www.google.com/maps/search/?api=1&query=ул.+Бирюзова+10а,+Минск'>Минск, улица Бирюзова 10А, НЕ главный вход с правого торца здания, 3 этаж, 306 офис.</a></p>
      <p class="text">Тебя встретит наш {{NEW_INPUTS.meetPerson || 'офис-менеджер Настя'}}, телефон для связи {{NEW_INPUTS.contactPhone || '+375(33)317-32-84'}}. Возьми, пожалуйста, с собой паспорт и карточку социального страхования (если есть).</p>
      <p class="text" v-if="NEW_INPUTS.offerType === 'trainee'">Помимо любви и уважения всех коллег, мы еще можем предложить уроки английского языка. Во время стажировки компания оплачивает одно занятие в неделю. Бесплатные занятия будут проходить в группах. Если ты захочешь посещать больше одного занятия в неделю и по истечению стажировки занятия оплачиваются частично(одно занятие обойдётся в 3$). В первые дни в офисе будь готов к прохождению тестового задания на твой уровень английского языка!)</p>
      <p class="text" v-else>Помимо любви и уважения всех коллег, мы еще можем предложить уроки английского языка. Во время испытательного срока компания оплачивает одно занятие в неделю. Бесплатные занятия будут проходить в группах. Если ты захочешь посещать больше одного занятия в неделю и по истечению испытательного срока занятия оплачиваются частично(одно занятие обойдётся в 3$). В первые дни в офисе будь готов к прохождению тестового задания на твой уровень английского языка!)</p>
      <p class="text">Если еще остались какие-то вопросы или уточнения, пожалуйста, напиши мне.</p>
   </div>

   <GifSection />

   <Footer />

</template>

<script>
import Header from '../components/Header.vue'
import GifSection from '../components/GifSection.vue'
import Footer from '../components/Footer.vue'
import { mapGetters, mapActions } from 'vuex'
import {useRoute, useRouter} from 'vue-router'

export default {
   setup() {
      const route = useRoute() 
      const router = useRouter()
      const id = route.params.id

      function pushTo(path) {
        router.push(path)
      }

      return {
         id
      }
   },
   components: {
      Header,
      GifSection,
      Footer
   },
   computed: {
      ...mapGetters([
         'CREATED_ID',
         'NEW_INPUTS'
      ])
   },
   mounted() {
      this.GET_VALUE_FROM_API(this.id)

   },
   methods: {
      ...mapActions([
         'GET_VALUE_FROM_API'
      ])
   },
}
</script>