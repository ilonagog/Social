// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const NewPost = ({ posts, setPosts }) => {
//     const [errors, setErrors] = useState([])
//     const [imageFile, setImageFile] = useState(null)
//     const [title, setTitle] = useState("")

//     const navigate = useNavigate()
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const data = new FormData()
//         data.append("post[title]", e.target.title.value)

//         if (imageFile === null) {
//             setErrors("Image cannot be blank")
//             return;
//         } else {
//             data.append("post[image]", imageFile)
//         }

//         fetch("/posts", {
//             method: "POST",
//             body: data
//         })
//             .then(response => {
//                 if (response.ok) {
//                     // response.json().then((newPost) => {
//                     //     addPost(newPost)
//                     //     setFormData({
//                     //         title: "",
//                     //         image: ""
//                     //     })
//                     response.json()
//                         .then((data) => {
//                             setPosts([...posts, data])
//                             setErrors([])
//                             setImageFile(null)
//                             navigate("/posts")
//                         })
//                 } else {
//                     response.json().then((err) => {
//                         if (err.errors) {
//                             setErrors(Object.values(err.errors));
//                         } else {
//                             setErrors([err.error])
//                         }
//                         setTitle("")
//                     })
//                 }

//             })
//     }



//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Title</label>
//                 <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
//                 <label>Image</label>
//                 <input type="file" name="image" onChange={(e) => setImageFile(e.target.files[0])} />
//                 <input type="submit" />
//             </form>
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

// export default NewPost


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = ({ addPost, posts, setPosts }) => {
    const [errors, setErrors] = useState([])
    // const [imageFile, setImageFile] = useState(null)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState(null)
    // const [formData, setFormData] = useState({
    //     title: "",

    //     image: null
    // })
    const navigate = useNavigate()

    // const handleTitleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     })
    // }
    // const handleImageChange = (e) => {
    //     const imageFile = e.target.files[0]
    //     setFormData({
    //         ...formData,
    //         image: imageFile
    //     })
    // }




    const handleSubmit = (e) => {
        e.preventDefault()
        if (!image) {
            setImage(true)
        } else {
            const formData = new FormData()
            formData.append("title", title)
            formData.append("image", image)

            // const data = new FormData()
            // data.append("post[context]", e.target.context.value)

            // if (imageFile === null) {
            //     setErrors()
            // } else {
            //     data.append("post[image", imageFile)
            // }
            fetch("/posts", {
                method: "POST",
                body: formData
            })
                .then(response => {
                    if (response.ok) {
                        // response.json().then((newPost) => {
                        //     addPost(newPost)
                        //     setFormData({
                        //         title: "",
                        //         image: ""
                        //     })
                        response.json()
                            .then((data) => {
                                setPosts([...posts, data])
                                setErrors([])
                                // setImageFile(null)
                                navigate("/posts")
                            })
                    } else {
                        response.json().then((err) => {
                            if (err.errors) {
                                setErrors(Object.values(err.errors));
                            } else {
                                setErrors([err.error])
                            }
                            setTitle("")
                        })
                    }

                })
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Image</label>
                <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
                <input type="submit" />
            </form>
            <div className='errors'>
                {errors.map((err, i) => (
                    <ul style={{ color: "black" }} key={i}>
                        {err}
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default NewPost

