import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios'

class Users extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        })
    }
    setCurrentPage = (Page) => {
        this.props.setCurrentPage(Page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${Page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        let pagesRender = pages.map(el => 
            <div className={css.pages}>
                <p className={this.props.currentPage === el && css.selectedP} onClick={()=>{this.setCurrentPage(el)}}>{el}</p>
            </div>)
        return (
            <div>
                {pagesRender}
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