<template>

  <Header />

  <div class="content offer">
      <p class="text">Привет, {{inputs.name}}!</p>
      <p class="text">Наша последняя встреча и твое успешное техническое собеседование многое поставили на свое место и мы поняли, что именно такого человека не хватает в нашей команде в <a href="https://www.freshlimesoft.com" target="_blanc">Fresh Lime Soft</a> на должности {{inputs.rank}}!</p>
      <p class="text" v-if="selectedOffer === 'trainee'">На стажировку, которая длится {{inputs.traineePeriod}} и испытательного срока который длится {{inputs.qualifyingPeriod}}, мы заключаем договор подряда и предлагаем з/п в размере {{inputs.traineeSalary}} на стажировке и {{inputs.qualifyingSalary}} на испытательном сроке. При этом, если ты сразу попадаешь на проект и будешь показывать хорошие результаты, то сроки могут сократиться. После заключаем контракт на год с з/п в размере {{inputs.mainSalary}}.</p>
      <p class="text" v-else>На испытательный срок, который длится {{inputs.traineePeriod}}, мы заключаем договор подряда и предлагаем з/п в размере {{inputs.traineeSalary}}. При этом, если ты сразу попадаешь на проект и будешь показывать хорошие результаты, то сроки могут сократиться. После заключаем контракт на год с з/п в размере {{inputs.mainSalary}}.</p>
      <p class="text">Еще раз напомним условия и требования из вакансии: <a :href="'https://www.' + inputs.vacancyLink ">{{inputs.vacancyLink}}</a></p>
      <p class="text">Если все условия подходят и ты уже мечтаешь начать работать в нашей компании, будем рады видеть тебя в нашем офисе {{inputs.appointmentDate}}, по адресу: <a href='https://www.google.com/maps/search/?api=1&query=ул.+Бирюзова+10а,+Минск' target="_blanc">Минск, улица Бирюзова 10А, НЕ главный вход с правого торца здания, 3 этаж, 306 офис.</a></p>
      <p class="text">Тебя встретит наш {{inputs.meetPerson}}, телефон для связи {{inputs.contactPhone}}. Возьми, пожалуйста, с собой паспорт и карточку социального страхования (если есть).</p>
      <p class="text">Помимо любви и уважения всех коллег, мы еще можем предложить уроки английского языка. Во время стажировки / испытательного срока компания оплачивает одно занятие в неделю. Бесплатные занятия будут проходить в группах. Если ты захочешь посещать больше одного занятия в неделю и по истечению стажировки/ испытательного срока занятия оплачиваются частично(одно занятие обойдётся в 3$). В первые дни в офисе будь готов к прохождению тестового задания на твой уровень английского языка!)</p>
      <p class="text">Если еще остались какие-то вопросы или уточнения, пожалуйста, напиши мне.</p>
   </div>


   <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
// import { mapGetters } from 'vuex'

export default {
   name: 'Home',

   components: {
      Header,
      Footer
   },
  data() {
      return { 
         inputs: {
         name: '',
         rank: '',
         vacancyLink: '',
         traineePeriod: '',
         qualifyingPeriod: '',
         traineeSalary: '',
         qualifyingSalary: '',
         mainSalary: '',
         appointmentDate: '',
         meetPerson: '',
         contactPhone: '',
         },
         selectedOffer: 'trainee',
      }
   },
   methods: {
      // async getInvites() {
      //    const res = await fetch('http://localhost:3000/invites', {
      //       method:'GET',
      //       body: JSON.stringify({
      //          name: this.inputs.name,
      //          rank: this.inputs.rank,
      //          vacancyLink: this.inputs.vacancyLink,
      //          traineePeriod: this.inputs.traineePeriod,
      //          qualifyingPeriod: this.inputs.qualifyingPeriod,
      //          traineeSalary: this.inputs.traineeSalary,
      //          qualifyingSalary: this.inputs.qualifyingSalary,
      //          mainSalary: this.inputs.mainSalary,
      //          appointmentDate: this.inputs.appointmentDate,
      //          meetPerson: this.inputs.meetPerson,
      //          contactPhone: this.inputs.contactPhone,
      //       })
      //    })
      //    console.log(res);
      // },
   },
}
</script>