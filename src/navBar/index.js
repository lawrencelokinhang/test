import React, {Component} from 'react'
import SearchBox from '../searchBar/index'
import '../css/navbar.css'
import AutoSuggest from '../suggest/index'

class NavBar extends Component {
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
          <div className="Nav-bar-container">
            <div className="Nav-bar">
              <div className="Nav-bar-text">
                  US News 
              </div>
              <SearchBox/>
            </div>
          </div>
        )
    }
}

export default NavBar


