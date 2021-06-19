import React, { useEffect, useState } from 'react';
import DeathnoteHeader from '../../Components/DeathnoteHeader';
import DeathnoteSearch from '../../Components/DeathnoteSearchBox';
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
            <DeathnoteSearch/>
        </div>
    );
};

export default Summoner;
