import { message } from 'antd';

import {
    QH_PICTURE
} from '../constants/ActionTypes.js'

import { getQhPicture } from '../requests/systemRequest'

// export function qhPicture(url) {
//     return (dispatch) => {
//         getQhPicture(url)
//         // .then(response => {
//         //     console.log(0)
//         //     response.json()
//         //     console.log(1)
//         // })
//         .then( res => {
//             console.log(2)
//             // message.success(res.data.address);
//             // dispatch(setQhPicture(res.data.address));
//             console.log(9)
//         } )
//     }
// }

export function qhPicture1(url) {
    return (dispatch) => {
        getQhPicture(url)
        .then(response => response.json())
        .then( res => {
            message.success(res.data[0].address);
            dispatch(setQhPicture(res.data));
            console.log(9,res)
        } )
    }
}




export function setQhPicture(newData){
    return { type:QH_PICTURE, newData}
}

