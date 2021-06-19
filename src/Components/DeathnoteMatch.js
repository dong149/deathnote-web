import React, {useState} from 'react';
import { getChampionNamebyId } from '../champion';
import '../Styles/component/deathnoteMatch.scss';
import Pagination from 'react-js-pagination';



const isEmpty = function (value) {
    if (
        value == '' ||
        value == null ||
        value == undefined /*||
        (value != null &&
            typeof value == 'object' &&
            !Object.keys(value).length)*/
    ) {
        return true;
    } else {
        return false;
    }
};



const Paging = () => {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    }
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={5}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handlePageChange}
            />
    )
}

const DeathnoteMatch = (props) => {  


    return(
        <>
        
            <div className="DeathnoteMatch">
        {!isEmpty(props.data.data.summonerMatch) &&
            props.data.data.summonerMatch.map((data, key) => {
                const championName = getChampionNamebyId(
                    String(data.matchChampion)
                );
                if (data.matchWin) {
                    return (
                        <div className="summonerMatchWin">
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${championName}.png`}
                            />
                            <div className="summonerMatchRank">
                                {data.matchRank}등
                            </div>
                            <div className="summonerMatchKDA">
                                {data.matchKills}/{data.matchDeaths}
                                /{data.matchAssists}
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="summonerMatchLose">
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${championName}.png`}
                            />
                            <div className="summonerMatchRank">
                                {data.matchRank}등
                            </div>
                            <div className="summonerMatchKDA">
                                {data.matchKills}/{data.matchDeaths}
                                /{data.matchAssists}
                            </div>
                        </div>
                    );
                }
            })
        }
            </div>
        </>
    )
};



export default DeathnoteMatch;
