import { Button } from '@mobiscroll/react-lite'
import React, { useState } from 'react'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
const EditPost = ({ post, posts, setPosts, onUpdatePost }) => {
    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState(post.title)
    const [viewForm, setViewForm] = useState(false)
    const handleViewForm = () => {
        setViewForm(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedPost = {
            ...post,
            title
        }
        fetch(`/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(updatedPost)
        })
            .then(resp => {
                if (resp.ok) {
                    resp.json().then((data) =>

                        onUpdatePost(data))
                    setViewForm(false)
                } else {
                    resp.json().then((err) => setErrors(err.errors))
                }
            })
    }

    return (
        <div>
            {viewForm ?
                <div>
                    <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                                <mobiscroll.Input
                                    inputStyle="box"
                                    labelStyle="floating"
                                    placeholder="Please be kind when comment"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                >
                                    Content:
                                </mobiscroll.Input>
                            </div>
                        </div>
                        <mobiscroll.Button type="submit">Submit</mobiscroll.Button>
                    </mobiscroll.Form>

                    {errors.map((err) => (
                        <li style={{ color: "black" }} key={err}>
                            {err}
                        </li>
                    ))}
                </div>
                :
                <Button onClick={handleViewForm}>Edit post title</Button>
            }
        </div>
    )
}

export default EditPost

