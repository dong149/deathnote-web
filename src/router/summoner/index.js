import React, { useEffect, useState } from 'react';
import DeathnoteMainHeader from '../../Components/DeathnoteMainHeader';
import { deathnoteService } from '../../Services/deathnoteService';

const Summoner = ({ match }) => {
    return (
        <div>
            <DeathnoteMainHeader/>
        </div>
    );
};

export default Summoner;
