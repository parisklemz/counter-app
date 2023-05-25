import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import HooksTest from './components/hookstest';
import ApiTest from './components/apitest';
import './index.css';
import ApiButton from './components/apibutton';
import intoDyno from './components/intodynamo';

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
 }; 

 handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
 }

 handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
 };

 handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
 };

 handlePost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  title: 'title',
                  body: 'body',
                  userId: 1,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));      
 }

//  handleDynamo = () => {
//   fetch('https://4kqjb4eqtl.execute-api.us-east-2.amazonaws.com/Dev/student', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'title',
//       body: 'body',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));   
//  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
        totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          />
        <HooksTest />
        <ApiButton 
        onPost={this.handlePost}/>
        <button 
        onClick = {intoDyno} 
        >
          Click here
        </button>
        {/* <ApiTest /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
