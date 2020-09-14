import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../anotherComponents/FormsControls/FormsControls";
import {maxLength, required} from "../../../../utils/validators/validators";
import React from "react";

const maxLength30 = maxLength(30);

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name="newPost"
                component={Textarea}
                validate={[required, maxLength30]}
                placeholder='Post message'
            />
        </div>
        <div>
            <button>add post</button>
        </div>
    </form>
}

export default reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);