import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios'

const Users = (props) => {
    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            console.log(response.data.items)
            props.setUsers(response.data.items);
        })
    }
    return (
        <div>
            {props.users.map(u =>
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
                        <button onClick={()=>{props.subscribe(u.id)}}>{u.followed ? 'Un' : ''}Follow</button>
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

export default Users;