import React, { useEffect, useState } from 'react';
import DeathnoteFooter from '../../Components/DeathnoteFooter';
import DeathnoteMainHeader from '../../Components/DeathnoteMainHeader';
import '../../Styles/router/deathnoteFunction.scss';

const DeathnoteFunction = () => {
    return (
        <>
            <DeathnoteMainHeader />
            <div
                style={{
                    margin: '0 auto',
                    width: '80%',
                    marginTop: '100px',
                    display: 'flex',
                    flexGrow: '0',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                }}
            >
                <div className="DeathnoteFunction">
                    <div className="DeathnoteFunctionContentWrap">
                        <div className="DeathnoteFunctionContentTitle">
                            <span
                                style={{ color: '#ff0061', fontWeight: 'bold' }}
                            >
                                Deathnote.gg
                            </span>
                            {'  '}
                            알고리즘이란?
                        </div>
                        <div className="DeathnoteFunctionContentImgWrap">
                            <img
                                className="DeathnoteFunctionContentImg"
                                src="/deathnote-function.png"
                                alt="알고리즘 설명 이미지"
                            />
                        </div>
                        <div className="DeathnoteFunctionContentDescription">
                            Deathnote.gg는 소환사의 트롤 여부를 검증하기 위해서
                            자체적으로 개발한 알고리즘을 사용하고 있습니다.
                            <br />
                            소환사의 최근 게임 데이터 정보를 바탕으로, 정제한 뒤
                            Deathnote.gg 모델에 데이터를 넣은 결과값을
                            사용자에게 보여주게 됩니다.
                            <br />
                            <br />
                            Deathnote.gg는 티어별로 소환사들의 정보를 주기적으로
                            수집하여 게임의 승패에 영향을 미치는 요소들을
                            분석합니다.
                            <br />
                            분석한 결과는 Machine Learning 모델을 이용하여
                            Deathnote.gg 알고리즘에 주기적으로 반영합니다.
                            <br />
                            게임 데이터뿐만 아니라, 유저의 평가 (Report)점수
                            또한 해당 지표에 반영되게 됩니다.
                        </div>
                    </div>
                </div>
            </div>
            <DeathnoteFooter />
        </>
    );
};

export default DeathnoteFunction;
