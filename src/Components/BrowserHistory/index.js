import React, { Component } from 'react'
import './index.css'
import BrowserArrayList from './BrowserHistoryArrayList/BrowserHistoryArray';
import HistoryProps from './HistoryProps';

class HistoryBrowser extends Component {

state = {
    searchInput: "",
    usersDeleteList: BrowserArrayList
}
deleteItems = uniquedId => {
   
    const {usersDeleteList} = this.state
    const filterBrowser = usersDeleteList.filter(eachtodo => eachtodo.uniquedId !== uniquedId)
 
this.setState({
usersDeleteList:filterBrowser
})
}

toSelectOptions = (event) => {
this.setState({
    searchInput: event.target.value
})
}

  render() {
    const {searchInput} = this.state
    const {usersDeleteList} = this.state
const filtersearchInputArrayList = usersDeleteList.filter((eachitem) => {
    return eachitem.title.toLowerCase().includes(searchInput.toLowerCase())
})

    return (
      <div className='History-Conatiner'>
        <div className='History-items'>
<div className='History-Header-Part'>
<p className='Heading'>HISTORY</p>
<div className='history-Search'>
    <img src='https://assets.ccbp.in/frontend/react-js/search-img.png ' alt='search'/>
<input value = {searchInput}type = "search" className='history-search' placeholder='Search Box' onChange={this.toSelectOptions} />
</div>
</div>
<div className='History-Props-Conatiner'>
    {filtersearchInputArrayList.map((eachitem) => {
        return (
            <div className='History-Props-items'>
                <HistoryProps  HistoryItems = {eachitem} key={eachitem.uniquedId} deleteItems = {this.deleteItems}/>  
            </div>
        )
    })}
      <p className='AlertMessage'> {filtersearchInputArrayList.length === 0 ? <h2>There is no History to show</h2> : ''} 
      </p>
</div>
        </div>
      </div>
    )
  }
}
export default HistoryBrowser;