// import axios from "axios";

// const store = {
//     actions: {
// //         // GET_LIST_FROM_API({commit}, page) {
// //         //     return axios(`https://api.punkapi.com/v2/beers?page=${page}&limit=25`, {
// //         //         method: 'GET'
// //         //     })
// //         //     .then(list => {
// //         //         this.state.isLoading = page > 1 ? true : false;
// //         //         commit('SET_LIST_TO_STATE', list.data);

// //         //         return list;
// //         //     })
// //         //     .catch(error => {
// //         //         console.log(error);

// //         //         return error;
// //         //     })
// //         //     .finally(() => {
// //         //         this.state.isLoading = false;
// //         //     });
// //         // },
//         GET_INVITES_FROM_API({commit}, name) {
//             return axios.get('/invites', {

//             })
//             .then(invite => {
//                 commit('UPDATE_INVITES', invite.data);

//                 return invite;
//             })
//             .catch(error => {
//                 console.log(error);

//                 return error;
//             })
//         },
// //         // UPDATE_BEER({commit}, beer) {
// //         //     commit('UPDATE_BEERS', beer);
// //         // },
// //         // DELETE_FROM_STATE({commit}, id) {
// //         //     commit('REMOVE_FROM_STATE', id);
// //         // },
// //         updateOffer({commit}, changedOffer) {
// //             commit('UPDATE_OFFER', changedOffer);
// //             console.log(SELECTED_OFFER);
// //         },
// //         updateInput({commit}, changedInput) {
// //             commit('UPDATE_INPUT', changedInput);
// //         }
//     },
//     mutations: {
//         // UPDATE_OFFER(state,  changedOffer) {
//         //     state.selectedOffer = changedOffer;
//         // },

//         // UPDATE_INPUT(state, changedInput) {
//         //     state.inputs = changedInput
//         // },
        
//         UPDATE_INVITE(state, addedInvite) {
//             state.invites = addedInvite
//         },



//         // SET_LIST_TO_STATE(state, list) {
//         //     state.isArray = list.length > 0 ? 1 : 0;
//         //     state.beers.push(...list);
//         // },
//         // UPDATE_BEERS(state, updatedData) {
//         //     state.beers.map(item => {
//         //         if (item.id == updatedData.id) {
//         //             item.name = updatedData.name;
//         //             item.description = updatedData.description;
//         //         }
//         //     });
//         // },
//         // REMOVE_FROM_STATE(state, id) {
//         //     let itemArray = state.beers.filter(beer => beer.id != id);
            
//         //     state.beers = itemArray;
//         // }
//     },
//     state: {
//         selectedOffer: 'trainee',
//         offers: [
//             {id: 1, title: 'Стажировка', value: 'trainee'},
//             {id: 2, title: 'Испытательный срок', value: 'qualifyingPeriod'}
//         ],
//         inputs:{
//             name: {value: '', placeholder: 'Имя', key: 'name'},
//             rank: {value: '', placeholder: 'Должность', key: 'rank'},
//             vacancyLink: {value: '', placeholder: 'Ссылка на вакансию', key: 'vacancyLink'},
//             traineePeriod: {value: '', placeholder: 'Период стажировки', key: 'traineePeriod'},
//             qualifyingPeriod: {value: '', placeholder: 'Период испытательного срока', key: 'qualifyingPeriod'},
//             traineeSalary: {value: '', placeholder: 'З/П стажировки', key: 'traineeSalary'},
//             qualifyingSalary: {value: '', placeholder: 'З/П испыталтельного срока', key: 'qualifyingSalary'},
//             mainSalary: {value: '', placeholder: 'З/П контракта', key: 'mainSalary'},
//             appointmentDate: {value: '', placeholder: 'Дата, Время', key: 'appointmentDate'},
//             meetPerson: {value: '', placeholder: 'Встречающий сотрудник', key: 'meetPerson'},
//             contactPhone: {value: '', placeholder: 'Телефон для связи', key: 'contactPhone'},
//         },
//         invites:[]
//     },
//     getters: {
//         // allOffers(state) {
   
//         //     return state.offers
//         // },
//         // allInputs(state) {
//         //     return state.inputs
//         // },
//         // SELECTED_OFFER(state) {
//         //     return state.selectedOffer
//         // },
//         allInvites(state) {
//             return state.invites
            
//         }
//         // BEERS(state) {
//         //     return state.beers;
//         // },
//         // IS_ARRAY(state) {
//         //     return state.isArray;
//         // },
//         // IS_LOADING(state) {
//         //     return state.isLoading;
//         // }
//     }
// };

// export default store;