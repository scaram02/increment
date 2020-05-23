import React, { Component } from 'react'


 class Counter extends Component {
    constructor(props){
    super(props);
    // this.handleIncrement = this.handleIncrement.bind(this)
    }


//      state  = {
//          val: this.props.counter.val,
         
//      }




formatCount(){
    const {val} = this.props.counter;
    return val === 0? 'zero' : val;
}




    render() {
        let classes = this.getBadgeClasses();
        return (
            <div>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m2">Delete!</button>
            </div>
        )
    }

     getBadgeClasses() {
         let classes = 'badge m-2 badge-';
         classes += (this.props.counter.val === 0) ? 'warning' : 'primary';
         return classes;
     }
}


export default Counter

// 54.59