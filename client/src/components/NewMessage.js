import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const NewMessage = ({ selectedUser, addMessages }) => {
    const { user, messages } = useContext(UserContext);

    const [content, setContent] = useState("");
    const [receiverId, setReceiverId] = useState(0);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            content: content,
            sender_id: user.id,
            receiver_id: receiverId
        };
        fetch('/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessage),
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        addMessages([...messages, data])
                        setContent('');

                    }
                    )
                } else {
                    response.json().then((err) => {
                        if (err.errors) {
                            setErrors(Object.values(err.errors));
                        } else {
                            setErrors([err.error]);
                        }
                    });
                }
            })

    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Content</label>
                <input name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <label>Sender</label>
                <input name="sender_id" value={user.id} disabled />
                <label>Receiver</label>
                <input name="receiver_id" value={receiverId} onChange={(e) => setReceiverId(e.target.value)} />
                <input type="submit" />
            </form>
            {errors}
        </div>
    );
};

export default NewMessage;
// import React, { useState, useContext } from 'react';
// import { UserContext } from '../context/UserContext';

// const NewMessage = ({ selectedUser }) => {
//     const { user, messages, addMessages } = useContext(UserContext);

//     const [content, setContent] = useState("");
//     const [errors, setErrors] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!selectedUser || !selectedUser.id) {
//             console.error('Selected user is undefined or has no ID.');
//             return;
//         }
//         const newMessage = {
//             content: content,
//             sender_id: user.id,
//             receiver_id: selectedUser.id
//         };
//         fetch('/messages', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newMessage),
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     response.json().then((data) => {
//                         addMessages([...messages, data]);
//                         setContent('');
//                         setErrors([]);
//                     });
//                 } else {
//                     response.json().then((err) => {
//                         if (err.errors) {
//                             setErrors(Object.values(err.errors));
//                         } else {
//                             setErrors([err.error]);
//                         }
//                     });
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     };


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Content</label>
//                 <input name="content" value={content} onChange={(e) => setContent(e.target.value)} />
//                 <label>Sender</label>
//                 <input name="sender_id" value={user.id} disabled />
//                 <input type="submit" />
//             </form>
//             {errors}
//         </div>
//     );
// };

// export default NewMessage;







