import '../styles/Forum.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledArticleCreation } from '../styles/ArticleCreation.style';
import { StyledArticle } from '../styles/Article.style';
import axios from 'axios';

function Forum() {

    const [articles, setArticles] = useState([]);
    const [isAuth, setIsAuth] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userProfileImageComment, setUserProfileImageComment] = useState('');
    const [userNicknameComment, setUserNicknameComment] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/auth/infoUsers/${localStorage.getItem('userId')}`, {
            headers : {
                "authorization": localStorage.getItem('token')
            }
        })
            .then((res) => {
                res.data.isAdmin && setIsAdmin(true);
                setUserProfileImageComment(res.data.imageUrl);
                setUserNicknameComment(res.data.nickname);

            })
            .catch((err) => console.log(err))

        axios.get('http://localhost:8000/api/forum', {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then(res => {
                setArticles(res.data.reverse());
            })
            .catch((err) => {
                setIsAuth(false);
            })
    }, [])

    const deconnexion = () => {
        localStorage.clear()
    }

    return (
        <section>
            <div className='h1Header'>
                <Link onClick={deconnexion} to='/'><i className="fa-solid fa-right-from-bracket link"></i></Link>
                <h1 className='title'>Groupomania</h1>
                {isAdmin && (<Link to='/listUsers' ><button><i className="fa-solid fa-users"></i></button></Link>)}
            </div>
            {isAuth ? (
                <>
                    <StyledArticleCreation />
                    {articles.map(article => (
                        <StyledArticle 
                            date={article.createdAt} 
                            message={article.message} 
                            srcImage={article.url}
                            altText={article.alttext}
                            articleId={article.id}
                            userId={article.UserId}
                            key={article.id}
                            isAdmin={isAdmin}
                            userProfileImageComment={userProfileImageComment}
                            userNicknameComment={userNicknameComment} />
                    ))
                }
                </>
            ) : (
                <div className='unauthorized'>
                    <h1>Vous n'êtes pas authorisés à accéder à cette page !<br/>Veuillez vous connecter </h1>
                    <Link to='/'><button>Login</button></Link> 
                </div>
                )}
        </section>
    )
}

export default Forum