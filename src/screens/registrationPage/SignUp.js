import Form from '../../components/form/Form';
import { useDispatch } from 'react-redux';
import { postUser} from '../../redux/actions/PostUserAction'

// const [user, setUser] = useState(null)

const SignUp = () => {
    const dispatch = useDispatch();

    const handleSubmit = (email, password) => {
        dispatch(postUser(email, password))
    }


    return (
            <Form
                title="register"
                handleSubmit={handleSubmit}
            />
                 
)};

export default SignUp;

