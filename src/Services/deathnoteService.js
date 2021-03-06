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
    getReportByAccountId: async (accountId) => {
        try {
            const res = await baseAPI.get(
                `api/v1/report?accountId=${accountId}`
            );
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
    getDeathnoteTrollerRank: async (num) => {
        try {
            const res = await baseAPI.get(
                `api/v1/deathnote/troller/rank?num=${num}`
            );
            return res.data.data || [];
        } catch (err) {
            console.log('랭킹 정보 조회 실패');
            return [];
        }
    },
    getDeathnoteByKeyword: async (keyword) => {
        try {
            const res = await baseAPI.get(
                `api/v1/deathnote/summoner/keyword?keyword=${keyword}`
            );
            return res.data.data || [];
        } catch (err) {
            console.log('키워드 검색 실패');
            return [];
        }
    },

    postNoteByAccountId: async (accountId, title, content) => {
        try {
            const res = await baseAPI.post(`api/v1/note`, {
                accountId: accountId,
                title: title,
                content: content,
            });
            return res.data || [];
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    getDeathnoteRecentNote: async () => {
        try {
            const res = await baseAPI.get(`api/v1/note/recent`);
            return res.data.data || [];
        } catch (err) {
            console.log('최근 Note 검색 실패');
            return [];
        }
    },

    getDeathnoteNoteByAccountId: async (accountId) => {
        try {
            const res = await baseAPI.get(`api/v1/note?accountId${accountId}`);
            return res.data.data || [];
        } catch (err) {
            console.log('Note by AccountId 조회 실패');
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
