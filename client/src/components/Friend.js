// import React, { useContext, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { UserContext } from '../context/UserContext'

// const Friend = () => {
//     const { id } = useParams()
//     const { user, setUser } = useContext(UserContext)

//     useEffect(() => {
//         fetch(`/users/${id}`)
//             .then(response => response.json())
//             .then(data => setUser(data))
//     }, [id])
//     return (
//         <div>
//             <button>send a message to {user.name}</button>


//         </div>
//     )
// }

// export default Friend


