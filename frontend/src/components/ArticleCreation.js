// import '../styles/ArticleCreation.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ArticleCreation({className}) {

    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [altText, setAltText] = useState('');

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        axios.get(`http://localhost:8000/api/auth/infoUsers/${userId}`, {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })
            .then((res) => {
                setProfileImage(res.data.imageUrl);
                setAltText(res.data.imageUrl.split('/images/')[1]);
            })
    })

    const onSubmit = (e) => {
        e.preventDefault();
        if(message.length > 255) {
            alert(`Votre Post a ${message.length} caractères. La limite authorisée est 255.`)
            return;
        }
        const formData = new FormData();
        formData.append('UserId', localStorage.getItem("userId"));
        formData.append('message', message);
        if (image) {
            formData.append('alttext', image.name);
            formData.append('image', image);
        }
        axios.post("http://localhost:8000/api/forum", formData,{
            headers: {
                "authorization": localStorage.getItem("token"),
            }
        })
            .then((res) => {
                document.getElementById('text').value = '';
                window.location.reload();
            })
            .catch((err) => console.log(err))
    }

    const handleFileSelect = (e) => {
        setImage(e.target.files[0])
    }

    const handleChange= (e) => {
        setMessage(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();//Sinon onSubmit se lance avant d'avoir sélectionné l'image
        document.getElementById('file').click()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('submit').click()
    }

    return (
        <div className={className}>
            <form  onSubmit={onSubmit}>
                <div className='userPost'>
                    <Link to='/infoUser' ><img src={profileImage} alt={altText} /></Link>
                    <textarea type='text' name='message' id='text' value={message} placeholder='Créer un post' onChange={handleChange}></textarea>
                </div>
                <div className='header__btn'>
                    <button className='btn btn-image' onClick={handleClick}><i className="fa-solid fa-image"></i> Joindre une image</button>
                    <input type='file' name='image' id='file' accept='image/*' onChange={handleFileSelect} />
                    <input id='submit' type='submit' />
                    <button className='btn btn-envoi' onClick={handleSubmit}><i className="fa-solid fa-paper-plane"></i> Envoyer</button>
                </div>
            </form>
            {image && <img id='imageArticle' src={URL.createObjectURL(image)} alt={image.name} />}
        </div>
    )
}

export default ArticleCreation;