// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItems, searchHistory} = props
  const {suggestion} = suggestionItems
  const displayHistory = () => {
    searchHistory(suggestion)
  }

  return (
    <li className="suggestions-container">
      <p className="suggestion">{suggestion}</p>
      <button className="arrow-button" onClick={displayHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
