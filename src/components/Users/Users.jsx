import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios'

class Users extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render(){
        return (
            <div>
                {this.props.users.map(u =>
                <div>
                    <div className={css.container}>
    
                    <div className={css.left}>
                        <div className={css.name}>
                            <h6>{u.name}</h6>
                        </div>
                        <div className={css.imgbox}> 
                            <img src={u.photo}/>
                        </div>
                        <div className={css.button}>
                            <button onClick={()=>{this.props.subscribe(u.id)}}>{u.followed ? 'Un' : ''}Follow</button>
                        </div>
                    </div>
    
                    <div className={css.right}>
                        <textarea>{u.status}</textarea>
                    </div>
    
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Users;