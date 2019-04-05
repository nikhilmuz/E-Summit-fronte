import axios from 'axios';
import { push } from 'react-router-redux';
export const FORM_SUBMIT = 'form_submit'



export const submitForm = (callback) => {
    const request = axios
        .post('/api/create')
        .then(() => callback());

    return {
        type: FORM_SUBMIT,
        payload: request
    };
}