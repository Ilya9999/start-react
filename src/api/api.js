import * as axios from 'axios'
import { follow } from '../redux/users-reducer'

const instance = axios.create ({

        withCredentials: true,
        baseURL:`https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            'API-KEY': '17f7ab2b-d784-4911-a83d-3d0636885100'
        }

})

export const authAPI = {
    getAuth () {
        return instance.get(`auth/me`, {
        }).then(response => {
            return response.data
        })
    },

    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },

    logout () {
        return instance.delete(`auth/login`)
    }
    
}

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        if (!userId) {
            userId = 2
        }

        console.warn('Obsolete method , please use profileAPI object ')
        return profileAPI.getProfile(userId)
       
    }

}

export const profileAPI = {

    getProfile(userId) {
        if (!userId) {
            userId = 2
        }

        return instance.get(`profile/` + userId)
       
    }, 

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, {status:status})
    },

    savePhoto(photoFile){
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile(profile){
        return instance.put(`profile/`, profile)
    }

}



