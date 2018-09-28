import React, { Component } from 'react';

class Counter extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: props.count
      };
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
   }

   handleAddOne() {
      this.setState(prevState => {
         return {
            count: prevState.count + 1
         };
      });
   } // handleAddOne

   handleMinusOne() {
      this.setState(prevState => {
         return {
            count: prevState.count - 1
         };
      });
   } // handleMinusOne

   handleReset() {
      this.setState(() => {
         return {
            count: 0
         };
      });
   } // handleReset

   render() {
      return (
         <div>
            <h1>Count: {this.state.count}</h1>
            <div>
               <button onClick={this.handleAddOne} id="addone">
                  +2
               </button>

               <button onClick={this.handleMinusOne} id="minusone">
                  -1
               </button>
               <button onClick={this.handleReset} id="reset">
                  Reset
               </button>
            </div>
         </div>
      );
   } //render
} // Counter class

export default Counter;
