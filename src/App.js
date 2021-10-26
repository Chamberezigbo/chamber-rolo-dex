import React, { Component } from 'react';


import { CardList } from './components/card-list/Card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
    
  }
  handleChang =(e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {

    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Chamber Rolodex</h1>
        < SearchBox
          placeholder='search monster'
          handleChang={this.handleChang}
        
        />
        <CardList monsters={filteredMonster} />
      </div>
    )
  }
}


export default App;
