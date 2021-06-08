import { createStore } from 'vuex'
import axios from 'axios'

// const HOST_URL = 'http://localhost:9000/'
const HOST_URL = 'https://fls-offer.herokuapp.com'

const store = {
  state: {
    HRContactPhone: '',
    userName: '',
    offers: [
        {id: 1, title: 'Стажировка', value: 'trainee',},
        {id: 2, title: 'Испытательный срок', value: 'qualifyingPeriod'}
    ],
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
        offerType: '',
    },
    link: {
        URL:"",
        id:""
    },
    auth: {
        name: '',
        phone: '',
        password: '',
    },
    newInputs:{},
    authUser: {}
  },
  mutations: {
    SET_VALUE_TO_STATE(state, link, inputs) {
            state.link = link
            state.inputs = inputs
        },
        
        GET_VALUE_FROM_API(state, newInputs) {
            state.newInputs = newInputs
            localStorage.getItem('token');
        },
  },
  actions: {
    SIGNUP_NEW_USER({commit}, auth) {
            axios.post(HOST_URL + '/admin/register', {
                name: auth.name,
                phone: auth.phone,
                password: auth.password
            }) 
            .then(res => {
                // commit('SET_USER_NAME', auth.name)
                localStorage.setItem('token', (res.data.token))
                localStorage.setItem('phone', (res.data.HRcontactPhone))
            })
            .catch(err => {
                console.log(err);
                alert('THIS USERNAME BUSY! CREATE NEW ONE')
            })
        },

        LOGIN_USER({commit}, auth) {
            axios.post(HOST_URL + '/admin/login',{
                name: auth.name,
                password: auth.password
            })
            .then(res => {
                // commit('SET_USER_NAME', auth.name)
                localStorage.setItem('token', (res.data.token))
                localStorage.setItem('phone', (res.data.HRcontactPhone));
            })
            .catch(err => {
                console.log(err);
            })
        },

        POST_VALUE_TO_API({commit}, inputs) {
            axios.post(HOST_URL + '/users',
            {
                name: inputs.name,
                rank: inputs.rank,
                vacancyLink: inputs.vacancyLink,
                traineePeriod: inputs.traineePeriod,
                qualifyingPeriod: inputs.qualifyingPeriod,
                traineeSalary: inputs.traineeSalary,
                qualifyingSalary: inputs.qualifyingSalary,
                mainSalary: inputs.mainSalary,
                appointmentDate: inputs.appointmentDate,
                meetPerson: inputs.meetPerson,
                contactPhone: inputs.contactPhone,
                offerType: inputs.offerType,
                HRcontactPhone: localStorage.getItem('phone')
            },
            {
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => {
                commit('SET_VALUE_TO_STATE', res.data, inputs);
            })
            .catch(err => {
                console.log(err);
                return err;
            });
        },

        GET_VALUE_FROM_API({commit}, id) {
            axios.get(`${HOST_URL}/invites/${id}`, {
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => {
                commit('GET_VALUE_FROM_API', res.data)
                console.log(res.data);
            },
            )
            .catch(err => {
                console.log(err)
            });
        },
  },
  getters: {
    ALL_INPUTS(state) {
        return state.inputs
    },
    NEW_INPUTS(state) {
        return state.newInputs
    },
    ALL_OFFERS(state) {
        return state.offers
    },
    HR_CONTACT_PHONE(state) {
        return state.authUser.HRcontactPhone
    },
    CREATED_LINK(state) {
        return state.link.URL
    },
    CREATED_ID(state) {
        return state.link.id
    },
  }
}

export default store;