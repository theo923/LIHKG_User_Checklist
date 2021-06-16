import React from 'react'
import { Footer } from './Footer'
import { SearchField } from './SearchField'
import { UserComponents } from './UserComponents'
import { Heading } from './Heading'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      keyword: '',
    }
  }

  onSearchFieldChange = e => {
    this.setState({keyword: e.target.value})
  }

  render() {
    return (
      <div>
        <Heading />
        <SearchField searchFieldChange={this.onSearchFieldChange} />
        <UserComponents keyword={this.state.keyword}/>
        <Footer />
      </div>
    )
  }
}

export default App;