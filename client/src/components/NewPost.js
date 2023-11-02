
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import mobiscroll from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';
import { Button } from '@mobiscroll/react-lite';

const NewPost = ({ posts, setPosts }) => {
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            setErrors(['Please upload an image']);
        } else {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('image', image);

            fetch('/posts', {
                method: 'POST',
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        response
                            .json()
                            .then((data) => {
                                setPosts([...posts, data]);
                                setErrors([]);
                                navigate('/posts');
                            });
                    } else {
                        response.json().then((err) => {
                            if (err.errors) {
                                setErrors(Object.values(err.errors));
                            } else {
                                setErrors([err.error]);
                            }
                        });
                    }
                });
        }
    };

    return (
        <div className='form-add'>
            <Button>
                <Link to='/posts'>Back to our posts</Link>
            </Button>
            <mobiscroll.Form theme='mobiscroll' onSubmit={handleSubmit}>
                <div className='mbsc-row'>
                    <div className='mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3'>
                        <mobiscroll.Input
                            inputStyle='box'
                            labelStyle='floating'
                            placeholder='Post title'
                            name='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        >
                            Title:
                        </mobiscroll.Input>
                    </div>
                    <div className='mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3'>
                        <mobiscroll.Input
                            type='file'
                            inputStyle='box'
                            labelStyle='floating'
                            placeholder='Post title'
                            name='image'
                            onChange={(e) => setImage(e.target.files[0])}
                        >
                            Upload post image:
                        </mobiscroll.Input>
                    </div>
                </div>
                <mobiscroll.Button type='submit'>Submit</mobiscroll.Button>
            </mobiscroll.Form>
            <div className='errors'>
                {errors.map((err, i) => (
                    <ul style={{ color: 'black' }} key={i}>
                        {err}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default NewPost;
