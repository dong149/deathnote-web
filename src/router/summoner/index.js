import React, { useEffect, useState } from 'react';
import DeathnoteHeader from '../../Components/DeathnoteHeader';
import DeathnoteReport from '../../Components/DeathnoteReport';
import DeathnoteSearch from '../../Components/DeathnoteSearchBox';
import { isEmpty } from '../../Functions';
import { deathnoteService } from '../../Services/deathnoteService';

const Summoner = ({ match }) => {
    // 소환사 이름
    const summonerName = match.params.name;
    const [deathtnoteData, setDeathnoteData] = useState({});

    useEffect(() => {
        deathnoteService.getDeathnoteByName(summonerName).then((data) => {
            setDeathnoteData(data);
            console.log(data);
        });
    }, []);

    return (
        <div>
            {!isEmpty(deathtnoteData) && (
                <div>
                    <h2 style={{ color: 'white' }}>
                        {deathtnoteData.data.summonerTier}
                    </h2>
                </div>
            )}
            <DeathnoteHeader />
            <DeathnoteReport />
        </div>
    );
};

export default Summoner;
