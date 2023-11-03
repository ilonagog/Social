import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ uniq_p: [] });
    const [errors, setErrors] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [comments, setComments] = useState([]);
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/me')
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setLoggedIn(false);
                } else {
                    setUser(data);
                    setLoggedIn(true);
                    fetchComments(data.comments);
                    fetchMessages(data.messages);
                }
            });
    }, []);

    const fetchComments = () => {
        fetch("/comments")
            .then(response => response.json())
            .then(data => {
                setComments(data);
            });
    };

    const fetchMessages = () => {
        fetch("/messages")
            .then(response => response.json())
            .then(data => {
                const commentsDate = data.map(comment => {
                    return {
                        ...comment,
                        createdAt: new Date(comment.created_at).toLocaleString()
                    }
                })
                setMessages(commentsDate);
            });
    };

    const addMessages = (newMessage) => setMessages([...messages, newMessage]);

    const login = (user) => {
        setUser(user);
        setLoggedIn(true);
        fetchComments();
        fetchMessages();
        navigate("/");
    };

    const logout = () => {
        setUser({});
        setLoggedIn(false);
    };

    const signup = (user) => {
        setUser(user);
        setLoggedIn(true);
    };

    return (
        <UserContext.Provider value={{
            addMessages,
            user,
            setUser,
            errors,
            setErrors,
            loggedIn,
            login,
            logout,
            signup,
            comments,
            setComments,
            messages,
            setMessages
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };



