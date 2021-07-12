import css from './Users.module.css';

const Users = () => {
    return (
        <div className={css.container}>

            <div className={css.left}>
                <div className={css.name}>
                    <h6>Name</h6>
                </div>
                <div className={css.imgbox}> 
                    <img />
                </div>
                <div className={css.button}>
                    <button>Follow</button>
                </div>
            </div>

            <div className={css.right}>
                <textarea></textarea>
            </div>

        </div>
    )
}

export default Users;