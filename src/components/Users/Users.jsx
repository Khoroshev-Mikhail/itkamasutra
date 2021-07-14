import React from 'react';
import css from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0){
        let usersArr = 
            [ 
                {id : 1, followed : false, fullName : 'Mike', status : 'i cool propgrammer', location : {bornCity : 'U"lsk', country : "Norway"}, photo : 'https://moneypapa.ru/wp-content/uploads/2017/03/moneypapa.ru-%D0%9A%D0%B0%D0%BA-%D0%B7%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D0%BA-%D0%BC%D0%B8%D0%BB%D0%BB%D0%B8%D0%BE%D0%BD%D0%B5%D1%80-%D0%BF%D1%80%D1%8F%D0%BC%D0%BE-%D1%81%D0%B5%D0%B9%D1%87%D0%B0%D1%81.jpg'},
                {id : 2, followed : true, fullName : 'Tanya', status : 'i love Mike', location : {bornCity : 'Kirensk', country : "Norway"}, photo : 'https://st2.depositphotos.com/1115531/6692/i/600/depositphotos_66923637-stock-photo-happy-family-standing-on-the.jpg'},
            ]
        props.setUsers(usersArr);
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