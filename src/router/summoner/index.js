import React, { useEffect, useState } from 'react';
import DeathnoteBanner from '../../Components/DeathnoteBanner';
import DeathnoteHeader from '../../Components/DeathnoteHeader';
<<<<<<< HEAD
import DeathnoteReport from '../../Components/DeathnoteReport';
=======
import DeathnoteMainHeader from '../../Components/DeathnoteMainHeader';
import DeathnoteRank from '../../Components/DeathnoteRank';
>>>>>>> 261d218041abf20dad3b80bb3ed466308cea88e5
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
<<<<<<< HEAD
            <DeathnoteHeader />
            <DeathnoteReport />
        </div>
=======
        </>
>>>>>>> 261d218041abf20dad3b80bb3ed466308cea88e5
    );
};

export default Summoner;
