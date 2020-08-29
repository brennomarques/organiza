import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://viacep.com.br/ws/'
//https://www.receitaws.com.br/v1/cnpj/[cnpj]

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: '',
            
        })
    }
})