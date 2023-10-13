import React, { useContext, useState } from 'react'
import NewComment from './NewComment'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { MoreVert } from "@material-ui/icons";
import { IconButton } from '@mui/material';
// import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Button } from '@mui/base';
import EditComment from './EditComment';


const PostCard = ({ post, posts, setPosts }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [toggle, setToggle] = useState(false)
    const [viewForm, setViewForm] = useState(false)
    // console.log(post)
    const { title, image_url, id, comments } = post
    const navigate = useNavigate()
    // console.log(comments)
    const { user, setUser, loggedIn } = useContext(UserContext)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // const handleViewComments = (e) => {
    //     setViewComments(true)
    // }
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onDeleteComment = (deletedComment) => {
        const onPost = posts.find((post) => post.id === deletedComment.post_id)
        const newPostComments = onPost.comments.filter((comment) => comment.id !== deletedComment.id)
        const updatedPost = { ...onPost, comments: newPostComments }
        const updatedPosts = posts.map((post) => post.id === updatedPost.id ? updatedPost : post)
        setPosts(updatedPosts)
        const userCommentList = updatedPost.comments.find((comment) => comment.user_id === user.id)
        if (!userCommentList) {
            const newUserPosts = user.posts.filter((post) => post.id !== deletedComment.post_id)
            setUser({ ...user, posts: newUserPosts })
            navigate(`/posts`)
        }

    }
    const onEditComment = () => {

    }
    const commentsList = comments.map((comment) => {
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
                <div key={comment.id}>
                    <span className="postUsername">
                        {comment.username}:
                    </span>
                    <h3>Comments:  {comment.content}</h3>
                    {(user.id === comment.user_id) ? (
                        <div> <EditComment onEditComment={onEditComment} id={comment.id} comment={comment} />
                            <Button onClick={() => handleDeleteComment(comment)}>Delete Comment</Button>
                        </div>
                    ) : null}
                </div>
            )
        } else {
            return (
                <div key={comment.id}>
                    <span className="postUsername">
                        {comment.username}:
                    </span>
                    <h3>Comments:  {comment.content}</h3>
                </div>
            )
        }
    })
    const handleClickForm = (e) => {
        setViewForm(true)
    }
    if (loggedIn) {
        return (
            <div>
                <div className="post">
                    <div className="postWrapper">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img
                                    className="postProfileImg"
                                    src={user.image_url}
                                    alt=""
                                />
                                <span className="postUsername">
                                    {user.name}
                                </span>
                                <span className="postDate">{post.date}</span>
                            </div>
                            <div className="postTopRight">
                                <IconButton
                                    aria-label="more"
                                    onClick={handleClick}
                                    aria-haspopup="true"
                                    aria-controls="long-menu"
                                >
                                    <MoreVert />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    keepMounted onClose={handleClose}
                                    open={open}>
                                    <MenuItem
                                        onClick={handleClose}>
                                        <Button>Edit Post</Button>
                                        <Button>Delete Post</Button>
                                    </MenuItem>
                                </Menu>

                            </div>
                        </div>
                        <div className="postCenter">
                            <span className="postText">{title}</span>
                            <img className="postImg" src={image_url} alt="" />
                        </div>
                        <div className="postBottom">
                            <div className="postBottomRight">
                                <span onClick={() => setToggle(true)} className="postCommentText"> comments</span>
                                {!toggle && (<ul>{commentsList}</ul>)}
                            </div>
                        </div>
                        {viewForm ?
                            <NewComment />
                            :
                            <Link to={`/posts/${id}/comments`}><Button onClick={handleClickForm} >New Comment</Button></Link>
                        }
                    </div>
                </div>
            </div >

        )

    } else {
        return (
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img
                                className="postProfileImg"
                                src={user.image_url}
                                alt=""
                            />
                            <span className="postUsername">
                                {user.name}
                            </span>
                            <span className="postDate">{post.date}</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{title}</span>
                        <img className="postImg" src={image_url} alt="" />
                        <div className="postBottom">
                            <div className="postBottomRight">
                                <span className="postCommentText">   {commentsList} comments</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div >


        )
    }
}



export default PostCard
