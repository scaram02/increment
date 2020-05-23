import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {

   

    render() {
      
        return (
            <div>
                {/* onClick was this.handleReset until state needed lifting */}
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => 
                <Counter onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} key={counter.id} counter={counter}/>
                )}}
            </div>
        
    ) }}
