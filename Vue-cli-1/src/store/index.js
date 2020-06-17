import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
// logger调试工具：当通过mutataions修改states时，会打印日志


Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
// npm run build 时，process.env.NODE_ENV == 'production',npm run dev 为 dev环境
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict: debug,
    // 如果是dev环境则开启strict模式来查看修改是否通过mutations，会有损耗，
    // 所以production环境不开启
    plugins: debug? [createLogger()] : []
})