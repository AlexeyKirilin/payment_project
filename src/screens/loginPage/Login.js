import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions/LoginAction'
import Form from '../../components/form/Form'

const Login = () => {

    const dispatch = useDispatch();


    const handleSubmit = () => {
        dispatch(getUser())
    }

    return (
        <Form
            title="sign in"
            handleSubmit={handleSubmit}
            
            />
    );
};

export default Login;