import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "60326824-2d1f-471c-b3c5-78606849bdb2"
    }
})

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId){
        return instance.post(`/follow/${userId}`)


    },
    unfollow(userId){
        return instance.delete(`/follow/${userId}`)

    },
    getProfile(userId){
        return profileApi.getProfile(userId);
      
    }
}
export const profileApi = {
    getProfile(userId){
        return instance.get(`/profile/` + userId);
      
    },
    getStatus(userId){
        return instance.get('profile/status/'+ userId)
    },
    updateStatus(status){
        return instance.put('profile/status', {status:status} )

    }
}

export const authAPI = {
    me(){
        return instance.get(`/auth/me`);
    },
    login(email, password, rememberMe=false){
        return instance.post (`auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`)
    }
   
}

