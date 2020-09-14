import {Field, reduxForm} from "redux-form";
import {Input} from "../anotherComponents/FormsControls/FormsControls";
import {maxLength, minLength, required} from "../../utils/validators/validators";
import React from "react";

const maxLength30 = maxLength(30);
const minLength5 = minLength(5);

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <label htmlFor="login">Email</label>
            <Field
                name="email"
                component={Input}
                type="text"
                validate={[required, maxLength30]}
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field name="password"
                   component={Input}
                   type="password"
                   validate={[required, minLength5]}
            />
        </div>
        <div>

            <Field name="rememberMe"
                   component={Input}
                   type="checkbox"
            /><label htmlFor="rememberMe">rememberMe</label>
    </div>
        <button>Submit</button>
    </form>
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm);