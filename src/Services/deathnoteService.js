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
export const deathnoteService = {
    getDeathnoteByName: async (name) => {
        try {
            const res = await baseAPI.get(`/v1/summoner/info?name=${name}`);
            console.log(res);
            return res.data || [];
        } catch (err) {
            console.log('데스노트 데이터 받기 실패');
            return [];
        }
    },
};
