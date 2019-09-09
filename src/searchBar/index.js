import React, {Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AutoSuggest from '../suggest/index'
import '../css/searchbar.css'

const useStyles = theme => ({
  grow: {
    flexGrow: 1,
    width: "100%",
  },
  search: {
    position: "relative",
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    marginRight: 20+"px",
    marginLeft: 0,
    width: "100%",
    marginBottom: 2+"px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 30+"px",
      width: "auto"
    }
  },
  searchIcon: {
    width: 20+"px",
    height: "95%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15+"px"
  },
});

class SearchBox extends Component {
  constructor(props)
  {
    super(props);
  }  

  render(){
    const { classes } = this.props;
    return (
      <div className="Search">
        <div className={classes.grow}>
          <div className={classes.search}>
          <div className={classes.searchIcon}>
              <SearchIcon />
          </div>
          <AutoSuggest/>
          </div>
      </div>
      </div>
      
    )
  }
}

export default withStyles(useStyles)(SearchBox);