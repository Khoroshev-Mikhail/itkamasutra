import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios'

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
                        <img src={u.photos.small}/>
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