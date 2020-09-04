import Axios from "axios";

const myAxios = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '222e1797-048d-4167-a8a3-fcdcb43ded32'
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
    }
}

export const authApi = {
    me() {
        return myAxios
            .get(`auth/me`)
            .then((response) => {
            return response.data;
        });
    }
}