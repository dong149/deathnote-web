import React, { useState } from 'react';
import '../Styles/component/deathnoteReportSubmit.scss';
import { deathnoteService } from '../Services/deathnoteService';
const DeathnoteReportSubmit = (props) => {
    const { accountId, summonerName } = props;
    const [isReport, setIsReport] = useState(true);
    const [reportContent, setReportContent] = useState('');
    // const [reports, setReports] = useState(reportData.data);
    // const [reportViewOpen, setReportViewOpen] = useState(false);

    const onSubmit = () => {
        console.log(reportContent);
        console.log(accountId);
        console.log(summonerName);
        deathnoteService
            .postReportByName(reportContent, accountId, isReport, summonerName)
            .then((data) => {
                window.location.reload();
            });
    };

    return (
        <div className="DeathnoteReportSubmitWrap">
            <div className="DeathnoteReportSubmitText">평가하기</div>
            {/* <div className="DeathnoteReportSubmit"> */}

            <div className="DeathnoteReportSubmitBtnWrap">
                <button
                    // className="DeathnoteReportSubmitBtnReport"
                    className={
                        isReport
                            ? 'DeathnoteReportSubmitBtnReportIsClicked'
                            : 'DeathnoteReportSubmitBtnReportIsNotClicked'
                    }
                    onClick={() => {
                        setIsReport(true);
                    }}
                >
                    리폿하고 싶어요 😡
                </button>
                <button
                    // className="DeathnoteReportSubmitBtnNonReport"
                    className={
                        isReport
                            ? 'DeathnoteReportSubmitBtnNonReportIsNotClicked'
                            : 'DeathnoteReportSubmitBtnNonReportIsClicked'
                    }
                    onClick={() => {
                        setIsReport(false);
                    }}
                >
                    칭찬하고 싶어요 😃
                </button>
            </div>

            <div className="DeathnoteReportSubmitTextAreaWrap">
                <textarea
                    // className="DeathnoteReportSubmitTextArea"
                    className={
                        isReport
                            ? 'DeathnoteReportSubmitTextAreaReport'
                            : 'DeathnoteReportSubmitTextAreaNonReport'
                    }
                    onChange={(e) => setReportContent(e.target.value)}
                    rows="4"
                    value={reportContent}
                    placeholder="칭찬을 작성해주세요!"
                    // onKeyPress={onReviewGoodKeyPress}
                />
            </div>

            <div className="DeathnoteReportSubmitOKBtnWrap">
                <button
                    className="DeathnoteReportSubmitBtnOK"
                    onClick={() => {
                        onSubmit();
                    }}
                >
                    제출할게요!
                </button>
            </div>
            {/* <div className="DeathnoteReportSubmitAlertWrap">
                <div className="DeathnoteReportSubmitAlert">
                    타인을 사칭하거나 심한 욕설 및 비방은 법률에 의해 제재를
                    받을 수 있습니다.
                </div>
            </div> */}
            {/* </div> */}
        </div>
    );
};

export default DeathnoteReportSubmit;
