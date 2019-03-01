// 登录
// export function getLogin(condition, callback) {
//     request('get', '/public/login', condition)
//         .then((response) => {
//             callback(response);
//         }, (err) => {
//             console.log(err);
//         });
// }


export function getQhPicture(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                resolve(response)
            })
    })
}

