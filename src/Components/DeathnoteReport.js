import React, { useState } from 'react';
import '../Styles/component/deathnoteReport.scss';
import { Doughnut } from 'react-chartjs-2';
import { handleDate, isEmpty } from '../Functions';
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
                window.location.reload();
                // if (data.status == 201) alert('성공');
                // else alert('실패');
            });
    };

    return (
        <div className="DeathnoteReportWrap">
            <div className="DeathnoteReportText">
                <span style={{ fontWeight: 'bold' }}>{summonerName}</span> 평가
            </div>
            <div className="DeathnoteReport">
                {!isEmpty(reports) &&
                    reports
                        .slice(0)
                        .reverse()
                        .map((data, key) => {
                            if (data.report) {
                                return (
                                    <div
                                        key={key}
                                        className="DeathnoteReportItemWrap"
                                    >
                                        <div className="DeathnoteReportItem">
                                            <div className="DeathnoteReportItemDateWrap">
                                                <span className="DeathnoteReportItemDate">
                                                    {handleDate(data.createdAt)}
                                                </span>
                                            </div>
                                            <div className="DeathnoteReportItemTextWrap">
                                                <span className="DeathnoteReportItemText">
                                                    {data.content}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        key={key}
                                        className="DeathnoteNonReportItemWrap"
                                    >
                                        <div className="DeathtnoteNonReportItem">
                                            <div className="DeathnoteNonReportItemDateWrap">
                                                <span className="DeathnoteNonReportItemDate">
                                                    {handleDate(data.createdAt)}
                                                </span>
                                            </div>
                                            <div className="DeathnoteNonReportItemTextWrap">
                                                <span className="DeathnoteNonReportItemText">
                                                    {data.content}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
            </div>
        </div>
        // <div className="Report">

        //     <div className="summoner-review-wrap">
        //         <div className="summoner-review">
        //             <div className="summoner-review-text-wrap">
        //                 <div className="summoner-review-text">
        //                     <span>평가하기</span>
        //                 </div>

        //                 <div className="summoner-review-type">
        //                     {/* <span className="summoner-review-type-text">
        //                         MODE :{' '}
        //                     </span> */}
        //                     <div
        //                         className="summoner-review-type-bad-wrap"
        //                         onClick={() => setReportType(!reportType)}
        //                     >
        //                         <span className="summoner-review-type-bad">
        //                             리폿
        //                         </span>
        //                     </div>
        //                     <div
        //                         className="summoner-review-type-good-wrap"
        //                         onClick={() => setReportType(!reportType)}
        //                     >
        //                         <span className="summoner-review-type-good">
        //                             칭찬
        //                         </span>
        //                     </div>
        //                 </div>
        //             </div>
        //             {reportType ? (
        //                 <>
        //                     <div className="summoner-review-good-input-wrap">
        //                         <textarea
        //                             className="summoner-review-good-input"
        //                             onChange={(e) =>
        //                                 setReportContent(e.target.value)
        //                             }
        //                             rows="4"
        //                             value={reportContent}
        //                             placeholder="칭찬을 작성해주세요!"
        //                             // onKeyPress={onReviewGoodKeyPress}
        //                         />
        //                     </div>
        //                     <div className="summoner-review-btn-wrap">
        //                         <span
        //                             className="summoner-review-submit-btn"
        //                             onClick={() => onSubmit()}
        //                         >
        //                             제출하기
        //                         </span>
        //                     </div>
        //                 </>
        //             ) : (
        //                 <>
        //                     <div className="summoner-review-bad-input-wrap">
        //                         <textarea
        //                             className="summoner-review-bad-input"
        //                             onChange={(e) =>
        //                                 setReportContent(e.target.value)
        //                             }
        //                             rows="4"
        //                             value={reportContent}
        //                             placeholder="리폿을 작성해주세요!"
        //                             // onKeyPress={onReviewBadKeyPress}
        //                         />
        //                     </div>
        //                     <div className="summoner-review-btn-wrap">
        //                         <span
        //                             className="summoner-review-submit-btn"
        //                             onClick={() => onSubmit()}
        //                         >
        //                             제출하기
        //                         </span>
        //                     </div>
        //                 </>
        //             )}
        //             {/* 소환사 리뷰 view */}
        //             <div className="review-view-text">평가</div>
        //             <div
        //                 className="review-view"
        //                 style={{
        //                     overflow: reportViewOpen ? 'visible' : 'hidden',
        //                     height: reportViewOpen ? 'auto' : '300px',
        //                     // backgroundColor: reviewViewOpen ? "white" : "rgba(0,0,0,0.8)",
        //                 }}
        //             >
        //                 {!isEmpty(reports) &&
        //                     reports
        //                         .slice(0)
        //                         .reverse()
        //                         .map((data, key) => {
        //                             if (data.report) {
        //                                 return (
        //                                     <div
        //                                         key={key}
        //                                         className="review-view-bad"
        //                                     >
        //                                         <div className="review-view-date-bad-wrap">
        //                                             <span className="review-view-date-bad">
        //                                                 {/* {handleDate(
        //                                     data.date
        //                                 )} */}
        //                                                 {handleDate(
        //                                                     data.createdAt
        //                                                 )}
        //                                             </span>
        //                                         </div>
        //                                         <div className="review-view-content-bad-wrap">
        //                                             <span className="review-view-content-bad">
        //                                                 {data.content}
        //                                             </span>
        //                                         </div>
        //                                     </div>
        //                                 );
        //                             } else {
        //                                 return (
        //                                     <div
        //                                         key={key}
        //                                         className="review-view-good"
        //                                     >
        //                                         <div className="review-view-date-good-wrap">
        //                                             <span className="review-view-date-good">
        //                                                 {handleDate(
        //                                                     data.createdAt
        //                                                 )}
        //                                                 {/* {handleDate(
        //                                     data.date
        //                                 )} */}
        //                                             </span>
        //                                         </div>
        //                                         <div className="review-view-content-good-wrap">
        //                                             <span className="review-view-content-good">
        //                                                 {data.content}
        //                                             </span>
        //                                         </div>
        //                                     </div>
        //                                 );
        //                             }
        //                         })}
        //             </div>

        //             {!isEmpty(reports) ? (
        //                 <>
        //                     {reportViewOpen ? (
        //                         <div
        //                             className="review-view-close-btn-wrap"
        //                             onClick={() => {
        //                                 setReportViewOpen(!reportViewOpen);
        //                             }}
        //                         >
        //                             <span className="review-view-close-btn">
        //                                 닫기
        //                             </span>
        //                         </div>
        //                     ) : (
        //                         <div
        //                             className="review-view-open-btn-wrap"
        //                             onClick={() => {
        //                                 setReportViewOpen(!reportViewOpen);
        //                             }}
        //                         >
        //                             <span className="review-view-open-btn">
        //                                 펼치기
        //                             </span>
        //                         </div>
        //                     )}
        //                 </>
        //             ) : (
        //                 <div className="review-none-wrap">
        //                     <span>비어있습니다. 작성해주세요!</span>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        // </div>
    );
};

export default DeathnoteReport;
