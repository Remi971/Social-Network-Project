import userImage from '../images/userImage.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {StyledComment} from '../styles/Comment.style';
// import { StyleComment } from '../styles/Comment.style';
import { getTime } from '../index';


function Article({ date, message, srcImage, atlText, articleId, userId,isAdmin,userProfileImageComment, userNicknameComment, className}) {

    const [userNickname, setUserNickname] = useState('');
    const [showComment, setShowComment] = useState(false);
    const [comment, setComment] = useState('');
    const [modifyActive, setModifyActive] = useState(false);
    const [newMessage, setNewMessage] = useState(message);
    const [image, setImage] = useState(null);
    const [profileImage, setProfilImage] = useState('')
    const [nbComment, setNbComment] = useState(0);
    const [listComment, setListComment] = useState([]);

    useEffect(() => {
        userId !== null && axios.get(`http://localhost:8000/api/auth/infoUsers/${userId}`, {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })
            .then((res) => {
                setUserNickname(res.data.nickname);
                setProfilImage(res.data.imageUrl);
            })
            .catch((err) => console.log(err))

        axios.get(`http://localhost:8000/api/forum/${articleId}`, {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })
            .then((res) => {
                setNbComment(res.data.nbComment)
            })

        axios.get(`http://localhost:8000/api/comment/${articleId}`, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => {
                setListComment(res.data)})
            .catch((err) => console.log(`articleId : ${articleId}, Problème serveur ! : ${err}`))
    }, [nbComment])

    const commenter = (e) => {
        if (nbComment > 0) {
            if (showComment) {
                e.target.classList.remove('active');
            } else {
                e.target.classList.add('active');
            }
            setShowComment(!showComment)
        }
    }

    const modifyArticle = () => {
        setModifyActive(true);
    }

    const validModif = (e) => {
        e.preventDefault();
        setModifyActive(false);
        let formData = '';
        if (image) {
            formData = new FormData();
            formData.append('message', newMessage);
            formData.append('alttext', image.name);
            formData.append('image', image);
        } else {
            formData = {
                message: newMessage
            }
        }
        axios.put(`http://localhost:8000/api/forum/${articleId}`, formData, {
            headers : {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => {
                window.location.reload();
            })
    }

    const handleFileSelect = (e) => {
        setImage(e.target.files[0])
    }

    const handleChange= (e) => {
        setNewMessage(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();//Sinon onSubmit se lance avant d'avoir sélectionné l'image
        document.getElementById('modifFile').click()
    }

    const deleteArticle = () => {
        const confirm = window.confirm('Êtes vous sûre de vouloir supprimé cette article?');
        confirm && axios.delete(`http://localhost:8000/api/forum/${articleId}`, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res.data);
                window.location.reload();
            })
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const posterComment = () => {
        if(newMessage.length > 255) {
            alert(`Votre commentaire a ${newMessage.length} caractères. La limite authorisée est 255.`)
            return;
        }
        axios.post("http://localhost:8000/api/comment", {
            message: comment,
            ArticleId : articleId,
            UserId: localStorage.getItem("userId")
        }, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => {
                document.getElementById("textComment").value = '';
                setNbComment(nbComment + 1);
                console.log(res.data)
                // setListComment(res.data);
            })
            .catch((err) => console.log(err))
    }

    const deleteComment = (commentId) => {
        const confirm = window.confirm('Êtes vous sûre de vouloir supprimé ce commentaire?');
        confirm && axios.delete(`http://localhost:8000/api/comment/${commentId}`, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res.data);
                setListComment(listComment.filter((item) => item.id !== commentId));
                setNbComment(nbComment - 1);
            })
    }

    const cancelModif = () => {
        setModifyActive(false);
    }

    return (
        <article className={className}>
            <div id='info'>
                <div className='infoContainer'>
                    <img src={profileImage !== '' ? profileImage : userImage} alt='user' />
                    <div className='infoContainer_user'>
                        <h4>{userNickname !== '' ? userNickname : 'Utilisateur supprimé'}</h4>
                        <p>Il y a {getTime(date)}</p>
                    </div>
                </div>
                {parseInt(localStorage.getItem("userId")) === userId | isAdmin ? (
                    <div className='BtnContainer'>
                        <button className='suppBtn' onClick={deleteArticle}>Supprimer <i className="fa-solid fa-trash"></i></button>
                        {modifyActive === false && (
                        <button className='modifBtn' onClick={modifyArticle}>Modifier <i className="fa-solid fa-pen-to-square"></i></button>
                        )}
                    </div>
                ): null }
            </div>
            <hr />
            {modifyActive ? (
                <form onSubmit={validModif}>
                    <textarea type='text' name='message' id='textModify' value={newMessage} onChange={handleChange}/>
                    <button className='btn' onClick={handleClick}><i className="fa-solid fa-image"></i>Joindre image</button>
                    <input className='btn' type='file' name='image' id='modifFile' accept='image/*' onChange={handleFileSelect} />
                    <input className='validModif btn' type='submit' value='Valider' />
                    <button onClick={cancelModif} className='annulerModif btn'>Annuler</button>
                </form>
            ) : (<pre id='message'>{message}</pre>)}
            { srcImage !== null & image === null && <img className='article--img' src={srcImage} alt={atlText} />}
            { image && <img className='article--img' src={URL.createObjectURL(image)} alt={image.name} />}
            <hr id='line'/>
            <div>
                <button id='btnActiveComment' onClick={commenter}><i className="fa-solid fa-comment-dots"></i> Commentaires</button>
                <p id='nbCommentaires'>{nbComment} Commentaires</p>
            </div>
            <hr id='line'/>
            {showComment && (
                <ul>
                {listComment.length > 0 &&
                    listComment.map(comment => (
                        <>
                        <StyledComment key={'comment'+comment.id} commentId={comment.id} userId={comment.UserId} message={comment.message} date={comment.createdAt} deleteFunc={deleteComment} isAdmin={isAdmin} />
                        <hr id='line'/>
                        </>
                    ))
                }
            </ul>
            )}
            
            <div className="postCommentaire">
                <img src={userProfileImageComment} alt={userNicknameComment + ' profile picture'} />
                <input type='text' name='text' id='textComment' placeholder='Ajouter un commentaire...' onChange={handleCommentChange} />
                <button onClick={posterComment} ><i className="fa-solid fa-play"></i></button>
            </div>
            {/* { !!comment && (<StyleComment article_Id={articleId} nickname={userNickname} key={'comment' + articleId} />) } */}
        </article>
    )
} 

export default Article;