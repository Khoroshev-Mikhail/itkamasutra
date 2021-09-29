import axios from "axios"

const instance = axios.create({
    withCredentials : true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers : {
        'API-KEY' : '8784a7c6-90e0-4042-b569-47c17f15b044'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
                return response.data
            })
    },
    unFollow(id){
        return instance.delete(`follow/${id}`)
        .then(response => {
                return response.data
            })
    },
    follow(id){
        return instance.post(`follow/${id}`)
        .then(response => {
                return response.data
            })
    },
    getUserProfile(id){
        console.warn('Метод устарел, используйте метод и объекта profileAPI')
        return profileAPI.getUserProfile(id)
    }
}

export const authAPI = {
    getAuth(){
        return instance.get('auth/me')
    },
    getLogIn(){
        return instance.post('auth/login', {email : '89836993884@ya.ru', password : 'Araara14'})
    }
}

export const profileAPI = {
    getUserProfile(id){
        return instance.get(`profile/${id}`)
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status : status })
    }
}