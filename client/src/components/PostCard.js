import React, { useContext, useState } from 'react'
import NewComment from './NewComment'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { MoreVert } from "@material-ui/icons";
import { IconButton } from '@mui/material';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Button } from '@mobiscroll/react-lite'
import EditComment from './EditComment';
import EditPost from './EditPost';


const PostCard = ({ post, posts, setPosts, onUpdatePost }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [viewComments, setViewComments] = useState(false)
    const [viewForm, setViewForm] = useState(false)
    const { title, image_url, id, comments, author } = post
    console.log(author)
    const navigate = useNavigate()
    const { user, setUser, loggedIn } = useContext(UserContext)


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleViewForm = () => {
        setViewForm(true);
    };
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeletePost = () => {
        fetch(`posts/${post.id}`, {
            method: "DELETE",
        })
            .then(() => {
                const updatePosts = posts.filter((p) => p.id !== post.id)
                setPosts(updatePosts)
            })
    }

    const onDeleteComment = (deletedComment) => {
        const onPost = posts.find((post) => post.id === deletedComment.post_id)
        const newPostComments = onPost.comments.filter((comment) => comment.id !== deletedComment.id)
        const updatedPost = { ...onPost, comments: newPostComments }
        const updatedPosts = posts.map((post) => post.id === updatedPost.id ? updatedPost : post)
        setPosts(updatedPosts)
        const userCommentList = updatedPost.comments.find((comment) => comment.user_id === user.id)
        if (!userCommentList) {
            const newUserPosts = user.uniq_p.filter((post) => post.id !== deletedComment.post_id)
            setUser({ ...user, uniq_p: newUserPosts })
            navigate('/posts')
        }

    }
    const onEditComment = (editedComment) => {
        const onPost = posts.find((post) => post.id === editedComment.post_id);
        const updatedPostComments = onPost.comments.map((comment) => comment.id === editedComment.id ? editedComment : comment);
        const updatedPost = { ...onPost, comments: updatedPostComments };
        const updatedPosts = posts.map((post) => post.id === updatedPost.id ? updatedPost : post);
        setPosts(updatedPosts)
    }

    const commentsList = comments.map((comment) => {
        console.log(comment)
        if (user) {
            const handleDeleteComment = (deletedComment) => {
                fetch(`/posts/${deletedComment.id}`, {
                    method: "DELETE",
                })
                    .then(() => {
                        onDeleteComment(comment)
                    })
            }
            return (
                <div className='commentContainer' key={comment.id}>
                    <span className="postUsername">
                        {comment.username}:
                    </span>
                    <p className="commentContent"> {comment.content}</p>
                    <div className='commentDate'>

                        <span>{comment.created_at}</span>
                    </div>
                    {(user.id === comment.user_id) ? (
                        <div> <EditComment onEditComment={onEditComment} id={comment.id} comment={comment} />
                            <Button onClick={() => handleDeleteComment(comment)}>Delete Comment</Button>
                        </div>
                    ) : null}
                </div>
            )
        } else {
            return (
                <div className='commentContainer' key={comment.id}>
                    <span className="postUsername">
                        {comment.username}:
                    </span>
                    <p className="commentContent">{comment.content}</p>
                    <div className='commentDate'>

                        <span >{comment.created_at}</span>
                    </div>
                </div>
            )
        }
    })

    if (loggedIn) {
        return (
            <div className='container'>
                <div className="post">
                    <div className="postWrapper">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img
                                    className="postProfileImg"
                                    src={post.avatar}
                                    alt=""
                                />
                                <span className="postUsername">
                                    {post.author}
                                </span>
                                <div className='date'>

                                    <span className="postDate">{post.createdAt}</span>
                                </div>
                            </div>
                            {/* } */}
                            <div className="postTopRight">
                                <IconButton
                                    aria-label="more"
                                    onClick={handleClick}
                                    aria-haspopup="true"
                                    aria-controls="long-menu"
                                >
                                    <MoreVert />
                                </IconButton>
                                {(user.id === post.user_id) ? (
                                    <Menu
                                        className='userEdit'
                                        anchorEl={anchorEl}
                                        keepMounted onClose={handleClose}
                                        open={open}>
                                        <MenuItem
                                        >
                                            <EditPost post={post} onUpdatePost={onUpdatePost} posts={posts} setPosts={setPosts} />
                                            <Button onClick={handleDeletePost}>Delete Post</Button>
                                        </MenuItem>
                                    </Menu>
                                ) : null}
                            </div>
                        </div>
                        <div className="postCenter">
                            <span className="postText">{title}</span>
                            <img className="postImg" src={image_url} alt="" />
                        </div>
                        <hr />
                        <div>
                            <Button onClick={() => setViewComments(!viewComments)}>View all comments:</Button>
                            {viewComments && (
                                <div className="postBottom">
                                    <div className="postBottomRight">
                                        <ul>{commentsList}</ul>
                                    </div>
                                </div>
                            )}
                            {viewForm ? (
                                <NewComment ppost={post} />)
                                : (
                                    <div className="bg-light p-2">
                                        <div className="d-flex flex-row align-items-start">
                                            <Link to={`/posts/${id}/comments`} onClick={handleViewForm}>
                                                leave the comment
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div>
                <div className="post">
                    <div className="postWrapper">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img
                                    className="postProfileImg"
                                    src={post.avatar}
                                    alt=""
                                />
                                <span className="postUsername">
                                    {post.author}
                                </span>
                                <div className='date'>

                                    <span className="postDate">{post.createdAt}</span>
                                </div>
                            </div>
                            {/* } */}
                            <div className="postTopRight">
                                <IconButton
                                    aria-label="more"
                                    onClick={handleClick}
                                    aria-haspopup="true"
                                    aria-controls="long-menu"
                                >
                                    <MoreVert />
                                </IconButton>

                            </div>
                        </div>
                        <div className="postCenter">
                            <span className="postText">{title}</span>
                            <img className="postImg" src={image_url} alt="" />
                        </div>
                        <hr />
                        <div>
                            <Button onClick={() => setViewComments(!viewComments)}>View all comments:</Button>
                            {viewComments && (
                                <div className="postBottom">
                                    <div className="postBottomRight">
                                        <ul>{commentsList}</ul>
                                    </div>
                                </div>
                            )}

                            <Link className="underline" to="/login">Login and leave your comment</Link>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}



export default PostCard
