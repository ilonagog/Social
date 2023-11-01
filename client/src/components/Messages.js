// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';
// import NewMessage from './NewMessage';
// import Message from './Message';
// import { Button } from '@mobiscroll/react-lite';
// import { Link } from 'react-router-dom';

// const Messages = ({ selectedUser }) => {
//     const { loggedIn, messages, setMessages, user } = useContext(UserContext);
//     const { id } = useParams();
//     console.log("Selected User in Messages:", selectedUser);

//     useEffect(() => {
//         if (selectedUser && user) {
//             console.log("Fetching messages for selected user with ID:", selectedUser.id);
//             fetch(`/users/${selectedUser.id}/messages`) // Use selectedUser.id instead of id
//                 .then((response) => response.json())
//                 .then((data) => {
//                     const filteredMessages = data.filter(
//                         (message) =>
//                             (message.sender_id === user.id && message.receiver_id === selectedUser.id) ||
//                             (message.sender_id === selectedUser.id && message.receiver_id === user.id)
//                     );
//                     setMessages(filteredMessages);
//                 })
//                 .catch((error) => console.error('Error fetching messages:', error));
//         }
//     }, [selectedUser, user, setMessages]);

//     if (!selectedUser) {
//         return <div>No user selected</div>; // Placeholder for when selectedUser is undefined
//     }

//     return (
//         <div>
//             <Button>
//                 <Link to="/users">See your friends</Link>
//             </Button>
//             <h3>Messages:</h3>
//             <ul>
//                 {messages.map((message) => (
//                     <Message key={message.id} message={message} />
//                 ))}
//             </ul>
//             {loggedIn ? <NewMessage selectedUser={selectedUser} /> : null}
//         </div>
//     );
// };

// export default Messages;



import React, { useContext, useEffect } from 'react';

import { UserContext } from '../context/UserContext';
import NewMessage from './NewMessage';
import Message from './Message';
import { Button } from '@mobiscroll/react-lite';


const Messages = ({ selectedUser }) => {
    const { loggedIn, messages, setMessages, user } = useContext(UserContext);
    // const { id } = useParams();
    console.log(selectedUser)
    useEffect(() => {
        if (selectedUser && user) {
            fetch(`/users/${selectedUser.id}/messages`)
                .then((response) => response.json())
                .then((data) => {
                    const sortedMessages = data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
                    setMessages(sortedMessages);
                });
            // .then((data) => {
            //     const filteredMessages = data.filter(
            //         (message) =>
            //             (message.sender_id === user.id && message.receiver_id === selectedUser.id) ||
            //             (message.sender_id === selectedUser.id && message.receiver_id === user.id)
            //     );
            //     setMessages(filteredMessages);
            // });
        }
    }, [selectedUser, user, setMessages]);

    return (
        <div>
            {/* <h3>Messages:</h3> */}
            <ul className='messages'>
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </ul>
            {loggedIn ? <NewMessage selectedUser={selectedUser} /> : null}
        </div>
    );
};

export default Messages;


