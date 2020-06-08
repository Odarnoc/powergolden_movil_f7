import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user_id: '',
        user_rol: '',
        pin: '',
        prod_id: '',
        busqueda: '',
        linea: 1,
        info_linea: {},
        prods: [],
        resetPassEmail: '',
        resetCode: '',
        folleto_id: '',
        paquete_id: '',
        paquete_cantidad: '',
        url_server: 'http://localhost/powergolden/',
    },

    actions: {
        userLogged({ commit }, user) {
            commit('USER_LOGGED', user);
        }
    },

    mutations: {
        USER_LOGGED(state, user) {
            state.user = user;
        }
    },
});