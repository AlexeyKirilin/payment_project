import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { postUser } from '../../redux/actions/PostUserAction';
import './Form.scss'

const Form = ({title, handleSubmit}) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    const [checkboxError, setCheckboxError] = useState('Обязательное поле')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [checkboxDirty, setCheckboxDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = useState('пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    const changeCheckbox = ({ target: { checked } }) => {
        setCheckbox(checked);
    }

    const handleChange = (e) => {
        setCheckbox(!checkbox)
        if (checkbox) {
            setCheckboxError('Обязательное поле')
        } else {
            setCheckboxError("")
        }
    }

    useEffect(() => {
        if(emailError || passwordError || checkboxError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError, passwordError, checkboxError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPass(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setPasswordError('Пароль должен быть длиннее 3 и меньше 12 символов')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }
     
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
            case 'checkbox':
                setCheckboxDirty(true)
                break;
            default:
                console.log('Что-то пошло не так');
        }
    }

    return (
        <div className="form">
            <h2>{title}</h2>
            <label>
            {(emailDirty && emailError) && <div style={{color: 'red', fontWeight: '300', fontSize: '16px', paddingBottom: '5px'}}>{emailError}</div>}
            <input
                onBlur={e => blurHandler(e)}
                onChange={e => emailHandler(e)}
                type="email"
                name='email'
                value={email}
                placeholder="Введите email"
            />
            </label>
            
            <label>
            {(passwordDirty && passwordError) && <div style={{color: 'red', fontWeight: '300', fontSize: '16px', paddingBottom: '5px'}}>{passwordError}</div>}
                <input
                    name='password'
                    onBlur={e => blurHandler(e)}
                    value={pass}
                    type='password'
                    onChange={(e) => passwordHandler(e)}
                    placeholder="Введите password"
                />
            </label>

            <label className="container">
            {(checkboxDirty && checkboxError) && <div style={{color: 'red', fontWeight: '300', fontSize: '16px', paddingBottom: '5px'}}>{checkboxError}</div>}
                <Link to='/policy'>
                    Соглашаетесь с политикой конфиденциальности?
                </Link>
                <input 
                    name='checkbox'
                    type="checkbox" 
                    checked={checkbox}
                    value={checkbox}
                    onChange={changeCheckbox}
                    onClick={handleChange}
                        
                />
                <span className="checkmark"></span>
            </label>

                <button className='btn__form'
                    style={{cursor: 'pointer'}}
                    disabled={!formValid}
                    type='submit'
                    onClick={()=>handleSubmit(email, pass)}   
                >
                     <Link to = '/home'>{title}</Link>
                </button>


        </div>
    )
}

export default Form;
