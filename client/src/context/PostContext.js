// import React, { useEffect, useState } from 'react';
// const PostContext = React.createContext()


// const PostProvider = ({ children }) => {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         fetch("/posts")
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 setPosts(data)
//             })
//     }, [])
//     return (
//         <PostContext.Provider value={{ posts, setPosts }}>
//             {children}
//         </PostContext.Provider>

//     )
// }
// export { PostContext, PostProvider }