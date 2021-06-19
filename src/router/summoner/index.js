import React, { useEffect, useState } from 'react';
import DeathnoteHeader from '../../Components/DeathnoteHeader';
import DeathnoteSearch from '../../Components/DeathnoteSearchBox';
import { isEmpty } from '../../Functions';
import { deathnoteService } from '../../Services/deathnoteService';
import DeathnoteMatch from '../../Components/DeathnoteMatch';

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
            <DeathnoteMatch data={test}/>
        </div>
    );
};

export default Summoner;


const test =  
    {
        "status": 200,
        "message": "데이터 조회 성공",
        "data": {
          "summonerName": "Hide on bush",
          "trollerScore": 80,
          "matchCount": 10,
          "matchWinningRate": 50,
          "matchWin": 5,
          "matchLose": 0,
          "summonerLevel": 463,
          "summonerIcon": 6,
          "summonerTier": "CHALLENGER",
          "summonerRank": "I",
          "summonerMatch": [
            {
              "matchRank": 1,
              "matchWin": true,
              "matchChampion": 517,
              "matchKills": 12,
              "matchDeaths": 6,
              "matchAssists": 12,
              "matchDealRank": 1,
              "matchTankRank": 2,
              "matchKdaScoreRank": 2,
              "matchTowerDealRank": 1
            },
            {
              "matchRank": 1,
              "matchWin": true,
              "matchChampion": 131,
              "matchKills": 21,
              "matchDeaths": 5,
              "matchAssists": 6,
              "matchDealRank": 1,
              "matchTankRank": 3,
              "matchKdaScoreRank": 1,
              "matchTowerDealRank": 3
            },
            {
              "matchRank": 6,
              "matchWin": false,
              "matchChampion": 131,
              "matchKills": 2,
              "matchDeaths": 2,
              "matchAssists": 1,
              "matchDealRank": 7,
              "matchTankRank": 3,
              "matchKdaScoreRank": 7,
              "matchTowerDealRank": 2
            },
            {
              "matchRank": 8,
              "matchWin": false,
              "matchChampion": 84,
              "matchKills": 3,
              "matchDeaths": 7,
              "matchAssists": 2,
              "matchDealRank": 7,
              "matchTankRank": 3,
              "matchKdaScoreRank": 8,
              "matchTowerDealRank": 8
            },
            {
              "matchRank": 1,
              "matchWin": true,
              "matchChampion": 131,
              "matchKills": 5,
              "matchDeaths": 9,
              "matchAssists": 11,
              "matchDealRank": 1,
              "matchTankRank": 1,
              "matchKdaScoreRank": 7,
              "matchTowerDealRank": 2
            },
            {
              "matchRank": 1,
              "matchWin": true,
              "matchChampion": 236,
              "matchKills": 10,
              "matchDeaths": 3,
              "matchAssists": 4,
              "matchDealRank": 1,
              "matchTankRank": 6,
              "matchKdaScoreRank": 2,
              "matchTowerDealRank": 1
            },
            {
              "matchRank": 8,
              "matchWin": false,
              "matchChampion": 517,
              "matchKills": 7,
              "matchDeaths": 5,
              "matchAssists": 8,
              "matchDealRank": 6,
              "matchTankRank": 4,
              "matchKdaScoreRank": 7,
              "matchTowerDealRank": 10
            },
            {
              "matchRank": 1,
              "matchWin": true,
              "matchChampion": 517,
              "matchKills": 12,
              "matchDeaths": 1,
              "matchAssists": 5,
              "matchDealRank": 1,
              "matchTankRank": 4,
              "matchKdaScoreRank": 1,
              "matchTowerDealRank": 3
            },
            {
              "matchRank": 6,
              "matchWin": false,
              "matchChampion": 84,
              "matchKills": 0,
              "matchDeaths": 5,
              "matchAssists": 2,
              "matchDealRank": 5,
              "matchTankRank": 2,
              "matchKdaScoreRank": 8,
              "matchTowerDealRank": 7
            },
            {
              "matchRank": 2,
              "matchWin": false,
              "matchChampion": 84,
              "matchKills": 7,
              "matchDeaths": 1,
              "matchAssists": 1,
              "matchDealRank": 2,
              "matchTankRank": 5,
              "matchKdaScoreRank": 2,
              "matchTowerDealRank": 5
            }
          ]
        }
      };
