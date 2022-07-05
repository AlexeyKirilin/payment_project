import HomePage from "./screens/homePage/HomePage";
import PolicyPage from './screens/policyPage/PolicyPage';
import LoginPage from "./screens/loginPage/LoginPage";
import PaymentDetails from "./screens/paymentDetails/PaymentDetails";
import RegistrationPage from './screens/registrationPage/RegistrationPage'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/policy' component={PolicyPage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route exact path="/" component={RegistrationPage}/>
        <Route exact path="/paymentDetail/:id" component={PaymentDetails}/>
      </Switch>
    </Router>

  )
}

export default App;
