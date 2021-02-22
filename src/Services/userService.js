import axios from 'axios';

let BASE_URL;

if (process.env.NODE_ENV === 'production') {
    BASE_URL = process.env.REACT_APP_BASE_URL;
} else {
    BASE_URL = 'http://localhost:3000';
}

const config = {
    crossdomain: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
};
const baseAPI = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});

// user 정보를 불러온다.
export const userService = {
    getUserInfo: async (token) => {
        console.log(token);
        try {
            const res = await baseAPI.get(`/v1/user?lang=ko`, {
                headers: { 'X-AUTH-TOKEN': token },
            });
            console.log(res);
            return res.data || [];
        } catch (err) {
            console.log('유저정보 불러오기 실패');
            return [];
        }
    },
};
