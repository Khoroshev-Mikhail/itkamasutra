import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../API/api';
import css from './Users.module.css';

let Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
    let pagesRender = pages.map(el => 
        <div className={css.pages}>
            <p className={props.currentPage === el && css.selectedP} onClick={()=>{props.setCurrentPage(el)}}>{el}</p>
        </div>)
    return (
        <div>
            {pagesRender}
            {props.users.map(u =>
            <div>
                <div className={css.container}>
                <div className={css.left}>
                    <div className={css.name}>
                        <h6>{u.name}</h6>
                    </div>
                    <div className={css.imgbox}> 
                        <NavLink to={'profile/' + u.id}>
                            <img src={u.photos.small}/>
                        </NavLink>
                    </div>
                    <div className={css.button}>
                    {u.followed ? <button onClick={()=>{
                            usersAPI.unFollow(u.id).then(data => {
                                if(data.resultCode == 0){
                                    props.subscribe(u.id)
                                }
                            })
                        }}>UnFollow</button> : 
                        <button onClick={()=>{
                            usersAPI.follow(u.id).then(data => {
                                if(data.resultCode == 0){
                                    props.subscribe(u.id)
                                }
                            })
                        }}>Follow</button>}
                        
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