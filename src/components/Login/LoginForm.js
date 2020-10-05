import {reduxForm} from "redux-form";
import {CreateField, Input} from "../anotherComponents/FormsControls/FormsControls";
import { minLength, required} from "../../utils/validators/validators";
import React from "react";
import styles from '../anotherComponents/FormsControls/FormsControls.module.css';


const minLength5 = minLength(5);

let LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>

        {CreateField('Email', 'email', [required], Input)}
        {CreateField('Password', 'password', [required, minLength5], Input, {type: 'password'})}
        {CreateField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

        {captchaUrl && <div>
            <img src={captchaUrl} alt='captcha' />
            {CreateField('Введите captcha', 'captcha', [], Input, )}

        </div>}

        {error && <div className={styles.errors}>
            {error}
        </div>}
        <button>Submit</button>
    </form>
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm);