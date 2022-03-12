import { useState, useEffect } from 'react';
import axios from 'axios';
import { getTime } from '../index';
import userImage from '../images/userImage.png'

function Comment({userId, message, commentId, date, deleteFunc, isAdmin, className}) {

    const [nickName, setNickName] = useState('');
    const [modifMode, setModifMode] = useState(false);
    const [commentaire, setCommentaire] = useState(message);
    const [profileImage, setProfilImage] = useState(userImage);
    const [newCommentaire, setNewCommentaire] = useState(message)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/auth/infoUsers/${userId}`, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then((res) => {
                setNickName(res.data.nickname);
                res.data.imageUrl && setProfilImage(res.data.imageUrl);
            })
    }, []);

    const modifyCommentfunc = () => {
        if(newCommentaire.length > 255) {
            alert(`Votre commentaire a ${newCommentaire.length} caractères. La limite authorisée est 255.`)
            return;
        }
        setCommentaire(newCommentaire);
        setModifMode(false);
        axios.put(`http://localhost:8000/api/comment/${commentId}`, {
            message: commentaire
        }, {
            headers: {
                "authorization": localStorage.getItem("token") 
            }
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    const activateModify = () => setModifMode(true);

    const handleChange = (e) => {
        setNewCommentaire(e.target.value);
    }

    const handleDelete = () => {
        deleteFunc(commentId)
    }

    const annuleModifComment = () => {
        setModifMode(false);
    }

    return (
        <li className={className}>
            <img src={profileImage} alt={nickName + ' profile picture'} />
            <div className='containComment'>
                <div className='containComment_header'>
                    <div className='containComment_header-info'>
                        <h4>{nickName !== '' ? nickName : 'Utilisateur supprimé'}</h4>
                        <p className='timeComment'>Il y a {getTime(date)}</p>
                    </div>
                    {Boolean((parseInt(localStorage.getItem("userId")) === userId || isAdmin) & modifMode === false) && (
                    <div className='containComment_header-btn'>
                        <button className='suppBtn' onClick={handleDelete}>Supprimer <i className="fas fa-trash-alt"></i></button>
                        <button className='modifBtn' onClick={activateModify}>Modifier <i className="fas fa-pencil"></i></button>
                    </div>
                    )}
                </div>
                {modifMode ? (
                    <div className='ModifCommentMode'>
                        <textarea className='commentaire modif' onChange={handleChange} value={newCommentaire} />
                        <div>
                            <button className='validerComment' onClick={modifyCommentfunc}>Valider</button>
                            <button className='annulerComment' onClick={annuleModifComment}>Annuler</button>
                        </div>
                    </div>
                ): (<pre className='commentaire'>{commentaire}</pre>)}
                
            </div>
            {/* {modifMode === false ? (<p>{message}</p>) : (
                <>
                    <input id='commentContainer' onChange={handleChange} type='text' value={commentaire} />
                    <button onClick={modifyCommentfunc}>Valider</button>
                </>
            )} */}
            
        </li>
    )
};

export default Comment;