import React from "react";

class ProfileInfo extends React.Component{
    state = {
        editMode : false,
        status : this.props.status
    }
    componentDidMount(){

    }
    activeEditMode = () => {
        this.setState({editMode : true})
    }
    deActiveEditMode = () =>{ //Если не объявлять метод стрелочной функцией придётся биндить при вызове
        this.setState({editMode : false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChanged = (e) => {
        this.setState({status : e.currentTarget.value})
    }
    
    componentDidUpdate(prevProps, prevState){
        if(this.props.status !== prevProps.status){
            this.setState({status : this.props.status})
        }
    }

    render(){
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activeEditMode}>{this.props.status || '------'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChanged} autoFocus={true} onBlur={this.deActiveEditMode} value={this.state.status}/>
                    </div>
                }

            </div>
        );
    }
}

export default ProfileInfo;