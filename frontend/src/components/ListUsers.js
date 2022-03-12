import logo from '../images/logoGroupomania.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledUserInfo } from '../styles/UserInfo.style';

function ListUsers({className}) {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/auth/getUsers', {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })
            .then((res) => {
                setListUsers(res.data)
            })
    }, [])

    return (
        <div className={className} >
            <header>
                <div>
                    <Link to='/forum'><i className="fa-solid fa-caret-left" id='arrow'></i></Link>
                    <p>Retour<br/>Forum</p>
                </div>
                <div>
                    <img src={logo} alt='logo groupomania' />
                </div>
            </header>
            <div className='tableUsers'>
                <table className="listUsers">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Nickname</th>
                            <th className='th-email'>Email</th>
                            <th className='th-date'>Inscription</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers.map(user => (
                            <StyledUserInfo
                                id={user.id}
                                nickname={user.nickname}
                                email={user.email}
                                imageUrl={user.imageUrl}
                                createdAt={user.createdAt}
                                key={user.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListUsers;