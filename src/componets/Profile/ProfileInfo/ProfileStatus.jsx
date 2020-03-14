import React from 'react';
import pr from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       if(prevProps.status !== this.props.status){
           this.setState({
               status: this.props.status
           })
       }

    }

    render() {

        return (
            <div className={pr.status}>
                {
                    !this.state.editMode
                        ? <div>
                            <span onDoubleClick={this.activateEditMode
                            }>{`Status: ${this.props.status || 'no status'}`}</span>
                        </div>
                        : <div>
                            <input ref={this.statusInputRef} onChange={this.onStatusChange}
                                   autoFocus={true}
                                   value={this.state.status}/>
                                   <button onClick={this.deactivateEditMode}>save</button>
                        </div>
                }


            </div>

        );

    }
}

export default ProfileStatus;
