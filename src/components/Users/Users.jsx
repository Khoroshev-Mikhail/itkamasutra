import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
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
                        <button onClick={()=>{/*props.subscribe(u.id)*/
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                            {}, 
                            {   withCredentials : true, 
                                headers : { 'API-KEY' : 'a80ae102-d664-47c8-8d59-34949491d722'
                            }})
                            .then(response => {
                                if(response.data.resultCode == 0){
                                    props.subscribe(u.id)
                                }
                            })
                        }}>{u.followed ? 'Un' : ''}Follow</button>
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