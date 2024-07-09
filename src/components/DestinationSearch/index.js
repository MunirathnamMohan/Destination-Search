import {Component} from 'react'
import DestinationItem from './components/DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props

    return (
      <div className="bg-container">
        <h1 className="header">Destination Search</h1>
        <div className="con">
          <input type="search" placeholder="Search" className="inputEle" />
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-img"
          />
        </div>
        <ul>
          {destinationsList.map(each => (
            <DestinationItem destinationsList={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
