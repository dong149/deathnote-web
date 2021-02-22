import { Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import { isEmpty } from '../../Functions';
import { officialService } from '../../Services/officialService';
import { userService } from '../../Services/userService';

const MyPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [official, setOfficial] = useState();
    const [token, setToken] = useState('');
    const [uid, setUid] = useState('');
    useEffect(() => {
        // token 이 없을경우
        if (!localStorage.getItem('token')) {
            console.log(window.history);
            window.history.pushState('', '', '/');
            window.location.reload();
        } else {
            console.log(JSON.parse(localStorage.getItem('token')));
            setToken(JSON.parse(localStorage.getItem('token')));
            const getToken = async (token) => {
                try {
                    await userService.getUserInfo(token).then((res) => {
                        if (!isEmpty(res)) {
                            setUid(res.data.uid);
                            console.log(res);
                            return;
                        }
                    });
                } catch (err) {
                    console.log(err);
                    return;
                }
            };
            if (!isEmpty(token)) {
                getToken(token);
                console.log(token);
            }
        }
    }, [token]);

    const onSubmit = async (title, description, uid) => {
        console.log(uid);
        try {
            await officialService
                .postOfficial(title, description, uid)
                .then((res) => {
                    if (!isEmpty(res)) {
                        setOfficial(res.data);
                    }
                });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <h1>공지사항 생성기</h1>
            <h3>제목을 입력해주세요.</h3>
            <input
                maxLength="30"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <h3>내용을 입력해주세요.</h3>
            <textarea
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <p>
                <button onClick={() => onSubmit(title, description, uid)}>
                    제출하기
                </button>
            </p>
            {!isEmpty(official) && (
                <textarea
                    rows="10"
                    style={{ width: '300px', whiteSpace: 'pre-line' }}
                    value={official}
                />
            )}
        </div>
    );
};

export default MyPage;
