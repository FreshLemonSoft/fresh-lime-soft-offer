<template>   
   <Header />

   <div class="content">
      <div class="user">
         <div @click="logout" class="logout">
            Выйти
         </div>
      </div>
   </div>

   <div class="content">
      <p class="form-instruction">1. Выберите тип оффера</p>
      <form class="form" @submit.prevent="submit">
            
         <select 
            name="offertype" 
            v-model="data.inputs.offerType"
            class="select-offer grid">

            <option 
               v-for="offer in ALL_OFFERS"
               v-bind:value="offer.value"
               :key="offer.id">

               {{offer.title}}

            </option>
         </select>

         <p class="form-instruction">2. Введите значения в поля</p>
         <div class="inputs">
            <input type="text" name="name-input" class="input-value" v-model="data.inputs.name" placeholder="Имя">
            <input type="text" name="rank-input" class="input-value" v-model="data.inputs.rank" placeholder="Должность">
            <input type="text" name="vacancyLink-input" class="input-value" v-model="data.inputs.vacancyLink" placeholder="Ссылка на вакансию">
            
            <div 
               v-if="data.inputs.offerType === 'trainee'" 
               class="offer-type">
               <input type="text" name="traineePeriod-input" class="input-value" v-model="data.inputs.traineePeriod" placeholder="Период стажировки">
               <input type="text" name="traineeSalary-input" class="input-value" v-model="data.inputs.traineeSalary" placeholder="З/П стажировки">
               <input type="text" name="qualifyingPeriod-input" class="input-value" v-model="data.inputs.qualifyingPeriod" placeholder="Период испытательного срока">
               <input type="text" name="qualifyingSalary-input" class="input-value" v-model="data.inputs.qualifyingSalary" placeholder="З/П испыталтельного срока">
            </div>

            <div v-else class="offer-type">
               <input type="text" name="qualifyingPeriod-input" class="input-value" v-model="data.inputs.qualifyingPeriod" placeholder="Период испытательного срока">
               <input type="text" name="qualifyingSalary-input" class="input-value" v-model="data.inputs.qualifyingSalary" placeholder="З/П испыталтельного срока">
            </div>

            <input type="text" name="mainSalary-input grid-static" class="input-value" v-model="data.inputs.mainSalary" placeholder="З/П контракта">
            <input type="text" name="appointmentDate-input" class="input-value" v-model="data.inputs.appointmentDate" placeholder="Дата, Время">
            <input type="text" name="meetPerson-input" class="input-value" v-model="data.inputs.meetPerson" placeholder="Встречающий сотрудник">
            <input type="number" name="contactPhone-input" class="input-value" v-model="data.inputs.contactPhone" placeholder="Телефон для связи">
         </div>

      <button 
         type="submit"
         @click.prevent="postValues"
         class="submit-btn">
         Создать ссылку
      </button>

      </form>
   </div>

   <p class="created-link content" v-if="CREATED_LINK === ''">Создай ссылку и меня не станет))</p>
   <p class="created-link content" v-else>
      <!-- <a :href="CREATED_LINK">{{CREATED_LINK}}</a> -->
      
      <a :href="'https://frontend.d3rvpcm0w4ve8b.amplifyapp.com/offer/' + CREATED_ID">{{'https://frontend.d3rvpcm0w4ve8b.amplifyapp.com/offer/' + CREATED_ID}}</a>
      <!-- <a :href="'http://localhost:8080/offer/' + CREATED_ID">{{'http://localhost:8080/offer/' + CREATED_ID}}</a> -->
   </p>

   <div class="content offer">
      <p class="text">Привет, <b>{{data.inputs.name || '............'}}</b>!</p>
      <p class="text">Наша последняя встреча и твое успешное техническое собеседование многое поставили на свое место и мы поняли, что именно такого человека не хватает в нашей команде в <a href="https://freshlimesoft.com" target="_blanc">Fresh Lime Soft</a> на должности {{data.inputs.rank || '............'}}!</p>
      <p class="text" v-if="data.inputs.offerType === 'trainee'">На время стажировки, которая длится {{data.inputs.traineePeriod || '............'}} и испытательного срока, который длится {{data.inputs.qualifyingPeriod || '............'}} мы заключаем договор подряда и предлагаем з/п в размере {{data.inputs.traineeSalary || '............'}} на стажировке и {{data.inputs.qualifyingSalary || '............'}} на испытательном сроке. При этом, если ты сразу попадаешь на проект и будешь показывать хорошие результаты, то сроки могут сократиться. После заключаем контракт на год с з/п в размере {{data.inputs.mainSalary || '............'}}.</p>
      <p class="text" v-else>На время испытательного срока, который длится {{data.inputs.qualifyingPeriod || '............'}} мы заключаем договор подряда и предлагаем з/п в размере {{data.inputs.qualifyingSalary || '............'}}. При этом, если ты сразу попадаешь на проект и будешь показывать хорошие результаты, то сроки могут сократиться. После заключаем контракт на год с з/п в размере {{data.inputs.mainSalary || '............'}}.</p>
      <p class="text">Еще раз напомним условия и требования из вакансии: <a :href="data.inputs.vacancyLink">{{data.inputs.vacancyLink || '         '}}</a></p>
      <p class="text">Если все условия подходят и ты уже мечтаешь начать работать в нашей компании, будем рады видеть тебя в нашем офисе {{data.inputs.appointmentDate}}, по адресу: <a href='https://www.google.com/maps/search/?api=1&query=ул.+Бирюзова+10а,+Минск' target="_blanc">Минск, улица Бирюзова 10А, НЕ главный вход с правого торца здания, 3 этаж, 306 офис.</a></p>
      <p class="text">Тебя встретит наш {{data.inputs.meetPerson || 'офис-менеджер Настя'}}, телефон для связи {{data.inputs.contactPhone || '+375(33)317-32-84'}}. Возьми, пожалуйста, с собой паспорт и карточку социального страхования (если есть).</p>
      <p class="text" v-if="data.inputs.offerType === 'trainee'">Помимо любви и уважения всех коллег, мы еще можем предложить уроки английского языка. Во время стажировки/испытательного срока компания оплачивает одно занятие в неделю. Бесплатные занятия будут проходить в группах. Если ты захочешь посещать больше одного занятия в неделю и по истечению стажировки/испытательного срока занятия оплачиваются частично (одно занятие обойдётся в 3$). В первые дни в офисе будь готов к прохождению тестового задания на твой уровень английского языка!)</p>
      <p class="text" v-else>Помимо любви и уважения всех коллег, мы еще можем предложить уроки английского языка. Во время испытательного срока компания оплачивает одно занятие в неделю. Бесплатные занятия будут проходить в группах. Если ты захочешь посещать больше одного занятия в неделю и по истечению испытательного срока занятия оплачиваются частично (одно занятие обойдётся в 3$). В первые дни в офисе будь готов к прохождению тестового задания на твой уровень английского языка!)</p>
      <p class="text">Если еще остались какие-то вопросы или уточнения, пожалуйста, напиши мне.</p>
   </div>

   
   <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

import { mapActions, mapGetters, } from "vuex";
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
   components: {
      Header,
      Footer
   },
   setup() {
      const router = useRouter()

      function pushTo(path) {
         router.push(path)
      }

      const data = reactive({
         inputs: {
            HRContactPhone: '',
            name: '',
            rank: '',
            vacancyLink: '',
            traineePeriod: '',
            qualifyingPeriod: '',
            traineeSalary: '',
            qualifyingSalary: '',
            mainSalary: '',
            appointmentDate: '',
            meetPerson: null,
            contactPhone: null,
            offerType: 'trainee'

         },
         link:{
            URL: '',
            id: ''
         }
      })

      return {
         router,
         pushTo,
         data
      }
   },
   computed: {
      ...mapGetters([
         'ALL_INPUTS',
         'ALL_OFFERS',
         'CREATED_LINK',
         'CREATED_ID',
         // 'USER_NAME'
      ]),
   },
   methods: {
      ...mapActions([
         'POST_VALUE_TO_API',
      ]),

      postValues() {
         this.POST_VALUE_TO_API(this.data.inputs)
      },

      logout() {
         localStorage.removeItem('token')
         localStorage.removeItem('phone')
         localStorage.removeItem('telegram')
         this.pushTo('/admin/login')
      }
   },
   watch: {
      offerType(newValue) {
         this.data.offerType = newValue
      }
   },
   mounted() {
      if(localStorage.getItem('token')) {
         this.pushTo('/admin')
      } else if(!localStorage.getItem('token')) {
         this.pushTo('/admin/login')
      } else {
         console.log('ERROR');
      }
   }
}
</script>

<style lang="scss">
$bg-color: rgba(10, 31, 42, 0.95);
$lime-green: #55af2a;

.logout {
   border-radius: 10px;
   border: 1px solid $lime-green;
   padding: 10px;
   transition: .5s ease;
   cursor: pointer;

   &:hover {
      box-shadow: 0 0 10px 4px $lime-green;
      transition: .5s ease;
   }
}

.grid {
   grid-column-start: 1;
   grid-column-end: 3;
}

.form {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px 20px;

    &-instruction {
        grid-column-start: 1;
        grid-column-end: 7;
    }
}

.form-instruction {
    color: #fff;
    display: flex;
    align-items: center;
    margin: 20px 0;
}

.inputs {
   display: grid;
   grid-column: 1 / 7;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(5, auto);
   grid-gap: 5px 20px;
}

.created-link {
    background: transparent;
    padding: 15px;
    margin: 20px auto;
    box-shadow: 0 2px 10px 2px #fff;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    text-decoration: underline $lime-green 2px;
    font-size: 20px;
    line-height: 30px;
    
    a {
        font-size: 20px;
        line-height: 30px;
        color: #fff;
        text-decoration: underline $lime-green 2px;
        transition: .5s ease;

        &:hover {
            text-shadow: 0 0 10px #fff;
            transition: .5s ease;
        }
    }
}

.select-offer {
    padding: 10px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
}

.offer-type { 
    grid-column-start: 1;
    grid-column-end: 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px 20px;
    
    &:last-child {
        grid-column-start: 3;
        grid-column-end: 5;
    }
}

.user {
   display: flex;
   align-items: center;
   justify-content: flex-end;
   width: 20%;
   margin-top: 30px;
   margin-left: auto;
}

@media screen and (max-width: 1025px){
   .inputs {
      grid-template-columns: 1fr 1fr;
   }

   .created-link {
      font-size: 18px;
   }

   .offer-type {
      grid-row: 2 / 3;
      grid-gap: 5px 20px;
   }
}

@media screen and(max-width: 980px) { //admin
   .offer,
   .created-link a {
      font-size: 16px;
   }
}

@media screen and(max-width: 630px) { //admin
   .offer,
   .created-link {
         font-size: 15px;
         a {
         font-size: 15px;
      }
   }
   

   .created-link {
      overflow-wrap: break-word;
      word-wrap: break-word;
   }

   .inputs {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
   }

   .offer-type {
      grid-template-columns: 1fr;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row: unset;
   }

   .grid {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-end: 7;
      
      & + .grid {
         grid-column-start: 1;
         grid-row-end: 3;
         grid-row-start: 2;
      }
   }
}

@media screen and(max-width: 630px) { 
   .offer::before {
      border-width: 0 35px 35px 0;
   }
}
</style>