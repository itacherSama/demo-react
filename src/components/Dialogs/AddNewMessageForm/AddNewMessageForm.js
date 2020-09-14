import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../anotherComponents/FormsControls/FormsControls";

const maxLength50 = maxLength(50);

const AddNewMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name="newMessage"
                component={Textarea}
                validate={[required, maxLength50]}
                placeholder='Post message'
            />
        </div>
        <div>
            <button>add message</button>
        </div>
    </form>
}

export default reduxForm({form: 'DialogsAddNewMessageForm'})(AddNewMessageForm);