import {Field, reduxForm} from "redux-form";
import {Input} from "../anotherComponents/FormsControls/FormsControls";
import {maxLength, minLength, required} from "../../utils/validators/validators";
import React from "react";

const maxLength15 = maxLength(15);
const minLength5 = minLength(5);

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <label htmlFor="login">Login</label>
            <Field
                name="login"
                component={Input}
                type="text"
                validate={[required, maxLength15]}
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field name="password"
                   component={Input}
                   type="text"
                   validate={[required, minLength5]}
            />
        </div>
        <button>Submit</button>
    </form>
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm);