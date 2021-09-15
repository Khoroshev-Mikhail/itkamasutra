import axios from "axios"

const instance = axios.create({
    withCredentials : true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    header : {
        'API-KEY' : 'a80ae102-d664-47c8-8d59-34949491d722'
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
    }
}
