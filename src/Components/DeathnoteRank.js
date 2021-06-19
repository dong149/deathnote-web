import React from 'react';
import '../Styles/component/deathnoteRank.scss';
const DeathnoteRank = () => {
    /*
비즈니스 로직
*/


    return <div className="Rank_side_content">
                <div className="Rank_banner">
                    <div className="Rank_Summoner_Medium">
                        <div className="Rank_image_wrap">
                            <img src="/ranked-emblems/Emblem_CHALLENGE.png" className="Rank_image"/>
                        </div>
                        <div className="Rank_text">
                            <div className="Rank_type">솔로랭킹</div>
                            <div className="Rank_tier"> Challenger </div>
                            <div className="Rank_info">
                                <span className="Rank_points"> 1,435 LP </span>
                                 / 
                                <span className="Rank_WinLose">
                                    <span className="Rank_wins"> 298 승 </span>
                                    <span className="Rank_losses"> 228 패 </span>
                                    <br></br>
                                    <span className="Rank_winratio">승률 57%</span>
                                </span>  
                            </div> 
                        </div>
                    </div>
                </div>
            </div>;

};

export default DeathnoteRank;
