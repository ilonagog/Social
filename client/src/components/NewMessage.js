// import React, { useState, useContext } from 'react';
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
const NewMessage = ({ selectedUser }) => {
    const { user, addMessages } = useContext(UserContext);

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
                        console.log(data)
                        addMessages(data)
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
            <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Please be kind when messaging"
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        >
                            Content:
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"

                            name="sender_id"
                            value={user.id}
                            disabled
                        >
                            Sender:
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"

                            name="receiver_id"
                            value={receiverId}
                            onChange={(e) => setReceiverId(e.target.value)}
                        >
                            Receiver:
                        </mobiscroll.Input>
                    </div>
                </div>
                <mobiscroll.Button type="submit">Submit</mobiscroll.Button>
            </mobiscroll.Form>

            {errors}
        </div>
    );
};

export default NewMessage;
// import { UserContext } from '../context/UserContext';

// const NewMessage = ({ selectedUser }) => {
//     const { user, messages, addMessages } = useContext(UserContext);

//     const [content, setContent] = useState("");
//     const [errors, setErrors] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!selectedUser || !selectedUser.id) {
//             console.error('Selected user');
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







