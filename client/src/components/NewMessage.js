import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const NewMessage = ({ selectedUser }) => {
    const { user, messages, setMessages, addMessages } = useContext(UserContext);

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
// import mobiscroll from '@mobiscroll/react-lite';
// import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
// import { useNavigate, useParams } from 'react-router-dom';

// const NewMessage = ({ selectedUser }) => {
//     const { messages, user, loggedIn, addMessages } = useContext(UserContext);
//     const [content, setContent] = useState("");
//     const [errors, setErrors] = useState([]);
//     // const navigate = useNavigate()
//     let { id } = useParams()
//     id = parseInt(id)


//     const handleSubmit = (e) => {
//         console.log("handleSubmit function is triggered.");
//         if (selectedUser && loggedIn) {
//             e.preventDefault();
//             const newMessage = {
//                 content: content,
//                 receiver_id: selectedUser.id,
//                 sender_id: loggedIn.id
//             };
//             console.log("Sending request to the server:", newMessage);
//             fetch(`/users/${id}/messages`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(newMessage)
//             })
//                 .then(response => {
//                     console.log("Server response:", response);
//                     if (response.ok) {
//                         response.json()
//                             .then((data) => {
//                                 console.log(data)
//                                 addMessages([...messages, data]);
//                                 // navigate(`/users/${user.id}/message`);
//                                 setErrors([]);
//                                 setContent("");
//                             });
//                     } else {
//                         response.json().then((err) => {
//                             if (err.errors) {
//                                 setErrors(Object.values(err.errors));
//                             } else {
//                                 setErrors([err.error]);
//                             }
//                         });
//                     }
//                 });
//         } else {
//             return "Log In"
//             // Handle the case when selectedUser or loggedIn is undefined
//         }
//     };


//     return (
//         <div className='form-add'>
//             <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
//                 <div className="mbsc-row">
//                     <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
//                         <mobiscroll.Input
//                             inputStyle="box"
//                             labelStyle="floating"
//                             placeholder="Please be kind when comment"
//                             name="content"
//                             value={content}
//                             onChange={(e) => {
//                                 console.log(e)
//                                 setContent(e.target.value)
//                             }
//                             }
//                         >
//                             Content:
//                         </mobiscroll.Input>
//                     </div>
//                 </div>
//                 <mobiscroll.Button type="submit">Submit</mobiscroll.Button>
//             </mobiscroll.Form>
//             <div className='errors'>
//                 {errors.map((err, i) => (
//                     <ul style={{ color: "black" }} key={i}>
//                         {err}
//                     </ul>
//                 ))}
//             </div>
//         </div>
//     )
// }


// export default NewMessage;



