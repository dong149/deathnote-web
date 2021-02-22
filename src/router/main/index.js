import React, { useEffect, useState } from 'react';
import { loginService } from '../../Services/loginService';
// import KakaoLogin from 'react-kakao-login';

// 회원가입이 되어있는지 확인하기 위해 /v1/signin/{provider} 로 요청한 이후에
//

const Main = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        window.Kakao.init('7c8e56dd4982c3c61e61359952462cfa');
        console.log(window.Kakao);
    }, []);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            console.log(window.history);
            window.history.pushState('', '', '/mypage');
            window.location.reload();
        }
    }, [isLogin]);
    const loginWithKakao = () => {
        try {
            return new Promise((resolve, reject) => {
                if (!window.Kakao) {
                    reject('Kakao 인스턴스가 존재하지 않습니다.');
                }
                window.Kakao.Auth.login({
                    success: (auth) => {
                        console.log('정상적으로 로그인 되었습니다.', auth);
                        loginService.postKakaoLogin(auth.access_token, 'ryoo');
                        setIsLogin(true);
                    },
                    fail: (err) => {
                        console.log(err);
                    },
                });
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <h1>Random Campus</h1>
            <p>
                <div>
                    <img
                        src="/kakao/kakao_login_medium_wide.png"
                        alt="kakao login btn"
                        onClick={() => loginWithKakao()}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                {/* <KakaoLogin
                    jsKey="c8e56dd4982c3c61e61359952462cfa"
                    onSuccess={handleKakaoSuccess}
                    onFailure={handleKakaoFail}
                    className="KakaoLogin"
                /> */}
                {/* </KakaoLogin> */}
                {/* <button>카카오톡 로그인</button> */}
            </p>
        </div>
    );
};

export default Main;
