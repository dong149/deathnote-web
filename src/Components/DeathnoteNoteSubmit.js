import React, { useState } from 'react';
import { isEmpty } from '../Functions';
import { deathnoteService } from '../Services/deathnoteService';
import '../Styles/component/deathnoteNoteSubmit.scss';

const DeathnoteNoteSubmit = (props) => {
    const { accountId } = props;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const onSubmit = () => {
        deathnoteService
            .postNoteByAccountId(accountId, title, content)
            .then((data) => {
                window.alert('성공적으로 접수되었습니다😀');
                window.location.reload();
            });
    };

    return (
        <div className="DeathnoteNoteSubmitWrap">
            <div className="DeathnoteNoteSubmitMainTitle">
                <span className="DeathnoteNoteSubmitText">
                    Deathnote 작성하기
                </span>
            </div>
            <div className="DeathnoteNoteSubmit">
                {/* <span className="DeathnoteNoteSubmitTitleText">제목</span> */}
                <div className="DeathnoteNoteSubmitAlert">
                    <span className="DeathnoteNoteSubmitAlertText">
                        심한 욕설은 금해주세요.
                    </span>
                </div>
                <div className="DeathnoteNoteSubmitTitle">
                    <input
                        className="DeathnoteNoteSubmitTitleTextArea"
                        placeholder="제목을 작성해주세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                {/* <span className="DeathnoteNoteSubmitContentText">내용</span> */}
                <div className="DeathnoteNoteSubmitContent">
                    <textarea
                        className="DeathnoteNoteSubmitContentTextArea"
                        rows="10"
                        placeholder="자세한 내용을 작성해주세요"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="DeathnoteNoteSubmitBtnWrap">
                    <button
                        className="DeathnoteNoteSubmitBtn"
                        onClick={() => {
                            onSubmit();
                        }}
                    >
                        제출합니다!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeathnoteNoteSubmit;
