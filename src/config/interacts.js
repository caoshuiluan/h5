// created byCrystal 2019/3/21
import axios from 'axios'
let token = "43dadb3b7d8e481b9d9f86727bbe49de5320gt";
export function getByToken(url, params = {}) {
    params["loginToken"] = token;
    if (Object.keys(params).length > 0) {
        var queryString = '';
        for (var key in params) {
            queryString += '&' + key + '=' + params[key];
        }
        queryString = queryString.substring(1);
        url += '?' + queryString;
    }

    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers: {
                "Content-Type": 'application/json;charset=UTF-8'
            }
        }).then((response) => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
            .catch((error) => {
                reject(error)
            })
    })
}
export function get(url, params = {}) {
    if (Object.keys(params).length > 0) {
        var queryString = '';
        for (var key in params) {
            queryString += '&' + key + '=' + params[key];
        }
        queryString = queryString.substring(1);
        url += '?' + queryString;
    }

    return new Promise((resolve, reject) => {
        axios.get(url).then((response) => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
            .catch((error) => {
                reject(error)
            })
    })
}
export function post(url, params = {}, config = {}) {
    let contentType = 'application/json;charset=UTF-8';
    if (config && config.contentType) {
        contentType = config.contentType;
    }
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: params,
            headers: {
                "Content-Type": contentType
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            // alert("连接错误，请联系管理员");
            console.log(err);
        })
    })
}
export function postParams(url, params = {}, config = {}) {
    let contentType = 'application/json;charset=UTF-8';
    if (config && config.contentType) {
        contentType = config.contentType;
    }
    params["loginToken"] = token;
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: params,
            //data:{loginToken:"e0777b3272634897942ace1888dbeee0ll30qp"},
            dataType: "json",
            headers: {
                "Content-Type": contentType
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            console.log(err);
        })
    })
}
export default {
    getByToken,
    postParams,
    post,
    get
}
