import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../Styles/component/deathnoteReportGraph.scss';
const DeathnoteReportGraph = (props) => {
    const { reportData } = props;
    const ReportGraph = () => {
        let data = {
            datasets: [
                {
                    data: [reportData.reportCount, reportData.noReportCount],
                    backgroundColor: ['#ff0061', '#00b3fc'],
                    borderColor: ['#ff0061', '#00b3fc'],
                    hoverBackgroundColor: ['#ff0061', '#00b3fc'],
                },
            ],
            labels: ['리폿', '칭찬'],
        };
        let options = {
            // responsive: true,
            maintainAspectRatio: false,
            animation: false,
        };
        return <Doughnut data={data} width={50} options={options} />;
    };
    return (
        <div className="DeathnoteReportGraphWrap">
            <div className="DeathnoteReportGraphText">그래프</div>
            <div className="DeathnoteReportGraph">
                <ReportGraph />
            </div>
        </div>
    );
};

export default DeathnoteReportGraph;
