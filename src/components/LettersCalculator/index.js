// Write your code here.
import {Component} from 'react'
import './index.css'

class LetterCalculator extends Component {
  state = {letterCount: 0}

  updatedLetterCount = event => {
    this.setState({letterCount: event.target.value.length})
  }

  render() {
    const {letterCount} = this.state

    return (
      <div className="letter-calculator-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letter calculator"
          className="letter-calculator-img"
        />

        <div className="letter-calculator-text-con">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="">
            <label htmlFor="input" className="letter-calculator-label-txt">
              Enter the phrase
            </label>
            <br />

            <input
              id="input"
              type="text"
              onChange={this.updatedLetterCount}
              className="letter-calculator-input"
              placeholder="Enter the phrase"
            />
          </div>
          <p className="letter-calculator-counter">
            No.of letters: {letterCount}
          </p>
        </div>
      </div>
    )
  }
}

export default LetterCalculator
