import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getUser } from '../../redux/actions/LoginAction'
import Spinner from '../../components/spinner/Spinner';
import Login from './Login';

const LoginPage = () => {

    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.auth.isLoading)
    const error = useSelector(state => state.auth.error)

    useEffect(() => {
        dispatch(getUser())
    // eslint-disable-next-line
    }, []);

    if (isLoading) {
        return <Spinner/>
    } else if (error) {
        return <h5>Ошибка загрузки</h5>
    }

    return (
        <div>
            <Login/>
            <h5 style={{textAlign:'center', marginTop: '30px', fontSize: '22px'}}>
                or <Link to ="/">register</Link>
            </h5>
        </div>
    );
};

export default LoginPage;