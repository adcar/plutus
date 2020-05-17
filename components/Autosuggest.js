import Autosuggest from "react-autosuggest";
import React from "react";
import Result from "./Result";
/* ---------- */
/*    Data    */
/* ---------- */

const languages = [
  {
    name: "C",
    year: 1972
  },
  {
    name: "C#",
    year: 2000
  },
  {
    name: "C++",
    year: 1983
  },
  {
    name: "Clojure",
    year: 2007
  },
  {
    name: "Elm",
    year: 2012
  },
  {
    name: "Go",
    year: 2009
  },
  {
    name: "Haskell",
    year: 1990
  },
  {
    name: "Java",
    year: 1995
  },
  {
    name: "Javascript",
    year: 1995
  },
  {
    name: "Perl",
    year: 1987
  },
  {
    name: "PHP",
    year: 1995
  },
  {
    name: "Python",
    year: 1991
  },
  {
    name: "Ruby",
    year: 1995
  },
  {
    name: "Scala",
    year: 2003
  }
];

function getMatchingLanguages(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return languages.filter(language => regex.test(language.name));
}

/* ----------- */
/*    Utils    */
/* ----------- */

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* --------------- */
/*    Component    */
/* --------------- */

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  if (suggestion.isYahooFinance) {
    return <Result {...suggestion} />;
  } else {
  }
}

class AutosuggestComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
      isLoading: false
    };
  }

  loadSuggestions(value) {
    this.setState({
      isLoading: true
    });

    fetch(
      `https://corsssssss.herokuapp.com/https://query1.finance.yahoo.com/v1/finance/search?q=${value}&lang=en-US&region=US&quotesCount=6&newsCount=4&enableFuzzyQuery=false&quotesQueryId=tss_match_phrase_query&multiQuoteQueryId=multi_quote_single_token_query&newsQueryId=news_cie_vespa&enableCb=true&enableNavLinks=true&enableEnhancedTrivialQuery=true`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoading: false,
          suggestions: json.quotes.filter(quote => {
            if (quote.isYahooFinance) {
              return quote;
            }
          })
        });
      });
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions, isLoading } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    // @ts-ignore
    return (
      <>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          style={{
            backgroundColor: "red !important"
          }}
        />
      </>
    );
  }
}

export default AutosuggestComponent;
