// 存放修改的方法

import * as types from './mutation-types'
const mutation = {
    [types.SET_SINGER](state, singer) {  // param 2 是传参
        state.singer = singer
    }
}

export default mutation