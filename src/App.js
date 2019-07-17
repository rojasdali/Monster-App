import React, { Component }  from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/searchbox/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      title: 'Monsters Rolodex'
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(user => this.setState({ monsters: user }))
  }

  handleChange = (e) => {
   this.setState({ searchField: e.target.value, title: e.target.value })
  }
  render () {
    const { monsters, searchField,title } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1>{title}</h1>
      <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      <header className="App-header">
        <p>
          Dali Rojas
        </p>
      <button onClick={()=>this.setState({string: 'DeezNuts'})}></button>
      </header>
    </div>
  );
  }
}

export default App;
