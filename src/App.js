import { version, Component } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import { BrowserRouter, Route, Link } from 'inferno-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <h1>{`Welcome to Inferno Test`}</h1>
        </header>
        <hr/>
        <BrowserRouter>
          <div className="container">
            <div className="row">
              <div className="col-md-4"><Link to="/">Home</Link></div>
              <div className="col-md-4"><Link to="/about">About</Link></div>
              <div className="col-md-4"><Link to="/topics">Topics</Link></div>
            </div>

            

            {/* <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/> */}
          </div>
        </BrowserRouter>
        <hr/>
      </div>
    );
  }
}

export default App;
