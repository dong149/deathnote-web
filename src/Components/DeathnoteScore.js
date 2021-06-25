import React, { useState } from 'react';
import '../Styles/component/deathnoteScore.scss';
const DeathnoteScore = (props) => {
    const { data } = props;
    let tierColor;
    let tierName;
    let tierNick;

    const getTier = (score) => {
        let temp;
        let name;
        let nick;

        if (score >= 80) {
            temp = '#FF0061';
            name = 'Challenger';
            nick = '최고의 버스기사';
        } else if (score >= 70) {
            temp = '#00B3FC';
            name = 'Diamond';
            nick = '버스기사';
        } else if (score >= 60) {
            temp = '#28E3A3';
            name = 'Platinum';
            nick = '좀 잘하는 사람';
        } else if (score >= 50) {
            temp = '#EC9A01';
            name = 'Gold';
            nick = '1인분';
        } else if (score >= 40) {
            temp = '#435F7A';
            name = 'Silver';
            nick = '못하는 사람';
        } else {
            temp = '#AE5701';
            name = 'Bronze';
            nick = '완전 트롤러';
        }
        // setTierColor(temp);
        // setTierName(name);
        // setTierNick(nick);
        tierColor = temp;
        tierName = name;
        tierNick = nick;
    };
    getTier(data.trollerScore);
    return (
        <div className="DeathnoteScoreWrap">
            <div className="DeathnoteScoreText">Deathnote 점수</div>
            <div className="DeathnoteScore">
                <div
                    className="DeathnoteScoreTrollerWrap"
                    style={{ backgroundColor: `${tierColor}` }}
                >
                    <div className="DeathnoteScoreTroller">
                        <span className="DeathnoteScoreTrollerNum">
                            {data.trollerScore}
                        </span>
                        <span className="DeathnoteScoreTrollerSufix">점</span>
                    </div>
                </div>
                <div className="DeathnoteScoreTrollerCommentWrap">
                    <div className="DeathnoteScoreTrollerComment">
                        {' '}
                        {'"'} 당신은{' '}
                        <span style={{ color: `${tierColor}` }}>
                            {' '}
                            {tierNick}{' '}
                        </span>{' '}
                        입니다. {'"'}
                    </div>
                </div>
                {/* <div className="DeathnoteScoreTrollerTier">
                    Challenger
                </div> */}
                {/* <div className="DeathnoteScoreTrollerWrap">
                    <div className="DeathnoteScoreTroller">50점</div>
                </div> */}
            </div>
        </div>
    );
};

export default DeathnoteScore;
