import React, { useContext, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { Button } from '@mobiscroll/react-lite'


const NewComment = ({ posts, setPosts, }) => {
    const { user, setUser } = useContext(UserContext)

    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])
    let { id } = useParams()
    id = parseInt(id)
    const navigate = useNavigate()

    let post = posts.find((uniq_p) => {
        return uniq_p.id === id
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = { content: content }
        fetch(`/posts/${id}/comments`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((newComment) => {
                        const postFilter = user.uniq_p.find((post) => post.id === newComment.post_id)
                        if (!postFilter) {
                            setUser({
                                ...user,
                                uniq_p: [...user.uniq_p, post]
                            })
                        }
                        const updatedPosts = posts.map((p) => {
                            if (p.id === id) {
                                return ({
                                    ...p,
                                    comments: [...p.comments, newComment]
                                })
                            } else {
                                return p
                            }
                        })
                        setPosts(updatedPosts)
                    })
                    navigate("/posts")

                } else {
                    response.json().then((err) => {
                        if (err.errors) {
                            setErrors(Object.values(err.errors))
                        } else {
                            setErrors([err.error])
                        }
                    });
                }
            })
    }
    return (
        <div className='form-add'>
            <Button><Link to="/posts">Back to our posts</Link></Button>
            <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Please be kind when comment"
                            name="title"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        >
                            Content:
                        </mobiscroll.Input>
                    </div>
                </div>
                <mobiscroll.Button type="submit">Submit</mobiscroll.Button>
            </mobiscroll.Form>
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



export default NewComment
