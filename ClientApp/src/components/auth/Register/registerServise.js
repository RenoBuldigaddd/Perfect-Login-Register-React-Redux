import axios from 'axios';

export default class RegisterServise
{
    static registerServise(model) {
        return axios.post('/api/account/register', model);
    }
}