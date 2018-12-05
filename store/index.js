import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        mobileMenuIsActive: false
    },
    mutations: {
        toggleMobileMenu (state) {
            state.mobileMenuIsActive = !state.mobileMenuIsActive;
        },
        closeMobileMenu (state) {
            state.mobileMenuIsActive = false;
        }
    }
})

export default store