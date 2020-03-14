import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ca1dc8a0-f4f2-4de2-85ac-647cb0320e99"
    }

})

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId){
        console.warn('Obsolet methos. Please ProfileAPI Object')
        return ProfileAPI.getProfile(userId)
    },
}

export const ProfileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put('profile/status', {
            status: status
        })
    }
}

export const AuthAPI = {
    getMe(){
        return  instance.get('auth/me')
    },
    login(email, password, rememberMe = false){
        return instance.post('auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe,
        })},
    logout(){
        return instance.delete('auth/login')
    }
}