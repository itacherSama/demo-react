import React, {useEffect, useState} from 'react';
// import styles from './ProfileInfo.module.css';

let ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = (e) => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <>
            {editMode && <div>
                <input autoFocus={true}  onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
            </div>}
            {!editMode && <div  onClick={activateEditMode} >
                {status || 'Напиши новый статус'}
            </div>}
        </>
    )
}

export default ProfileStatusWithHooks;