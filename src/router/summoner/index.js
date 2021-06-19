import React, { useEffect, useState } from 'react';
import DeathnoteBanner from '../../Components/DeathnoteBanner';
import DeathnoteHeader from '../../Components/DeathnoteHeader';
import DeathnoteMainHeader from '../../Components/DeathnoteMainHeader';
import DeathnoteRank from '../../Components/DeathnoteRank';
import DeathnoteSearch from '../../Components/DeathnoteSearchBox';
import { isEmpty } from '../../Functions';
import { deathnoteService } from '../../Services/deathnoteService';

const Summoner = ({ match }) => {
    // 소환사 이름
    const summonerName = match.params.name;
    const [deathtnoteData, setDeathnoteData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        deathnoteService
            .getDeathnoteByName(summonerName, false)
            .then((data) => {
                setDeathnoteData(data);
                setIsLoading(false);
                console.log(data);
            });
    }, []);

    return (
        <>
            {isEmpty(deathtnoteData) ? (
                <h1 style={{ color: 'white' }}>로딩중입니다..</h1>
            ) : (
                <div style={{ margin: '0 auto', width: '80%' }}>
                    <DeathnoteMainHeader data={deathtnoteData} />
                    <DeathnoteHeader data={deathtnoteData} />
                    <DeathnoteRank data={deathtnoteData} />
                </div>
            )}
        </>
    );
};

export default Summoner;
