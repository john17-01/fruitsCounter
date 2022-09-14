// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatingBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  eatingMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <h1 className="heading">
            Bob ate <span className="color">{mango}</span> mangoes{' '}
            <span className="color">{banana}</span> bananas
          </h1>
          <div className="fruitsSection">
            <div className="mangoFruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                type="button"
                onClick={this.eatingMango}
                className="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="bananaFruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                type="button"
                onClick={this.eatingBanana}
                className="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
