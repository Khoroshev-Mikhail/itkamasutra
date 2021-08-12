import React from 'react'

class MyApp extends React.Component{
    constructor(props){
        super(props)
        this.props.totalPagesAC();
    }
    setCurrentPage = (page) => {
        this.props.currentPageAC(page)
    }
    componentDidMount = () => {
    }
    giveWords = () => {
        let startIndex = (this.props.currentPage - 1) * this.props.wordsOnPage
        let arr = [];
        for(let i = 0; i < this.props.wordsOnPage; i++){
            arr.push(this.props.words[startIndex+i])
        }
        let arr2 = arr.map(el => 
            <div>{el.kiss}</div>)
        return arr2;
    }
    render(){
        return (
            <div>
                <button onClick={()=>{this.setCurrentPage(1)}}>1</button>
                <button onClick={()=>{this.setCurrentPage(2)}}>2</button>
                <button onClick={()=>{this.setCurrentPage(3)}}>3</button>
                <p>{this.props.currentPage}</p>
                <p>{this.props.totalPages}</p>
                <div>
                    {this.giveWords()}
                </div>
            </div>
        )
    }

}

export default MyApp;