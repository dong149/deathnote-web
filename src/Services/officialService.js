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
export const officialService = {
    getOfficialByUid: async (uid, token) => {
        try {
            const res = await baseAPI.get(`/v1/official?uid=${uid}`, {
                headers: { 'X-AUTH-TOKEN': token },
            });
            console.log(res);
            return res.data || [];
        } catch (err) {
            console.log('공지사항 불러오기 실패');
            return [];
        }
    },
    postOfficial: async (title, description, uid) => {
        const formData = new FormData();
        formData.append('title', title.toString());
        formData.append('description', description.toString());
        formData.append('uid', uid.toString());
        // console.log(title, description);
        try {
            const res = await baseAPI.post(`/v1/official`, formData);
            console.log(res);
            return res.data || [];
        } catch (err) {
            console.log('공지사항 불러오기 실패');
            return [];
        }
    },
};
