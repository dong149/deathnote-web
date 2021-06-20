import React, { useEffect, useState } from 'react';
import DeathnoteBanner from '../../Components/DeathnoteBanner';
import DeathnoteHeader from '../../Components/DeathnoteHeader';
import DeathnoteMainHeader from '../../Components/DeathnoteMainHeader';
import DeathnoteMatch from '../../Components/DeathnoteMatch';
import DeathnoteRank from '../../Components/DeathnoteRank';
import DeathnoteReport from '../../Components/DeathnoteReport';
import DeathnoteSearch from '../../Components/DeathnoteSearchBox';
import { isEmpty } from '../../Functions';
import { deathnoteService } from '../../Services/deathnoteService';

const Summoner = ({ match }) => {
    // 소환사 이름
    const summonerName = match.params.name;
    const [deathtnoteData, setDeathnoteData] = useState({});
    const [reportData, setReportData] = useState({});
    useEffect(() => {
        deathnoteService
            .getDeathnoteByName(summonerName, false)
            .then((data) => {
                setDeathnoteData(data);
                console.log(data);
            });
    }, []);

    useEffect(() => {
        deathnoteService.getReportByName(summonerName).then((data) => {
            setReportData(data);
            console.log(data);
        });
    }, []);

    return (
        <>
            {isEmpty(deathtnoteData) || isEmpty(reportData) ? (
                <h1 style={{ color: 'white' }}>로딩중입니다..</h1>
            ) : (
                <div
                    style={{
                        margin: '0 auto',
                        width: '80%',
                        display: 'flex',
                        flexGrow: '0',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                    }}
                >
                    <DeathnoteMainHeader data={deathtnoteData} />
                    <DeathnoteHeader data={deathtnoteData} />
                    <DeathnoteRank data={deathtnoteData} />
                    <DeathnoteReport
                        reportData={reportData}
                        accountId={deathtnoteData.accountId}
                        summonerName={deathtnoteData.summonerName}
                    />
                </div>
            )}
        </>
    );
};

export default Summoner;
