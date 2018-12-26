import axios from 'axios'
import {Notification} from 'element-ui'
import store from '../../store'

// 创建axios实例
const service = axios.create({
    baseURL: '/api', // api 的 base_url
    timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        /*if (store.getters.user.token) {
          config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }*/
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非success是抛错
         */
        const res = response.data
        if (res.status !== '200') {
            Notification.error({
                title: '错误提示',
                message: res.msg,
                type: 'error',
            })

            //  logout:Token 过期了;
            if (res.code === 'logout' || res.code === 50012 || res.code === 50014) {
                Notification.warning({
                    title: '温馨提示',
                    message: res.msg,
                    type: 'warning',
                    onClose: function() {
                        store.dispatch('LogOut').then(() => {
                            location.reload()
                        })
                    }
                })
            }
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        Notification.error({
            title: '错误提示',
            message: error.message,
            type: 'error'
        })
        return Promise.reject(error)
    }
)

export default service
