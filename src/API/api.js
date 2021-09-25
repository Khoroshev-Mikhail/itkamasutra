import axios from "axios"

const instance = axios.create({
    withCredentials : true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers : {
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
    },
    getUserProfile(id){
        console.warn('Метод устарел, используйте метод и объекта profileAPI')
        return profileAPI.getUserProfile(id)
    }
}

export const authAPI = {
    getAuth(){
        return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')
    }
}

export const profileAPI = {
    getUserProfile(id){
        return instance.get(`profile/${id}`)
    },
    getStatus(id){
        return instance.get('profile/status/' + id)
    },
    updateStatus(status){
        return instance.put('profile/status', { status : status})
    }
}