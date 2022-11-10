import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Auth() {

    const Navigate = useNavigate();

    const isUsuario = localStorage.getItem('user_email'); const isSenha = localStorage.getItem('user_password');

    axios.get('https://express-back-end-1.herokuapp.com/user', {
        params: {
            user_email: isUsuario,
            user_password: isSenha
        }
    })
    .then()
    .catch(() => {
        Navigate('/')
    })

}