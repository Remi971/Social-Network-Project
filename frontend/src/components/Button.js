import axios from 'axios';

function Button({ func, className}) {

    const signup = (e) => {
        e.preventDefault();
        if (document.getElementById('name').value === '' | document.getElementById('email').value === '' | document.getElementById('password').value === '' ) {
            alert('Veuillez compléter tous les champs !');
            return;
        }
        if (document.getElementById('password').value === document.getElementById('passwordAgain').value) {
            axios.post('http://localhost:8000/api/auth/signup', {
                nickname: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                imageUrl: 'http://localhost:8000/images/userImage.png'
            })
                .then((res) => {
                    localStorage.setItem("userId", res.data.userId);
                    localStorage.setItem("token", `Bearer ${res.data.token}`);
                    window.location.href = "http://localhost:3000/forum"
                })
                .catch((err) => console.log(err))
        } else {
            alert('La confirmation du mot de passe a échouée ! Veuillez réessayer')
            return;
        }
    }

    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/auth/login', {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
            .then((res) => {
                localStorage.setItem("userId", res.data.userId)
                localStorage.setItem("token", `Bearer ${res.data.token}`);
                window.location.href = "http://localhost:3000/forum"
            })
            .catch((err) => {
                alert('Identifiant ou mot de passe incorrect !')
                console.log(err)})
    }

    return (
        <input id='ButtonStyle' onClick={func === 'login' ? login : signup}  className={className} type='submit' value={ func === 'login' ? 'Log in !' : 'Sign up !'}/>
    )
}

export default Button;