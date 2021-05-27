import axios from "axios";

const host = 'http://localhost:9000';

const store = {
    actions: {
        // SIGNUP_NEW_USER(auth) {
        //     axios.post(host + '/admin/register', {
        //         name: auth.name,
        //         phone: auth.phone,
        //         password: auth.password
        //     })
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         return err;
        //     });
        // },
        LOGIN_USER({commit}, auth) {
            axios.post(host + '/admin/login',{
                name: auth.name,
                password: auth.password
            })
            .then(res => {
                commit('GET_USER_TOKEN', res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err);

                return err;
            })
        },

        POST_VALUE_TO_API({commit}, inputs) {
            axios.post(host + '/users',{
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
                // HRContactPhone: inputs.HRContactPhone,
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
            axios.get(`${host}/${id}`)
            // axios.get('https://freshlimesoft.com/newOffer/60aca86f8025b3218cee6727')
            .then(res => {
                commit('SET_VALUE_FROM_API', res.data)
            })
            .catch(err => {
                console.log(err)

                return err
            });
        },

    },
    mutations: {
        GET_USER_TOKEN(state, authUser) {
            state.authUser = authUser
        },
        
        SET_VALUE_TO_STATE(state, link, inputs) {
            state.link = link
            state.inputs = inputs
        },
        
        SET_VALUE_FROM_API(state, newInputs) {
            state.newInputs = newInputs
        },
    },
    state: {
        offers: [
            {id: 1, title: 'Стажировка', value: 'trainee'},
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
            HRContactPhone: ''
        },
        link: {
            URL:"",
            id:""
        },
        newInputs:{},
        auth: {
            name: '',
            phone: '',
            password: '',
        },
        authUser: {},
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
            return state.authUser.HRContactPhone
        },
        CREATED_LINK(state) {
            return state.link.URL
        },
        CREATED_ID(state) {
            return state.link.id
        },
        USER_TOKEN(state) {
            return state.authUser.token
        },
        ERROR_MESSAGE(state) {
            return state.authUser.message
        }
    }
};

export default store;