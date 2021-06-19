import React, { useEffect, useState } from 'react';
import DeathnoteHeader from '../../Components/DeathnoteHeader';
import { deathnoteService } from '../../Services/deathnoteService';

const Summoner = ({ match }) => {
    // 소환사 이름
    const summonerName = match.params.name;
    const [deathtnoteData, setDeathnoteData] = useState([]);

    useEffect(() => {
        deathnoteService.getDeathnoteByName(summonerName).then((data) => {
            setDeathnoteData(data);
            console.log(data);
        });
        // return () => {
        //     cleanup
        // }
    }, []);

    return (
        <div>
            <h1 style={{ color: 'white' }}>이게 바로 데스노트 Summoner 다!!</h1>
            <h2 style={{ color: 'white' }}>{match.params.name}</h2>
            <DeathnoteHeader />
        </div>
    );
};

export default Summoner;
