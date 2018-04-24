import { version, Component } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import { BrowserRouter, Route, Link } from 'inferno-router';
import ViewContainer from '../src/todolist/ViewContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <h1>{`My Todo List`}</h1>
        </header>
        <hr/>
        <div className="container" style={{height : '1000px'}}>
            <div className="row">
              <ViewContainer/>
            </div>
        </div>
        {/* <BrowserRouter>
          <div className="container" style={{height : '1000px'}}>
            <div className="row">
              <div className="col-md-4"><Link to="/">My Todo List</Link></div>
              <div className="col-md-4"><Link to="/about">About</Link></div>
              <div className="col-md-4"><Link to="/topics">Topics</Link></div>
            </div>
            <Route exact path="/" component={ViewContainer}/>
            {/*<Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/> 
          </div>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
