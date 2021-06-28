import axios from 'axios';

let BASE_URL;
BASE_URL = process.env.REACT_APP_BASE_URL;
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
    getDeathnoteByName: async (summonerName, reload) => {
        try {
            const res = await baseAPI.get(
                `api/v1/deathnote/summoner?${summonerName}&reload=${reload}`
            );
            // console.log(res);
            return res.data.data || [];
        } catch (err) {
            console.log('데스노트 데이터 받기 실패');
            return [];
        }
    },
    getReportByName: async (summonerName) => {
        try {
            const res = await baseAPI.get(`api/v1/report?${summonerName}`);
            // console.log(res);
            return res.data || reportDefaultData;
        } catch (err) {
            console.log('Report 데이터 받기 실패');
            return [];
        }
    },
    postReportByName: async (content, accountId, report, summonerName) => {
        try {
            const res = await baseAPI.post(`api/v1/report`, {
                content: content,
                accountId: accountId,
                report: report,
                summonerName: summonerName,
            });
            // console.log(res);
            return res.data || [];
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    getDeathnoteByKeyword: async (keyword) => {
        try {
            const res = await baseAPI.get(
                `api/v1/deathnote/summoner/keyword?keyword=${keyword}`
            );
            // console.log(res);
            return res.data.data || [];
        } catch (err) {
            console.log('키워드 검색 실패');
            return [];
        }
    },
};

const reportDefaultData = {
    reportCount: 1,
    noReportCount: 0,
    data: [
        {
            reportId: 0,
            content: '소환사에 대해 리뷰를 남겨주세요.',
            report: true,
        },
    ],
};
