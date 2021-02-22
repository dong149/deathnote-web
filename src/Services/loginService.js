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
export const loginService = {
    postKakaoLogin: async (accessToken, name) => {
        console.log(accessToken);
        await baseAPI
            .post(`/v1/signin/kakao?accessToken=${accessToken}`)
            .then((res) => {
                console.log('카카오톡으로 로그인');
                console.log(res.data);
                if (res.data.data) {
                    localStorage.setItem(
                        'token',
                        JSON.stringify(res.data.data)
                    );
                    console.log('등록되었습니다.');
                }
                return true;
            })
            .catch((err) => {
                console.log(err);
                console.log('카카오톡으로 회원가입 실패');
                return false;
            });
    },
};
