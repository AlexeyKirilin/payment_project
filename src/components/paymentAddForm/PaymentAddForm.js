import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {postPayment} from '../../redux/actions/PostPaymentAction'
import './PaymentAddForm.scss'


const Modal = ({active, setActive}) => {

    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [price, setPrice] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [serviceDirty, setServiceDirty] = useState(false)
    const [priceDirty, setPriceDirty] = useState(false)
    const [nameError, setNameError] = useState('Поле не может быть пустым')
    const [serviceError, setServiceError] = useState('поле не может быть пустым')
    const [priceError, setPriceError] = useState('поле не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    const dispatch = useDispatch();


    useEffect(() => {
        if(nameError || serviceError || priceError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[nameError, serviceError, priceError])


    const nameHandler = (e) => {
        setName(e.target.value)
            if (e.target.value.length < 3 || e.target.value.length > 12) {
                setNameError('Поле должно быть длиннее 3 и меньше 12 символов')
            if (!e.target.value) {
                setNameError('Поле не может быть пустым')
            }
        } else {
            setNameError('')
        }
        
    }

    const serviceHandler = (e) => {
        setService(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 15) {
            setServiceError('Поле должно быть длиннее 3 и меньше 15 символов')
            if (!e.target.value) {
                setServiceError('Поле не может быть пустым')
            }
        } else {
            setServiceError('')
        }
    }

    const priceHandler = (e) => {
        setPrice(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 9) {
            setPriceError('Поле должно быть длиннее 1 и меньше 9 символов')
            if (!e.target.value) {
                setPriceError('Поле не может быть пустым')
            }
        } else {
            setPriceError('')
        }
    }
     
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break;
            case 'service':
                setServiceDirty(true)
                break;
            case 'price':
                setPriceDirty(true)
                break;
            default:
                console.log('Что-то пошло не так');
        }
    }

    const handleSubmit = (name, service, price) => {
        setName('')
        setService('')
        setPrice('')
        // alert('Добавлен платеж')
        dispatch(postPayment(name, service, price))
        setActive(false)
    }

    return (
        <div className={active ? 'modal active' : ' modal'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h2>Новый платеж</h2>
                <button 
                    className='close'
                    onClick={() => setActive(false)}
                    >
                        &times;
                </button>
                <label>
                {(nameDirty && nameError) && <div style={{color: 'red', fontWeight: '300', fontSize: '16px', paddingBottom: '5px'}}>{nameError}</div>}
                <input
                    onBlur={(e) => blurHandler(e)}
                    onChange={(e) => nameHandler(e)}
                    type="text"
                    name='name'
                    value={name}
                    placeholder="Введите имя"
                />
                </label>
                
                <label>
                {(serviceDirty && serviceError) && <div style={{color: 'red', fontWeight: '300', fontSize: '16px', paddingBottom: '5px'}}>{serviceError}</div>}
                    <input
                        name='service'
                        onBlur={e => blurHandler(e)}
                        type="text"
                        value={service}
                        onChange={(e) => serviceHandler(e)}
                        placeholder="Введите услугу"
                    />
                </label>

                <label className="container">
                {(priceDirty && priceError) && <div style={{color: 'red', fontWeight: '300', fontSize: '16px', paddingBottom: '5px'}}>{priceError}</div>}
                    <input 
                        name='price'
                        type="number" 
                        onBlur={e => blurHandler(e)}
                        value={price}
                        onChange={(e) => priceHandler(e)}
                        placeholder="Введите цену"                        
                    />
                    <span className="checkmark"></span>
                </label>

                <button
                    className='btn__form'
                    disabled={!formValid}
                    type='submit'
                    onClick={() => handleSubmit(name, service, price)}   
                >
                    Добавить платеж
                </button>
            </div>
        </div>
    )
}

export default Modal;
