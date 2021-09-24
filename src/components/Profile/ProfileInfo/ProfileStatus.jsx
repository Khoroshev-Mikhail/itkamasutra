import React from "react";

class ProfileInfo extends React.Component{
    state = {
        editMode : false
    }

    activeEditMode = () => {
        this.setState({editMode : true})
    }
    deActiveEditMode(){ //Если не объявлять метод стрелочной функцией придётся биндить при вызове
        this.setState({editMode : false})
    }

    render(){
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activeEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActiveEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }

            </div>
        );
    }
}

export default ProfileInfo;