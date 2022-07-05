import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPaymentdetails } from "../../redux/actions/GetPaymentDetailsAction";
import Spinner from "../../components/spinner/Spinner";
import './paymentDetails.scss'

const PaymentDetails = () => {

    const payment = useSelector(state => state.payments.payments);
    const isLoading = useSelector(state => state.payments.isLoading)
    const error = useSelector(state => state.payments.error)
    const dispatch = useDispatch()

    
    useEffect(()=>{
        const url = window.location.pathname
        
        const id = url.replaceAll(/\D/g, '')
        dispatch(getPaymentdetails(id))
            // eslint-disable-next-line
    }, []);


    if (isLoading) {
        return <Spinner/>
    } else if (error) {
        return <h2>Ошибка загрузки</h2>
    }

    return (
        <div>
            {payment.map(item => {
                return (
                    <div className="container__payment">
                        <div className="header__payment-wrapper">
                            <div className="back__arrow">
                                <Link to="/home">
                                    <img className="img__arrow" src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png" alt="" />
                                </Link>
                            </div>
                            <h2 className="payment__header">
                                Детальная информация платежа
                            </h2>
                        </div>
                        <div className="paymentDetails__wrapper">
                            <div className="paymentDetails__name">
                                Имя плательщика: {item.name}
                            </div>
                            <div className="paymentDetails__service">
                                Оплачена услуга: {item.service}
                            </div>
                            <div className="paymentDetails__price">
                                Цена: {item.price}
                            </div>
                            <div className="paymentDetails__id">
                                Платеж: {'№' + item.id}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default PaymentDetails;