import { connect } from 'react-redux'
import MyApp from './MyApp'
import { test } from '../../redux/myappreducer'

let f1 = (state) => {
    return {
        words : state.myapp.words
    }
}

let f2 = (dispatch) => {
    return {
        test : () => {dispatch(test())},
    }
}

let MyAppContainer = connect(f1, f2)(MyApp);
export default MyAppContainer