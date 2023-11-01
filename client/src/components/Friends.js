import React, { useState, useContext, useEffect } from 'react';
import { UsersContext } from '../context/UsersContext';
import ProfileInfo from './ProfileInfo';
import Messages from './Messages';
import { Button } from '@mobiscroll/react-lite';

const Friends = () => {
    const { users } = useContext(UsersContext);
    const [viewMessages, setViewMessages] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [viewInfo, setViewInfo] = useState(false);

    useEffect(() => {
        if (selectedUser) {
            // setViewMessages(true);
        }
    }, [selectedUser]);

    const handleViewMessages = (userId) => {
        const selected = users.find((u) => u.id === userId);
        if (selectedUser && selectedUser.id === selected.id) {
            setSelectedUser(null);
            setViewMessages(false);
        } else {
            setSelectedUser(selected);
            setViewMessages(true);
            setViewInfo(false);
        }
    };

    const handleViewInfo = (userId) => {
        const selected = users.find((u) => u.id === userId);
        if (selectedUser && selectedUser.id === selected.id) {
            setSelectedUser(null);
            setViewInfo(false);
        } else {
            setSelectedUser(selected);
            setViewInfo(true);
            setViewMessages(false);
        }
    };

    const friendsList = users.map((user) => (
        <div key={user.id}>
            <Button onClick={() => handleViewMessages(user.id)}>{user.name}</Button>
            <Button onClick={() => handleViewInfo(user.id)}>View {user.name}'s info</Button>
        </div>
    ));

    return (
        <div className='friends'>
            <h2>Friends</h2>
            {viewMessages ? (
                <div>
                    <Button onClick={() => setViewMessages(false)}>Close Messages</Button>
                    <Messages selectedUser={selectedUser} />
                </div>
            ) : (
                <div>{friendsList}</div>
            )}
            {viewInfo ? (
                <div>
                    <Button onClick={() => setViewInfo(false)}>Close Info</Button>
                    <ProfileInfo selectedUser={selectedUser} />
                </div>
            ) : null}
        </div>
    );
};

export default Friends;


// import React, { useState, useContext, useEffect } from 'react';
// import { UsersContext } from '../context/UsersContext';
// import ProfileInfo from './ProfileInfo';
// import Messages from './Messages';
// import { Button } from '@mobiscroll/react-lite';
// const Friends = () => {
//     const { users } = useContext(UsersContext);
//     const [viewMessages, setViewMessages] = useState(false);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [viewInfo, setViewInfo] = useState(false)
//     useEffect(() => {
//         if (selectedUser) {
//             setViewMessages(true);
//         }
//     }, [selectedUser]);
//     const handleViewMessages = (userId) => {
//         console.log("Users:", users);
//         const selected = users.find((u) => u.id === userId);
//         console.log("Selected user:", selected);
//         if (selectedUser && selectedUser.id === selected.id) {
//             setSelectedUser(null);
//             setViewMessages(false);
//         }
//         setSelectedUser(selected);
//         setViewMessages(true);
//     };
//     const handleViewInfo = (userId) => {
//         console.log("Users:", users);
//         const selectedUserInfo = users.find((u) => u.id === userId);
//         // console.log("Selected user:", selected);
//         if (selectedUser && selectedUser.id === selectedUserInfo.id) {
//             setSelectedUser(null);
//             setViewInfo(false);
//         }
//         setSelectedUser(selectedUserInfo);
//         setViewInfo(true);
//     };
//     const friendsList = users.map((user) => (
//         <div>
//             <Button onClick={() => handleViewMessages(user.id)}>{user.name} </Button>
//             <Button onClick={() => handleViewInfo(user.id)}>View {user.name}'s info </Button>
//         </div>
//     ));
//     console.log("Selected user in render:", selectedUser);
//     return (
//         <div className='friends'>
//             <h2>Friends</h2>
//             {viewMessages ? (
//                 <div>
//                     <Button onClick={() => setViewMessages(false)}>Close Messages</Button>
//                     <Messages selectedUser={selectedUser} />
//                 </div>
//             ) : (

//                 <div>{friendsList}</div>
//             )}
//             {viewInfo && !viewMessages ? (
//                 <div>

//                     <Button onClick={() => setViewInfo(false)}>Close Info</Button>
//                     <ProfileInfo selectedUser={selectedUser} />
//                 </div>
//             ) : null}
//         </div>
//     );
// };

// export default Friends;







