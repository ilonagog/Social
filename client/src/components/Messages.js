import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

const Messages = () => {
    // const { user } = useContext(UserContext)
    // const { avatar } = user
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch("/messages")
            .then(response => response.json())
            .then(data =>
                // console.log(data)
                setMessages(data)
            )
    }, [])
    const messageList = messages.map((message, index) => {
        const messageContent = message.content;

        return (

            <li key={index}>{messageContent}</li>

        )
    })
    return (
        <div>
            {/* <img src={avatar} /> */}
            <ul> {messageList}</ul>
            {/* <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <strong>Sender:</strong> {message.sender}<br />
                        <strong>Receiver:</strong> {message.receiver}<br />
                        <strong>Content:</strong> {message.content}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default Messages
