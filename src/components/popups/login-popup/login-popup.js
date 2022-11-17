import { useContext, useState } from 'react'
import { changeHandler } from '../../../utilities/changeHandler'
import './login-popup.css'
import {  } from '../../../utilities/firestore-save'

const LoginPopup = () => {

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const login = async () => {
        console.log(usernameInput, passwordInput)
    }

    return (
        <>
            <div className='popup-title'><h2>Login to your account</h2></div>
            <div className='popup-text'> Username</div>
            <input className='roll-name-input' value={usernameInput} type='text' onChange={(e) => changeHandler(e, setUsernameInput)} />
            <div className='popup-text'> Password</div>
            <input className='roll-name-input' value={passwordInput} type='password' onChange={(e) => changeHandler(e, setPasswordInput)} />
            <button className='login' onClick={() => login()}>Save</button>
        </>
    )
}

export default LoginPopup