import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-App-container">
        <div className="counter-reader">
          <h1 className="counter-text-with-number">
            The Button has been clicked
            <span className="counter-color">{count}</span>
            times
          </h1>
          <p className="click-button">click the button to increase the count</p>
          <button className="count-increase-button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
