import React, { Component } from "react";

class Sum extends Component {

  constructor(){
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  updateNumber1(val) {
    this.setState({number1: parseInt(val,10)})
  }
  updateNumber2(val) {
    this.setState({number2: parseInt(val,10)})
  }
  add(num1,num2) {
    this.setState({sum: num1 + num2})
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>SUM</h4>
        <input type="number" className="inputLine" onChange={(evt)=> {this.updateNumber1(evt.target.value)}}/>
        <input type="number" className="inputLine" onChange={(evt)=> {this.updateNumber2(evt.target.value)}}/>
        <button className="confirmationButton" onClick={() => {this.add(this.state.number1, this.state.number2)}}>ADD</button>
        <span className="resultsBox"> SUM : {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum;
