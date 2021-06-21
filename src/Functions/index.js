import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
export const isEmpty = function (value) {
    if (
        value == '' ||
        value == null ||
        value == undefined ||
        (value != null &&
            typeof value == 'object' &&
            !Object.keys(value).length)
    ) {
        return true;
    } else {
        return false;
    }
};
// 2021-06-20T08:41:07.932931
export const handleDate = (date) => {
    let dyear = parseInt(date.substring(0, 4));
    let dmonth = parseInt(date.substring(5, 7)) - 1;
    let dday = parseInt(date.substring(8, 10));
    let dhour = parseInt(date.substring(11, 13)) + 9;
    let dmin = parseInt(date.substring(14, 16));
    let dsec = parseInt(date.substring(17, 19));

    let res = formatDistanceToNow(
        new Date(dyear, dmonth, dday, dhour, dmin, dsec),
        { includeSeconds: true, locale: ko }
    );

    let reslen = res.length;
    if (res[reslen - 1] === '만') {
        if (res[1] === '초') {
            res = res.substring(0, 2);
        } else {
            res = res.substring(0, 3);
        }
    }
    let result = res + ' 전';
    return result;
};
