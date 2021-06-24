import React, { useEffect, useState } from 'react';
import DeathnoteFooter from '../../Components/DeathnoteFooter';
import DeathnoteMainHeader from '../../Components/DeathnoteMainHeader';
import '../../Styles/router/deathnoteRanker.scss';

const DeathnoteRanker = () => {
    return (
        <>
            <DeathnoteMainHeader />
            <div
                style={{
                    margin: '0 auto',
                    marginTop: '100px',
                    width: '80%',
                    display: 'flex',
                    flexGrow: '0',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                }}
            >
                <div className="DeathnoteFunction">deathnoteRanker</div>
            </div>
            <DeathnoteFooter />
        </>
    );
};

export default DeathnoteRanker;
