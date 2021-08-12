let initialState = {
    words : [
        {kiss : "поцелуй1"},
        {kiss : "поцелуй2"},
        {kiss : "поцелуй3"},
        {kiss : "поцелуй4"},
        {kiss : "поцелуй5"},
        {kiss : "поцелуй6"},
        {kiss : "поцелуй7"},
        {kiss : "поцелуй8"}
    ],
    currentPage : 1,
    totalPages : 1,
    wordsOnPage : 3, 
}

const myappreducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type){
        case "SET_CURRENT_PAGE" :
            stateCopy = {...state, currentPage : action.currentPage}
            return stateCopy
        case "TOTAL_PAGES" :
            let total = Math.ceil(state.words.length / state.wordsOnPage)
            stateCopy = {...state, totalPages : total}
            return stateCopy
        default :
            return state;
    }
}

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_PAGES = 'TOTAL_PAGES';
export const currentPageAC = (page) => ({type : SET_CURRENT_PAGE, currentPage : page})
export const totalPagesAC = () => ({type : TOTAL_PAGES})
export default myappreducer;