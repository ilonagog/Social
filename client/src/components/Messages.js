// Messages.js
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import NewMessage from './NewMessage';
import Message from './Message';
import { Button } from '@mobiscroll/react-lite';
import { Link } from 'react-router-dom';

const Messages = ({ selectedUser }) => {
    const { loggedIn, messages, setMessages } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/users/${id}/messages`)
            .then((response) => response.json())
            .then((data) => setMessages(data));
    }, [id, setMessages]);

    return (
        <div>
            <Button>
                <Link to="/users">See your friends</Link>
            </Button>
            <h3>Messages:</h3>
            <ul>
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </ul>
            {loggedIn ? <NewMessage selectedUser={selectedUser} /> : null}
        </div>
    );
};

export default Messages;

// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';
// import NewMessage from './NewMessage';
// import Message from './Message';
// import { Button } from '@mobiscroll/react-lite';
// import { Link } from 'react-router-dom';

// const Messages = ({ selectedUser }) => {

//     const { loggedIn, messages, setMessages } = useContext(UserContext);
//     const { id } = useParams();

//     useEffect(() => {
//         fetch(`/users/${id}/messages`)
//             .then((response) => response.json())
//             .then((data) => setMessages(data));
//     }, [id, setMessages]);

//     let filteredMessages = messages;
//     if (selectedUser && selectedUser.id) {
//         filteredMessages = messages.filter(
//             (message) => message.sender_id === selectedUser.id || message.receiver_id === selectedUser.id
//         );
//     }

//     let messageList = [];

//     if (Array.isArray(filteredMessages) && filteredMessages.length > 0) {
//         messageList = filteredMessages.map((message) => (
//             <Message
//                 key={message.id}
//                 message={message}

//             />
//         ));
//     } else {
//         messageList = <p>No Messages to display</p>;
//     }


//     return (
//         <div>
//             <Button>
//                 <Link to="/users">See your friends</Link>
//             </Button>
//             <h3>Messages:</h3>
//             <ul>{messageList}</ul>

//             {loggedIn ? <NewMessage addMessages={addMessages} selectedUser={selectedUser} /> : null}
//         </div>
//     );
// };

// export default Messages;






// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';
// import NewMessage from './NewMessage';
// import Message from './Message';
// import { Button } from '@mobiscroll/react-lite';
// import { Link } from 'react-router-dom';

// const Messages = ({ user }) => {
//     const { loggedIn, messages, setMessages } = useContext(UserContext);
//     const { id } = useParams();

//     useEffect(() => {
//         fetch(`/users/${id}/messages`)
//             .then((response) => response.json())
//             .then((data) => setMessages(data));
//     }, [id, setMessages]);

//     let filteredMessages = messages.filter(
//         (message) => message.sender_id === user.id || message.receiver_id === user.id
//     );

//     let messageList = null;
//     if (Array.isArray(filteredMessages) && filteredMessages.length > 0) {
//         messageList = filteredMessages.map((message) => (
//             <Message
//                 key={message.id}
//                 message={message}
//                 senderLinks={senderLinks}
//                 receiverLinks={receiverLinks}
//             />
//         ));
//     } else {
//         messageList = <p>No Messages to display</p>;
//     }

//     return (
//         <div>
//             <Button>
//                 <Link to="/friends">See your friends</Link>
//             </Button>
//             <h3>Messages:</h3>
//             <ul>{messageList}</ul>

//             {loggedIn ? <NewMessage /> : null}
//         </div>
//     );
// };

// export default Messages;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';
// import NewMessage from './NewMessage';
// import Message from './Message';
// import { Button } from '@mobiscroll/react-lite';
// import { Link } from 'react-router-dom';

// const Messages = ({ senderLinks, receiverLinks }) => {
//     const { loggedIn, setMessages, messages } = useContext(UserContext);
//     // const [messages, setFetchedMessages] = useState([]);
//     // const { id } = useParams();

//     // useEffect(() => {
//     //     const fetchMessages = async () => {
//     //         try {
//     //             const response = await fetch(`/users/${id}/messages`);
//     //             const data = await response.json();
//     //             setFetchedMessages(data);
//     //         } catch (error) {
//     //             console.error('Error fetching messages:', error);
//     //         }
//     //     };

//     //     fetchMessages();
//     // }, [id]);


//     const messagesList = messages.map((message) => (
//         <Message key={message.id} message={message} senderLinks={senderLinks} receiverLinks={receiverLinks} />
//     ));

//     return (
//         <div>
//             <Button>
//                 <Link to="/friends">See your friends</Link>
//             </Button>
//             <h3>Messages:</h3>
//             <ul>{messages.length > 0 ? messagesList : <p>No Messages to display</p>}</ul>

//             {loggedIn ? <NewMessage messages={messages} setMessages={setMessages} /> : null}
//         </div>
//     );

//     // return (
//     //     <div>
//     //         <Button>
//     //             <Link to="/friends">See your friends</Link>
//     //         </Button>
//     //         <h3>Messages:</h3>
//     //         <ul>{messagesList}</ul>

//     //         {loggedIn ? <NewMessage messages={messages} setMessages={setMessages} /> : null}
//     //     </div>
//     // );
// };

// export default Messages;


// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';
// import NewMessage from './NewMessage';
// import Message from './Message';
// import { Button } from '@mobiscroll/react-lite';
// import { Link } from "react-router-dom";

// const Messages = ({ senderLinks, receiverLinks }) => {
//     const { loggedIn, messages, setMessages } = useContext(UserContext);
//     // const { avatar } = user
//     const { id } = useParams();

//     console.log(messages);

//     useEffect(() => {
//         fetch(`/users/${id}/messages`)
//             .then(response => response.json())
//             .then(data => setMessages(data));
//     }, [id, setMessages]);

//     let messageList = null;
//     if (Array.isArray(messages)) {
//         messageList = messages.map((message) => (
//             <Message key={message.id} message={message} senderLinks={senderLinks} receiverLinks={receiverLinks} />
//         ));
//     } else {
//         messageList = <p>No Messages to display</p>
//     }

//     console.log(messageList);
//     return (
//         <div>
//             <Button>
//                 <Link to="/friends">See your friends</Link>
//             </Button>
//             <h3>Messages:</h3>
//             <ul>{messageList}</ul>

//             {loggedIn ? <NewMessage messages={messages} setMessages={setMessages} /> : null}
//         </div>
//     );
// };

// export default Messages;






