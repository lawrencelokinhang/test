import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navBar/index'
import NewsList from './home/index'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // update: false,
      data: [],
      loading: true
    }
  }

  render(){
    
    return (
      <div className="App">
        <NavBar/>
        <div>
          <NewsList />
        </div>  
      </div>
    );
  }
}

export default App;
