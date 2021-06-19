import '../Styles/component/deathnoteReport.scss';
import React, { useEffect, useState } from 'react';
import { getChampionNamebyId } from '../champion';
import { isEmpty } from '../Functions';
import { deathnoteService } from '../Services/deathnoteService';
import { Doughnut } from 'react-chartjs-2';
import '../Styles/router/main.scss';



const DeathnoteReport = () => {
<<<<<<< HEAD
    /*
비즈니스 로직
*/
    let ReportChart = () => {
        let data = {
            datasets: [
                {
                    data: [50, 50],
                    backgroundColor: ['rgba(0,0,0,0.1)', 'rgba(0,0,0, 1)',],
                    borderColor: ['#ffffff', '#ffffff'],
                    hoverBackgroundColor: ['#56C1FF', '#FF0100'],
                },
            ],
            labels: ['칭찬','리폿' ],
        };
        let options = {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
        };
        return <Doughnut data={data} options={options} className="DoughnutChart" />;
    };

    return (
        <div className="ReportMainBox">
            <div className="ReportChart">
                <ReportChart />
            </div>
            <div className="ReportBox">
                alsdkjlakdjf
            
                <div className="ReportWindow">
                    
                </div>
                
                <form >
                    <input type="text" className="ReportInput" placeholder="리뷰를 남겨주세요"></input>
                </form>
            </div>
        </div>


    );
=======
    return <div className="test">DeathnoteHeader</div>;
>>>>>>> 261d218041abf20dad3b80bb3ed466308cea88e5
};




export default DeathnoteReport;
