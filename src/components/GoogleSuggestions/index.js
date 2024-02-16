import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {search: ''}

  searchInput = event => {
    this.setState({search: event.target.value})
  }

  searchHistory = suggestion => {
    this.setState({search: suggestion})
  }

  render() {
    const {search} = this.state

    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="search-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search">
          <div className="search-Input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search Google"
              onChange={this.searchInput}
            />
          </div>
          <ul className="suggestion-container">
            {searchResult.map(each => (
              <SuggestionItem
                key={each.id}
                suggestionItems={each}
                searchHistory={this.searchHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
