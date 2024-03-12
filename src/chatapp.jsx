import React, { useState } from 'react';

// Message Display Component
const MessageDisplay = ({ messages }) => (
    <div className="flex flex-col space-y-2">
        {messages.map((message, index) => (
            <div key={index} className="bg-gray-200 p-2 rounded">
                {message.text}
            </div>
        ))}
    </div>
);

// Chat Participant Component
const ChatParticipant = ({ participant, onMessageSend }) => {
    const [inputValue, setInputValue] = useState('');

    const handleMessageSend = () => {
        if (inputValue.trim() !== '') {
            const message = { text: inputValue, sender: participant };
            onMessageSend(message);
            setInputValue('');
        }
    };

    return (
        <div className="flex flex-col w-1/2">
            <h2 className="text-lg font-bold mb-4">Chat Participant {participant}</h2>
            <MessageDisplay messages={[]} />
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border rounded-md py-1 px-2 w-full"
                />
                <button onClick={handleMessageSend} className="bg-blue-500 text-white rounded-md px-4 py-2">Send</button>
            </div>
        </div>
    );
};

// Main Chat App Component
const ChatApp = () => {
    const [messages, setMessages] = useState([]);

    const handleParticipantMessageSend = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-8">Chat Application</h1>
            <div className="flex justify-between">
                <ChatParticipant participant={1} onMessageSend={handleParticipantMessageSend} />
                <ChatParticipant participant={2} onMessageSend={handleParticipantMessageSend} />
            </div>
        </div>
    );
};

export default ChatApp;
