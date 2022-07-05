import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPayment } from '../../redux/actions/GetPaymentAction'
import { paymentDeleted } from '../../redux/actions/PaymentDeletedAction';
import Spinner from '../../components/spinner/Spinner';
import Modal from '../../components/paymentAddForm/PaymentAddForm';
import './HomePage.scss'

const HomePage = () => {
    const dispatch = useDispatch()

    const payments = useSelector(state => state.payments.payments)
    const isLoading = useSelector(state => state.payments.isLoading)
    const error = useSelector(state => state.payments.error)

    const [modalActive, setModalActive] = useState(false)


    useEffect(()=>{
        dispatch(getPayment())
            // eslint-disable-next-line
    }, []);


    if (isLoading) {
        return <Spinner/>
    } else if (error) {
        return <h2>Ошибка загрузки</h2>
    }

    const onDelete = (id) => {
        dispatch(paymentDeleted(id))
    }
    
    return  (
             <div className='container__flyid '>
                <div className="header__wrapper">
                        <h2 className='title'>Ваши платежи</h2>
                        <button 
                            className='open-modal-btn' 
                            onClick={() => setModalActive(true)}
                        >
                            <span>+</span>
                        </button>
                    <Modal active={modalActive} setActive={setModalActive}/>
                </div>  
                    <div className='container__inner'>
                        
                    {payments.map(item => {
                    const id = item.id.replaceAll(/\D/g, '');
                    return (
                            <div key={item.id} className='container__box'>
                                <div className="payment__inner">
                                    <div className="payment__name">
                                        {item.name}
                                    </div>
                                    <div className="payment__close">
                                        <button 
                                            className='close__btn'
                                            onClick={() => onDelete(item.id)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                </div>
                                <div className="payment__price">
                                    {item.price + ` ₽`} 
                                </div>
                                <div className='payment__details' data-block>
                                    <Link to={`/paymentDetail/${id}`}>
                                        Узнать подробнее
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            <button
                className='btn-out'
                >Log out 
            </button> 
        </div>
    ) 
}

export default HomePage;


