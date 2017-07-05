import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import {database} from '../../firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      value: null
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  componentDidMount () {
    const user = database.ref();
    user.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
      console.log(snapshot.val());
    });
  }

  addPortfolio = () => {
    const pfKey = database.ref(`users/abhi2000/portfolios/${this.state.value}`);
    pfKey.set(true);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input onChange={ this.handleChange }/>
          <button onClick={ this.addPortfolio }>Submit</button>
        </p>
        <div className="data">
          { JSON.stringify(this.state.data, null, 2) }
        </div>
      </div>
    );
  }
}

export default App;
