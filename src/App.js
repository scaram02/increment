import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav'
import Counters from './components/Counters'

class App extends Component {


// everything from here to Render taken from Counters.js to lift up the state
 state = {
    counters: [
        {id: 1, val: 0}, {id: 2, val: 0}, {id: 3, val: 0}, {id: 4, val: 0}
    ]
}

constructor() {
  super();
  console.log('app - Constructor');
}

// componentDidMount(){
//   // ajax call
// setState
//   console.log(componentDidMount)
// }

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId)
    this.setState({
        counters
    })
}


handleReset = () => {
  // was this.state.counters until needed state upllifting
    const counters = this.state.counters.map(counter => {
        counter.val = 0
        return counter
    })
    this.setState({counters})
}

handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].val++
    console.log(this.state.counters[index])
    this.setState({
        counters
    })
}

render() {
  return (
   
      <React.Fragment>
     <Nav 
      totalCounters={this.state.counters.filter((v) => v > 0).length}
     />
     <main className='container'>
       <Counters
       // added to lift up the state
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
       /></main>
       </React.Fragment>

  );
}
}


export default App;
