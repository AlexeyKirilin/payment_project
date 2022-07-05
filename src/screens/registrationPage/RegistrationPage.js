import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { getUser } from '../../redux/actions/LoginAction';
import SignUp from './SignUp'
import Spinner from '../../components/spinner/Spinner'
import './RegistrationPage.scss'

const RegisterPage = () => {

    const dispatch = useDispatch()

    const users = useSelector(state => state.auth.users);
    const isLoading = useSelector(state => state.auth.isLoading)
    const error = useSelector(state => state.auth.error)

    useEffect(() => {
        dispatch(getUser())
    // eslint-disable-next-line
    }, []);



    if (isLoading) {
        return <Spinner/>
    } else if (error) {
        return <h2>Ошибка загрузки</h2>
    }

    return (
        <div>
            {users.map(item => {
                return item.password
            })}
            <SignUp/>
            <p className='redirectToLogin'>
                Already have an account? <Link to="/login"><span>Sign in</span></Link>
            </p>
        </div>
    );
};

export default RegisterPage;