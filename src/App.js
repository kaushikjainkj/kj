import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import AgeCalc from './ageCalc.js';


class App extends Component {
  constructor(){
    super();

    this.state ={
      newDate : '',
      birthday : '0-0-0'
    }
  }

  changeBirth(){
    console.log(this.state);
    this.setState({birthday: this.state.newDate });
  }
  render() {
    return (
      <div className = 'App'>
      <h2>Enter your birthday!</h2>
        <Form inline>
          <FormControl 
            type='date'
            onChange ={event => this.setState({newDate: event.target.value })}
          >
          </FormControl>
          <Button onClick = {() => this.changeBirth()}>
            Submit
          </Button>
          <div className = 'display'>
            <AgeCalc date = {this.state.birthday}/>
          </div>

        </Form>
      </div>
    )
  }
}

export default App;
