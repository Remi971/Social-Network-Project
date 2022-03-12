import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getTime } from '../index';
import logo from '../images/logoGroupomania.png';

function InfoUser({ className }) {

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [nbArticle, setNbArticle] = useState('');
    const [profilImage, setProfileImage] = useState('');
    const[image, setImage] =useState('');
    const [modifMode, setModifMode] = useState(false);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        axios.get(`http://localhost:8000/api/auth/infoUsers/${userId}`, {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })
            .then((res) => {
                setNickname(res.data.nickname);
                setEmail(res.data.email);
                setDate(res.data.createdAt);
                setProfileImage(res.data.imageUrl);
                setNbArticle(res.data.nbArticle)
            })
            .catch((err) => console.log(err))
    }, []);

    const handleChange = (e) => {
        setImage(e.target.files[0]);
        setProfileImage(URL.createObjectURL(e.target.files[0]))
        
    }
    const handleClick = (e) => {
        setModifMode(true);
        setTimeout(() => {
            document.getElementById('modifFile').click();
        }, 400);
    }

    const changeProfilImage = (e) => {
        e.preventDefault();
        console.log('click')
        const userId = parseInt(localStorage.getItem('userId'));
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('image', image);
        axios.put(`http://localhost:8000/api/auth/${userId}`, formData, {
            headers : {
                "authorization": localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res)
                window.location.reload();
            })
            .catch((err) => console.log(err))
    }

    const removeUser = () => {
         if (window.confirm('Êtes vous sûr de vouloir supprimer votre compte ?')) {
            const userId = parseInt(localStorage.getItem('userId'));
            axios.delete(`http://localhost:8000/api/auth/${userId}`, {
                headers: {
                    "authorization": localStorage.getItem('token')
                }
            })
                .then((res) => window.location.href = "http://localhost:3000/")
                .catch((err) => console.log(err))
         } else {
             return;
         }
    }

    return (
        <div className={className}>
            <header>
                <div>
                    <Link to='/forum'><i className="fa-solid fa-caret-left" id='arrow'></i></Link>
                    <p>Retour<br/>Forum</p>
                </div>
                <div>
                    <img src={logo} alt='logo groupomania' />
                </div>
            </header>
            <div id='userInfo'>
                <button className='btn-image' onClick={handleClick}>
                    <img id='profilImage' src={profilImage} alt=''/>
                </button>
                {modifMode && (
                <form onSubmit={changeProfilImage}>
                    <input type='file' name='image' accept='image/*' id='modifFile' onChange={handleChange} />
                    <input type='submit' id='submit' />
                </form>
                )}
                <p>Nom</p>
                <h1>{nickname}</h1>
                <p>Email</p>
                <h3>{email}</h3>
                <h5>Utilisateur depuis {getTime(date)}</h5>
                <h5>Nombre d'article publié : {nbArticle} </h5>
            </div>
            <button id='suppression' onClick={removeUser}><i className="fa-solid fa-circle-xmark"></i>Supprimer le compte</button>
            
        </div>
    )
}

export default InfoUser;