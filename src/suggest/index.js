import React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import InputBase from "@material-ui/core/InputBase";
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { getTheNews } from '../api/getNews'
import '../App.css'

var suggestions =  []


function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <InputBase
      placeholder="Search…" 
      classes={{
      root: classes.inputRoot,
      input: classes.inputInput
      }}
      inputProps={inputProps}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
 
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  return (
    <div className="suggest-list-container">
      <div className="suggest-name">
        {(parts).map((part) => part.text)}
      </div>
      <Divider variant="middle"/>
      <div className="suggest-description">{suggestion.description}</div>
    </div>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  getTheNews().then((res) => {
    let result = []
    res.forEach(function(element){
      let {title, description} = element
      result.push({name:title, description:description})
    })
    console.log(result, 'result')
    return suggestions = result
  })
    return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.name.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.name, suggestion.description
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    borderRadius: 5,
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    overflow: 'visible'
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing(2),
  },
  inputRoot: {
    color: "inherit",
    overflow: "visible",
    borderRadius: 5
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "30%",
    borderRadius: 5
    }
  }
));

export default function IntegrationAutosuggest() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    single: '',
    popper: '',
  });

  const [stateSuggestions, setSuggestions] = React.useState([]);

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = name => (event, { newValue }) => {
    setState({
      ...state,
      [name]: newValue,
    });
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
  };

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          id: 'react-autosuggest-simple',
          placeholder: 'Search',
          value: state.single,
          onChange: handleChange('single'),
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    
    </div>
  );
}



// import React, {Component} from 'react'
// import Autosuggest from 'react-autosuggest';
// import { getTheNews } from '../api/getNews'
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core'


// // Imagine you have a list of newsArray that you'd like to autosuggest.
// var newsArray = []



// // Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : newsArray.filter(lang =>
//     lang.name.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };
// const renderInputComponent = () => {

// }

// // When suggestion is clicked, Autosuggest needs to populate the input
// // based on the clicked suggestion. Teach Autosuggest how to calculate the
// // input value for every given suggestion.
// const getSuggestionValue = suggestion => suggestion.name;

// // Use your imagination to render suggestions.
// const renderSuggestion = suggestion => (
//   <div>
//       <Paper>
//         {suggestion.name}
//       </Paper>

//   </div>
// );


// class AutoSuggest extends Component {
//   constructor() {
//     super();

//     // Autosuggest is a controlled component.
//     // This means that you need to provide an input value
//     // and an onChange handler that updates this value (see below).
//     // Suggestions also need to be provided to the Autosuggest,
//     // and they are initially empty because the Autosuggest is closed.
//     this.state = {
//       value: '',
//       suggestions: [],
//       loading: true,
//       data: []
//     };
//   }
  
//   onChange = (event, { newValue }) => {
//     this.setState({
//       value: newValue
//     });
//   };

//   // Autosuggest will call this function every time you need to update suggestions.
//   // You already implemented this logic above, so just use it.
//   onSuggestionsFetchRequested = ({ value }) => {
//     this.setState({
//       suggestions: getSuggestions(value)
//     });
//   };

//   // Autosuggest will call this function every time you need to clear suggestions.
//   onSuggestionsClearRequested = () => {
//     this.setState({
//       suggestions: []
//     });
//   };

  

//   componentDidMount() {
//   
//     )

    
//   }

  

//   render() {
//     const { value, suggestions, data, loading } = this.state;
//     // Autosuggest will pass through all these props to the input.

//     const inputProps = {
//       placeholder: 'Type a programming language',
//       value,
//       onChange: this.onChange
//     };

//     newsArray = data
//     // Finally, render it!
//     return (
//       <Autosuggest
//         suggestions={suggestions}
//         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//         getSuggestionValue={getSuggestionValue}
//         renderSuggestion={renderSuggestion}
//         inputProps={inputProps}
//       />
//     );
//   }
// }

// export default AutoSuggest