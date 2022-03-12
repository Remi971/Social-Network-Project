import axios from 'axios';
import { getTime } from '../index';

function UserInfo({ id, nickname, imageUrl, email, createdAt, className }) {
    const handleClick = () => {
        if (window.confirm('Êtes vous sûr de vouloir supprimer cet utilisateur ?')) {
            axios.delete(`http://localhost:8000/api/auth/${id}`, {
                headers: {
                    "authorization": localStorage.getItem('token')
                }
            })
                .then((res) => window.location.reload())
                .catch((err) => console.log(err))
         } else {
             return;
         }
    }
    return (
        <tr className={className}>
            <td><img src={imageUrl} alt={nickname + ' profile picture'} /></td>
            <td><h3>{nickname}</h3></td>
            <td className='td-email'>{email}</td>
            <td className='td-date'>depuis {getTime(createdAt)}</td>
            <td><button onClick={handleClick} ><i className="fas fa-times-circle"></i></button></td>
        </tr>
    )
}

export default UserInfo;