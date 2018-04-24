import {render, Component } from 'inferno'


export default class ViewContainer extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div style={{margin : '20px 20px'}}>
                <input/> <button>Add</button>
        </div>)
    }
}