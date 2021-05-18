<template>   
   <Header />

   <div class="content">
      <p class="form-instruction">1. Введите номер контактов и выберите тип оффера</p>
      <form class="form" @submit.prevent="submit">
         <input 
            type="text" 
            name="contact-input" 
            class="input-value grid" 
            :placeholder="contactNumber">

         <select 
            name="offertype" 
            v-model="selectedOffer"
            class="select-offer grid">

            <option 
               v-for="offer in offers"
               v-bind:value="offer.value"
               :key="offer.id">

               {{offer.title}}

            </option>
         </select>

         <p class="form-instruction">2. Введите значения в поля</p>
         <div class="inputs">
            <input type="text" :class="inputs.name.class" v-model="inputs.name.value" :placeholder="inputs.name.placeholder">
            <input type="text" class="input-value" v-model="inputs.rank" placeholder="Должность">
            <input type="text" class="input-value" v-model="inputs.vacancyLink" placeholder="Ссылка на вакансию">
            <div 
               v-if="selectedOffer === 'trainee'" 
               class="offer-type">
               <input type="text" class="input-value" v-model="inputs.traineePeriod" placeholder="Период стажировки">
               <input type="text" class="input-value" v-model="inputs.traineeSalary" placeholder="З/П стажировки">
            </div>
            <div v-else class="offer-type">
               <input type="text" class="input-value" v-model="inputs.qualifyingPeriod" placeholder="Период испытательного срока">
               <input type="text" class="input-value" v-model="inputs.qualifyingSalary" placeholder="З/П испыталтельного срока">
            </div>
            <input type="text" class="input-value" v-model="inputs.mainSalary" placeholder="З/П контракта">
            <input type="text" class="input-value" v-model="inputs.appointmentDate" placeholder="Дата, Время">
            <input type="text" class="input-value" v-model="inputs.meetPerson" placeholder="Встречающий сотрудник">
            <input type="text" class="input-value" v-model="inputs.contactPhone" placeholder="Телефон для связи">
         </div>

      <button 
         type="submit"
         @click.prevent="postUsers"
         class="submit-btn"
         >
         Создать ссылку
      </button>

      </form>
   </div>

   <p 
      class="created-link content">
      <!-- {{link}} -->
      somelink
   </p>

   <div class="content offer">
      <p class="text">Привет, <b>{{inputs.name.value || '............'}}</b>!</p>
      <p class="text">Наша последняя встреча и твое успешное техническое собеседование многое поставили на свое место и мы поняли, что именно такого человека не хватает в нашей команде в <a href="https://freshlimesoft.com">Fresh Lime Soft</a> на должности {{inputs.rank || '............'}}!</p>
      <p class="text" v-if="selectedOffer === 'trainee'">На стажировку, которая длится {{inputs.traineePeriod || '............'}} и испытательного срока который длится {{inputs.qualifyingPeriod || '............'}}, мы заключаем договор подряда и предлагаем з/п в размере {{inputs.traineeSalary || '............'}} на стажировке и {{inputs.qualifyingSalary || '............'}} на испытательном сроке. При этом, если ты сразу попадаешь на проект и будешь показывать хорошие результаты, то сроки могут сократиться. После заключаем контракт на год с з/п в размере {{inputs.mainSalary || '............'}}.</p>
      <p class="text" v-else>На испытательный срок, который длится {{inputs.traineePeriod || '............'}}, мы заключаем договор подряда и предлагаем з/п в размере {{inputs.traineeSalary || '............'}}. При этом, если ты сразу попадаешь на проект и будешь показывать хорошие результаты, то сроки могут сократиться. После заключаем контракт на год с з/п в размере {{inputs.mainSalary || '............'}}.</p>
      <p class="text">Еще раз напомним условия и требования из вакансии: <a :href="'https://' + inputs.vacancyLink ">{{inputs.vacancyLink || '............'}}</a></p>
      <p class="text">Если все условия подходят и ты уже мечтаешь начать работать в нашей компании, будем рады видеть тебя в нашем офисе {{inputs.appointmentDate}}, по адресу: <a href='https://www.google.com/maps/search/?api=1&query=ул.+Бирюзова+10а,+Минск'>Минск, улица Бирюзова 10А, НЕ главный вход с правого торца здания, 3 этаж, 306 офис.</a></p>
      <p class="text">Тебя встретит наш {{inputs.meetPerson || 'офис-менеджер Настя'}}, телефон для связи {{inputs.contactPhone || '+375(33)317-32-84'}}. Возьми, пожалуйста, с собой паспорт и карточку социального страхования (если есть).</p>
      <p class="text" v-if="selectedOffer === 'trainee'">Помимо любви и уважения всех коллег, мы еще можем предложить уроки английского языка. Во время стажировки компания оплачивает одно занятие в неделю. Бесплатные занятия будут проходить в группах. Если ты захочешь посещать больше одного занятия в неделю и по истечению стажировки занятия оплачиваются частично(одно занятие обойдётся в 3$). В первые дни в офисе будь готов к прохождению тестового задания на твой уровень английского языка!)</p>
      <p class="text" v-else>Помимо любви и уважения всех коллег, мы еще можем предложить уроки английского языка. Во время испытательного срока компания оплачивает одно занятие в неделю. Бесплатные занятия будут проходить в группах. Если ты захочешь посещать больше одного занятия в неделю и по истечению испытательного срока занятия оплачиваются частично(одно занятие обойдётся в 3$). В первые дни в офисе будь готов к прохождению тестового задания на твой уровень английского языка!)</p>
      <p class="text">Если еще остались какие-то вопросы или уточнения, пожалуйста, напиши мне.</p>
   </div>

   
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'

export default {
   components: {
      Header,
      Footer
   },
   data: () => ({
      inputs: {
         name: {key:'name', value:'', placeholder:'IMYa', class:'input-value'},
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
      links: '',
      selectedOffer: 'trainee',
      contactNumber: 'Контакты в футер',
      offers: [
         {id: 1, title: 'Стажировка', value: 'trainee'},
         {id: 2, title: 'Испытательный срок', value: 'qualifyingPeriod'}
      ],
   }),
   methods: {
      async postUsers() {
         const res = await fetch('http://localhost:3000/users', {
            method:'POST',
            body: JSON.stringify({
               name: this.inputs.name.value,
               rank: this.inputs.rank,
               vacancyLink: this.inputs.vacancyLink,
               traineePeriod: this.inputs.traineePeriod,
               qualifyingPeriod: this.inputs.qualifyingPeriod,
               traineeSalary: this.inputs.traineeSalary,
               qualifyingSalary: this.inputs.qualifyingSalary,
               mainSalary: this.inputs.mainSalary,
               appointmentDate: this.inputs.appointmentDate,
               meetPerson: this.inputs.meetPerson,
               contactPhone: this.inputs.contactPhone,
            })
         })
         console.log(res);
      },
   }
}
</script>