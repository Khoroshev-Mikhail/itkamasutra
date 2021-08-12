import { connect } from 'react-redux'
import MyApp from './MyApp'
import { currentPageAC, totalPagesAC } from '../../redux/myappreducer'

let f1 = (state) => {
    return {
        words : state.myapp.words,
        currentPage : state.myapp.currentPage,
        totalPages : state.myapp.totalPages,
        wordsOnPage : state.myapp.wordsOnPage
    }
}

let f2 = (dispatch) => {
    return {
        currentPageAC : (page) => {dispatch(currentPageAC(page))},
        totalPagesAC : () => {dispatch(totalPagesAC())}
    }
}

let MyAppContainer = connect(f1, f2)(MyApp);
export default MyAppContainer