import React, { useState } from 'react';
import '../Styles/component/deathnoteReportSubmit.scss';
import { deathnoteService } from '../Services/deathnoteService';
const DeathnoteReportSubmit = (props) => {
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
            });
    };

    return (
        <div className="DeathnoteReportSubmitWrap">
            <div className="DeathnoteReportSubmitText">평가하기</div>
            {/* <div className="DeathnoteReportSubmit"> */}

            <div className="DeathnoteReportSubmitBtnWrap">
                <button className="DeathnoteReportSubmitBtnReport">
                    리폿하고 싶어요 😡
                </button>
                <button className="DeathnoteReportSubmitBtnNonReport">
                    칭찬하고 싶어요 😃
                </button>
            </div>

            <div className="DeathnoteReportSubmitTextAreaWrap">
                <textarea
                    className="DeathnoteReportSubmitTextArea"
                    onChange={(e) => setReportContent(e.target.value)}
                    rows="4"
                    value={reportContent}
                    placeholder="칭찬을 작성해주세요!"
                    // onKeyPress={onReviewGoodKeyPress}
                />
            </div>

            <div className="DeathnoteReportSubmitOKBtnWrap">
                <button className="DeathnoteReportSubmitBtnOK">
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
