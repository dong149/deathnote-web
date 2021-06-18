import React, { useEffect, useState } from 'react';

const Summoner = ({ match }) => {
    return (
        <div>
            <h1 style={{ color: 'white' }}>이게 바로 데스노트 Summoner 다!!</h1>
            <h2 style={{ color: 'white' }}>{match.params.name}</h2>
        </div>
    );
};

export default Summoner;
