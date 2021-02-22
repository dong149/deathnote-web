import * as React from 'react';
import './ChatPresenter.scss';
import { Button, Input } from 'antd';

export const ChatPresenter = ({
    contents,
    message,
    username,
    setMessage,
    setUsername,
    handleEnter,
}) => {
    return (
        <div className="chat-box">
            <div className="header">
                유저이름 :
                <Input
                    style={{ flex: 1 }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="contents">
                {contents.map((message) => (
                    <div>
                        {' '}
                        {message.username} : {message.content}{' '}
                    </div>
                ))}
            </div>
            <div>
                <Input.Search
                    placeholder="input your messages..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onSearch={(value) => {
                        const currentDate = new Date();
                        handleEnter(username, value, currentDate);
                        console.log(currentDate);
                    }}
                    enterButton={'Enter'}
                />
            </div>
        </div>
    );
};
