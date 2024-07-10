import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const serchresults = destinationsList.filter(each =>
      each.name.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <h1 className="header">Destination Search</h1>
        <div className="con">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onSearchInput}
            className="inputEle"
            value={searchInput}
          />
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-img"
          />
        </div>
        <ul className="cards-con">
          {serchresults.map(each => (
            <DestinationItem key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
