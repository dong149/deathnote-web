import React, { useState } from 'react';
import '../Styles/component/deathnoteReport.scss';
import { Doughnut } from 'react-chartjs-2';
import { isEmpty } from '../Functions';
import { deathnoteService } from '../Services/deathnoteService';
const DeathnoteReport = (props) => {
    const { reportData, accountId, summonerName } = props;
    const [reportType, setReportType] = useState(false);
    const [reportContent, setReportContent] = useState('');
    const [reports, setReports] = useState(reportData.data);
    const [reportViewOpen, setReportViewOpen] = useState(false);

    const onSubmit = () => {
        deathnoteService
            .postReportByName(
                reportContent,
                accountId,
                !reportType,
                summonerName
            )
            .then((data) => {
                if (data.status == 201) alert('성공');
                else alert('실패');
            });
    };

    let ReportChart = () => {
        let data = {
            datasets: [
                {
                    data: [reportData.reportCount, reportData.noReportCount],
                    backgroundColor: ['#1A1D20', 'rgba(0,0,0,0.1)'],
                    borderColor: ['#ffffff', '#ffffff'],
                    hoverBackgroundColor: ['#FF0100', '#56C1FF'],
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
        <div className="Report">
            <div className="report-chart-wrap">
                <div className="report-chart-text">
                    <span>그래프</span>
                </div>
                <ReportChart />
            </div>
            {/* <div className="ReportChart">Chart</div> */}
            {/* <div className="ReportContents">ReportContents</div>
            <div className="ReportInputForm">Input</div> */}
            <div className="summoner-review-wrap">
                <div className="summoner-review">
                    <div className="summoner-review-text-wrap">
                        <div className="summoner-review-text">
                            <span>평가하기</span>
                        </div>

                        <div className="summoner-review-type">
                            {/* <span className="summoner-review-type-text">
                                MODE :{' '}
                            </span> */}
                            <div
                                className="summoner-review-type-bad-wrap"
                                onClick={() => setReportType(!reportType)}
                            >
                                <span className="summoner-review-type-bad">
                                    리폿
                                </span>
                            </div>
                            <div
                                className="summoner-review-type-good-wrap"
                                onClick={() => setReportType(!reportType)}
                            >
                                <span className="summoner-review-type-good">
                                    칭찬
                                </span>
                            </div>
                        </div>
                    </div>
                    {reportType ? (
                        <>
                            <div className="summoner-review-good-input-wrap">
                                <textarea
                                    className="summoner-review-good-input"
                                    onChange={(e) =>
                                        setReportContent(e.target.value)
                                    }
                                    rows="4"
                                    value={reportContent}
                                    placeholder="칭찬을 작성해주세요!"
                                    // onKeyPress={onReviewGoodKeyPress}
                                />
                            </div>
                            <div className="summoner-review-btn-wrap">
                                <span
                                    className="summoner-review-submit-btn"
                                    onClick={() => onSubmit()}
                                >
                                    제출하기
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="summoner-review-bad-input-wrap">
                                <textarea
                                    className="summoner-review-bad-input"
                                    onChange={(e) =>
                                        setReportContent(e.target.value)
                                    }
                                    rows="4"
                                    value={reportContent}
                                    placeholder="리폿을 작성해주세요!"
                                    // onKeyPress={onReviewBadKeyPress}
                                />
                            </div>
                            <div className="summoner-review-btn-wrap">
                                <span
                                    className="summoner-review-submit-btn"
                                    onClick={() => onSubmit()}
                                >
                                    제출하기
                                </span>
                            </div>
                        </>
                    )}
                    {/* 소환사 리뷰 view */}
                    <div className="review-view-text">평가</div>
                    <div
                        className="review-view"
                        style={{
                            overflow: reportViewOpen ? 'visible' : 'hidden',
                            height: reportViewOpen ? 'auto' : '300px',
                            // backgroundColor: reviewViewOpen ? "white" : "rgba(0,0,0,0.8)",
                        }}
                    >
                        {!isEmpty(reports) &&
                            reports.map((data, key) => {
                                if (data.report) {
                                    return (
                                        <div
                                            key={key}
                                            className="review-view-bad"
                                        >
                                            <div className="review-view-date-bad-wrap">
                                                <span className="review-view-date-bad">
                                                    {/* {handleDate(
                                            data.date
                                        )} */}
                                                    10개월 전
                                                </span>
                                            </div>
                                            <div className="review-view-content-bad-wrap">
                                                <span className="review-view-content-bad">
                                                    {data.content}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            key={key}
                                            className="review-view-good"
                                        >
                                            <div className="review-view-date-good-wrap">
                                                <span className="review-view-date-good">
                                                    10개월 전
                                                    {/* {handleDate(
                                            data.date
                                        )} */}
                                                </span>
                                            </div>
                                            <div className="review-view-content-good-wrap">
                                                <span className="review-view-content-good">
                                                    {data.content}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                    </div>

                    {!isEmpty(reports) ? (
                        <>
                            {reportViewOpen ? (
                                <div
                                    className="review-view-close-btn-wrap"
                                    onClick={() => {
                                        setReportViewOpen(!reportViewOpen);
                                    }}
                                >
                                    <span className="review-view-close-btn">
                                        닫기
                                    </span>
                                </div>
                            ) : (
                                <div
                                    className="review-view-open-btn-wrap"
                                    onClick={() => {
                                        setReportViewOpen(!reportViewOpen);
                                    }}
                                >
                                    <span className="review-view-open-btn">
                                        펼치기
                                    </span>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="review-none-wrap">
                            <span>비어있습니다. 작성해주세요!</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DeathnoteReport;
