import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, register } from "../store/user.actions"

export const LoginRegisterPage = ({ history }) => {

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '' })
    const [isRegister, setIsRegister] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const { user } = useSelector(storeState => storeState.userModule)

    const dispatch = useDispatch()

    useEffect(() => {

    }, [user])

    const onLogin = async (ev) => {
        ev.preventDefault()
        const { email, password } = credentials
        console.log('Login', email, password)
        if (!email || !password) return
        try {
            await dispatch(login({ email, password }))
            history.push('/')
        } catch (err) {
            console.log('Cannot login', err)
            setErrorMsg('Invalid email or password')
        }
    }

    // const onLogin = async (ev) => {
    //     ev.preventDefault()
    //     const { email, password } = credentials
    //     console.log('Login', email, password)
    //     if (!email || !password) return
    //     const approval = await dispatch(login({ email, password }))
    //     if (!approval) setErrorMsg('Invalid email or password')

    // }

    const onRegister = async (ev) => {
        ev.preventDefault()
        try {
            console.log('Register', credentials)
            await dispatch(register(credentials))
            history.push('/')
        } catch (err) {
            console.log('Cannot register', err)
            setErrorMsg('Cannot register, Email is already in use')
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
                <h5 className="error-msg">{errorMsg}</h5>
                <button>{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <div className="flex justify-center">
                {!isRegister && <h4>Don't have an account?</h4>}
                <button className="new-account-btn" onClick={onToggleForm}>{isRegister ? 'Back to Login' : 'Register'}</button>
            </div>
        </div>
    </div>
}