import React from 'react';
import { isEmpty } from '../../Functions';

export const OfficialList = (props) => {
    const { data } = props;
    if (!isEmpty(data)) {
        return data.map((data, key) => <Official data={data} key={key} />);
    }
    // return <div>dkdk</div>;
};

const Official = (props) => {
    const { data } = props;
    return <p>{data.title}</p>;
};
