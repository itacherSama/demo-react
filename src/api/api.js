import Axios from "axios";

const myAxios = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c83e6aa8-dbfa-49be-b7d3-7b2a90eeee34'
    }

});

export const usersApi = {
    getUsers(currentPage, pageSize){
        return myAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    userUnfollow(id) {
        return myAxios.delete(`follow/${id}`)
            .then((response) => {
                return response.data;
            });
    },
    userFollow(id) {
        return myAxios.post(`follow/${id}`)
            .then((response) => {
                return response.data;
            });
    }

}

export const profileApi = {
    getProfile(userId) {
        return myAxios
            .get(`profile/${userId}`)
            .then((response) => {
            return response.data;
        });
    },
    getUserStatus(userId) {
        return myAxios
            .get(`profile/status/${userId}`).then((response) => {
                return response.data;
            });
    },
    updateUserStatus(status) {
        return myAxios
            .put(`profile/status`,{status}).then((response) => {
                return response.data;
            });
    }
}

export const authApi = {
    me() {
        return myAxios
            .get(`auth/me`)
            .then((response) => {
            return response.data;
        });
    },
    login(email, password, rememberMe = false) {
        return myAxios
            .post(`auth/login`, {email, password, rememberMe})
            .then((response) => {
                return response.data;
            });
    },
    logout() {
        return myAxios
            .delete(`auth/login`)
            .then((response) => {
                return response.data;
            });
    }
}