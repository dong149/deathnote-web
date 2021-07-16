import React, { useState } from 'react';
import { isEmpty } from '../Functions';
import '../Styles/component/deathnoteNoteMain.scss';
import { ReactComponent as MoreIcon } from '../Assets/deathnote-more-btn.svg';
import { ReactComponent as MoreCloseIcon } from '../Assets/deathnote-more-close-btn.svg';

const DeathnoteNote = (props) => {
    const { data } = props;

    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className="DeathnoteNoteMain">
            <div className="DeathnoteNoteMainProfile">
                <div className="DeathnoteNoteMainProfileIcon"></div>
                <div className="DeathnoteNoteMainProfileContent">
                    <span className="DeathnoteNoteMainProfileName">
                        {data.summonerName}
                    </span>
                    <span className="DeathnoteNoteMainProfileTier">
                        {data.summonerTier} {data.summonerRank}
                    </span>
                </div>
            </div>
            <div className="DeathnoteNoteMainBody">
                <div className="DeathnoteNoteMainTitleWrap">
                    <span className="DeathnoteNoteMainTitle">{data.title}</span>
                </div>
                <div className="DeathnoteNoteMainContentWrap">
                    <span className="DeathnoteNoteMainContent">
                        {data.content}
                    </span>
                </div>
            </div>
            {isOpened ? (
                <MoreCloseIcon
                    className="DeathnoteNoteMainMoreIcon"
                    onClick={() => {
                        setIsOpened(!isOpened);
                    }}
                />
            ) : (
                <MoreIcon
                    className="DeathnoteNoteMainMoreIcon"
                    onClick={() => {
                        setIsOpened(!isOpened);
                    }}
                />
            )}
            {/* <MoreCloseIcon
        className="SearchButton"
        onClick={() => {
            // enterEvent();
        }}
        width="20"
        height="20"
    /> */}
        </div>
    );
};

export default DeathnoteNote;
