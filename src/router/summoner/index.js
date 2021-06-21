import React, { useEffect, useState } from 'react';
import DeathnoteBanner from '../../Components/DeathnoteBanner';
import DeathnoteFooter from '../../Components/DeathnoteFooter';
import DeathnoteHeader from '../../Components/DeathnoteHeader';
import DeathnoteLoading from '../../Components/DeathnoteLoading';
import DeathnoteMainHeader from '../../Components/DeathnoteMainHeader';
import DeathnoteMatch from '../../Components/DeathnoteMatch';
import DeathnoteRank from '../../Components/DeathnoteRank';
import DeathnoteReport from '../../Components/DeathnoteReport';
import DeathnoteSearch from '../../Components/DeathnoteSearchBox';
import { isEmpty } from '../../Functions';
import { deathnoteService } from '../../Services/deathnoteService';
import '../../Styles/router/summoner.scss';
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
                <div className="SummonerLoadingWrap">
                    <DeathnoteLoading />
                    <div
                        className="mainDeathnoteDescription"
                        style={{ marginTop: '50px' }}
                    >
                        Powered By{' '}
                        <span style={{ color: '#FF0061', fontWeight: 'bold' }}>
                            Deathnote(x)
                        </span>
                    </div>
                    <div className="SummonerLoading">
                        최대 1분 정도 소요될 수 있습니다.
                        <br />
                        조금만 기다려주세요!
                    </div>
                </div>
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
                    <DeathnoteMainHeader />
                    <DeathnoteHeader data={deathtnoteData} />
                    <DeathnoteRank data={deathtnoteData} />
                    <DeathnoteReport
                        reportData={reportData}
                        accountId={deathtnoteData.accountId}
                        summonerName={deathtnoteData.summonerName}
                    />
                </div>
            )}
            <DeathnoteFooter />
        </>
    );
};

export default Summoner;
