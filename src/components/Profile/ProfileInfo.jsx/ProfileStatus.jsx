
import React from 'react';
// import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onDeactiveMode = () => {
      this.setState({
          editMode: false
      })
        this.props.updateUserStatus(this.state.status);

    }

    onActiveMode = () => {
        this.setState({
            editMode: true

        })
    }

    onChangeStatus = (e) => {
        const value = e.currentTarget.value;
        this.setState({
            status: value
        })
    }


    render() {
        return (
            <>
                {this.state.editMode && <div>
                    <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.onDeactiveMode} type="text" value={this.state.status}/>
                </div>}
                {!this.state.editMode && <div onClick={this.onActiveMode}>
                    <span>{this.props.status || 'Напиши новый статус'}</span>
                </div>}
            </>
        )
    }
}

export default ProfileStatus;