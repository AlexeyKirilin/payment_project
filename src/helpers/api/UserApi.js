import axios from 'axios'

class userApi {

    getUser = async (data) => {
        const user = `https://6257fa980c918296a48ef294.mockapi.io/user`;
        const userData = await axios.get(user, data).then(res=>res.data)
        return userData;
    }

    postUser = async (data) => {
        const user = ('https://6257fa980c918296a48ef294.mockapi.io/user');
        const userData = await axios.post(user, data).then(res =>res.data)
        return userData;
    }

    postPayment = async (data) => {
        const pay = ('https://6257fa980c918296a48ef294.mockapi.io/payment');
        const dataPay = await axios.post(pay, data).then(res => res.data)
        return dataPay;
    }
    
    getPayment = async (data) => {
        const user = `https://6257fa980c918296a48ef294.mockapi.io/payment`;
        const userData = await axios.get(user, data).then(res=>res.data)
        return userData;
    }

    getPaymentDetails = async (id) => {
        const user = `https://6257fa980c918296a48ef294.mockapi.io/payment/${id}`;
        const userData = await axios.get(user).then(res=>res.data)
        return userData;
    }

    deletePayment = async (id) => {
        const paymentDelete = `https://6257fa980c918296a48ef294.mockapi.io/payment/${id}`;
        const dataPaymentDelete = await axios.delete(paymentDelete, id).then(res => res.id)
        return dataPaymentDelete;
    }
}

export default new userApi();


