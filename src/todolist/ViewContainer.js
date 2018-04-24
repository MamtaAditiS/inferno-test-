import {render, Component } from 'inferno'


export default class ViewContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            tasks : []
        }
    }

    onchange = (e) => {
        let {tasks = []} = this.state 
        let task = {
            'id': this.state.tasks.length + 1,
            'desc' : e.target.value
        }
        this.state.tasks.push(task)
        this.setState({
            tasks
        })
    }

    onSave = () => {
        let {tasks = []} = this.state 
        this.setState({
            tasks
        })
    }

    
    render(){
        let {tasks = []} = this.state
        return(
            <div style={{margin : '20px 20px'}}>
                <input  onchange={this.onchange}/> <button>Add</button>

                <ul style={{ margin : '20px'}}> 
                    {tasks.length > 0 ? tasks.map(task => <li>{task.desc}</li> ) : <p>No task available</p>}
                </ul>
        </div>)
    }
}