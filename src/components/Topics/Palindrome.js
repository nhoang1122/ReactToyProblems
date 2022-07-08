import React, { Component } from "react";

class Palindrome extends Component {
  constructor () {
    super();

    this.state = {
      userInput : '',
      palindrome: ''
    }
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  isPalindrome(userInput) {
    var forwards = userInput;
    var backwards = userInput;
    backwards = backwards.split('').reverse().join('');
    
    if ( forwards === backwards ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(evt) => {this.handleChange(evt.target.value)}} />
        <button className="confirmationButton" onClick={() => {this.isPalindrome(this.state.userInput)}}>CHECK</button>
        <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
      </div>
      
    )
  }
}

export default Palindrome;
