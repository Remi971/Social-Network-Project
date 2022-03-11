import { Link } from 'react-router-dom';
import { StyledButton } from '../styles/Button.style';
import logoGroupomania from '../images/logoGroupomania.png'
function Connect({ how, className}) {

    return (
        <section className={className}>
            <div className='switchContainer'>
                <Link className='switch' to={how === 'signup' ? '/' : '/signup'}>
                    {how === 'signup' ? (
                        <span className="container--login--tosignup login_link">Login in</span>
                    ) : (
                        <span className="container--login--tosignup signup_link">Sign up</span>
                    )}
                </Link>
            </div>
            <div className='pre_container'>
                <div className='container'>
                    {how === 'signup' ? (
                        
                        <form>
                            <p>Sign up</p>
                            <img src={logoGroupomania} alt='logo Groupomania' />
                            <div className='container--login--formPart'>
                                <i className="fa-solid fa-user"></i>
                                <input type='text' name='name' id='name' placeholder='nickname'  maxLength='30'
                                required />
                            </div>
                            <div className='container--login--formPart'>
                                <i className="fa-solid fa-at"></i>
                                <input type='email' name='email' id='email' placeholder='email' maxLength='60' required />
                            </div>
                            <div className='container--login--formPart'>
                                <i className="fa-solid fa-lock"></i>
                                <input type='password' name='password' id='password' placeholder='password' maxLength='20' minLength='4' required />
                            </div>
                            <div className='container--login--formPart'>
                                <i className="fa-solid fa-lock"></i>
                                <input type='password' name='password' id='passwordAgain' placeholder='confirm password' maxLength='20' minLength='4' required />
                            </div>
                            {document.getElementById('password') === document.getElementById('passwordAgain') ? document.getElementById('ButtonStyle').disabled = false : document.getElementById('ButtonStyle').disabled = true}
                            <StyledButton func='signup' />
                        </form>
                    
                    ) : (
                        <form>
                            <p>Log in</p>
                            <img src={logoGroupomania} alt='logo Groupomania' />
                            <div className='container--login--formPart'>
                                <i className="fa-solid fa-at"></i>
                                <input type='email' name='email' id='email' placeholder='email' required />
                            </div>
                            <div className='container--login--formPart'>
                                <i className="fa-solid fa-lock"></i>
                                <input type='password' name='password' id='password' placeholder='password' required/>
                            </div>
                            <StyledButton func='login' />
                        </form>
                    )}
                    
                </div>
            </div>
        </section>
    )
}

export default Connect;