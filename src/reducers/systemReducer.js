/*
 * @作者: jiawei 
 * @创建时间: 2018-06-12 11:25:08 
 * @文件主题: 程序配置数据
 *
 */

import objectAssign from 'object-assign';

import {
    QH_PICTURE
} from '../constants/ActionTypes.js';

const initialState = {
    qhPicture: [],
};

function systemReducer(state = initialState, action) {
    switch (action.type) {
        case QH_PICTURE:
        console.log(action,0)
            return objectAssign({}, state,
                { qhPicture: action.newData }
            );
        default:
            return state;
    }
}

export default systemReducer;
