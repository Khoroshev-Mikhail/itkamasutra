let initialState = {
    friendsData : [
        {name: 'Фрол', id: 1},
        {name: 'Мама', id:2},
        {name: 'Таня', id:3},
    ]
}

const sidebarreducer = (state = initialState, action) => {
    switch (action.type) {
        default :
            return state;
    }
}

export default sidebarreducer;