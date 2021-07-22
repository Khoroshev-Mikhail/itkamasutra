let initialState = {
    words : [
        {table : 'стол'},
        {kiss : "поцелуй"}
    ]
}

const myappreducer = (state = initialState, action) => {
    switch(action.type){
        case "TEST" :
            console.log('ara')
            return state
        default :
            return state;
    }
}

const TEST = 'TEST';
export const test = () => ({type : TEST})
export default myappreducer;