import React, { useState } from 'react';
import { isEmpty } from '../Functions';
import '../Styles/component/deathnoteNoteMain.scss';
import { ReactComponent as MoreIcon } from '../Assets/deathnote-more-btn.svg';
import { ReactComponent as MoreCloseIcon } from '../Assets/deathnote-more-close-btn.svg';
import DeathnoteNote from './DeathnoteNote';

const DeathnoteNoteMain = (props) => {
    const { noteData } = props;
    const [isOpened, setIsOpened] = useState(false);
    return (
        <>
            {/* <div className="DeathnoteNoteMainWrapTitleWrap">
                <div className="DeathnoteNoteMainWrapTitle">
                    이 사람들은 트롤입니다!
                </div>
            </div> */}
            <div className="DeathnoteNoteMainWrapAlertWrap">
                <div className="DeathnoteNoteMainWrapAlert">
                    최근에 신고된 유저들입니다!
                </div>
            </div>
            <div className="DeathnoteNoteMainWrap">
                {!isEmpty(noteData) &&
                    noteData.map((data, key) => {
                        return <DeathnoteNote data={data} key={key} />;
                    })}
            </div>
        </>
    );
};

export default DeathnoteNoteMain;
