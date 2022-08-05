import { useState } from "react"
import { useDispatch } from "react-redux"
import { userService } from "../services/user.service"
import { login } from "../store/user.actions"

export const LoginRegisterPage = ({ history }) => {

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '' })
    const [isRegister, setIsRegister] = useState(false)
    const dispatch = useDispatch()

    const onLogin = async (ev) => {
        ev.preventDefault()
        const { email, password } = credentials
        console.log('Login', email, password)
        dispatch(login({ email, password }))
        history.push('/')
    }

    const onRegister = async (ev) => {
        try {
            ev.preventDefault()
            console.log('Register', credentials)
            userService.register(credentials)
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    const onToggleForm = () => {
        setIsRegister(!isRegister)
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        setCredentials(prevState => ({ ...prevState, [field]: value }))
    }

    return <div className="login-register-page">
        <div className="login-register-container">
            <form className="login-register-form flex direction-column align-center" onSubmit={isRegister ? onRegister : onLogin}>
                <h2>{isRegister ? 'Register' : 'Login'}</h2>
                {isRegister && <input type="text" name="name" value={credentials.name} onChange={handleChange} placeholder="Name" required></input>}
                <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" required></input>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" autoComplete="off" required></input>
                <button>{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <div className="flex justify-center">
                {!isRegister && <h4>Don't have an account?</h4>}
                <button className="new-account-btn" onClick={onToggleForm}>{isRegister ? 'Back to Login' : 'Register'}</button>
            </div>
        </div>
    </div>
}