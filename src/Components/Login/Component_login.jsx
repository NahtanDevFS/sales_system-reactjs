import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import user from '../Assets/user.png';
import email from '../Assets/email.png';
import password from '../Assets/password.png';


const Component_login = () => {

    const navigate = useNavigate();

    const [action, setAction] = useState('Login');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData, // Mantener los demás valores del formulario
            [name]: value, // Actualizar solo el campo cambiado
        });
        };

    const onSignUpButtonClick = () => {
        setAction('Sign up');
    }

    const onLoginButtonClick = () => {
        setAction('Login');
        if (formData.name === 'admin' && formData.password === '1234' && action === 'Login') {
           navigate('/Home');
           console.log('Login successful');
        }
    }

  return (
    <div className='container-login'>
        <div className='header-login'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img className='icon-login' src={user} />
                <input type='text' name='name' placeholder='Username' value = {formData.name} onChange={handleChange} />
            </div>
            {action==="Sign up"?
                <div className='input'>
                    <img className='icon-login' src={email} alt="" />
                    <input type='email' name='email' placeholder='E-mail' value = {formData.email} onChange={handleChange} />
                </div> : <div></div>
            }
            <div className='input'>
                <img className='icon-login' src={password} alt="" />
                <input type='password' name='password' placeholder='Password' value = {formData.password} onChange={handleChange} />
            </div>
        </div>
        {action==="Sign up"?<div></div>:<div className='forgot-password'>Forgot password? <span>CLICK ME</span> </div>}
        <div className='submit-container'>
            <div className={action==="Login"?"submit":"submit gray"} onClick={onLoginButtonClick}>Log in</div>
            <div className={action==="Sign up"?"submit":"submit gray"} onClick={onSignUpButtonClick}>Sign up</div>
        </div>
    </div>
  )
}

export default Component_login;