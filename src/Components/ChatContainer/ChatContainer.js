import * as React from 'react';
import { message } from 'antd';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { ChatPresenter } from '../ChatPresenter';

// const WEBSOCKET_URL = "https://donghoon.tk/websocket";
let sockJS = new SockJS('http://localhost:80/websocket');
let stompClient = Stomp.over(sockJS);
stompClient.debug = () => {};
export const ChatContainer = ({}) => {
    const [contents, setContents] = React.useState([]);
    const [username, setUsername] = React.useState('');
    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        console.log('test');
        stompClient.connect({}, () => {
            stompClient.subscribe('/topic/public', (data) => {
                console.log(data);
                const newMessage = JSON.parse(data.body);
                addMessage(newMessage);
            });
        });
        console.log('tt');
    }, [contents]);

    const handleEnter = (username, content, currentDate) => {
        const newMessage = { username, content, currentDate };
        console.log('jsonstring:', JSON.stringify(newMessage));
        stompClient.send('/message', {}, JSON.stringify(newMessage));
        setMessage('');
    };

    const addMessage = (message) => {
        console.log(message);
        setContents((prev) => [...prev, message]);
    };

    return (
        <div className={'container'}>
            <ChatPresenter
                contents={contents}
                handleEnter={handleEnter}
                message={message}
                setMessage={setMessage}
                username={username}
                setUsername={setUsername}
            />
        </div>
    );
};
