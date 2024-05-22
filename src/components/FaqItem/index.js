// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {show: false}

  onClickButton = () => {
    this.setState(priv => ({show: !priv.show}))
  }

  renderAnswer = () => {
    const {show} = this.state
    const {listOfItems} = this.props
    const {answerText} = listOfItems
    if (show) {
      return <p>{answerText}</p>
    }
    return null
  }

  renderActiveImage = () => {
    const {show} = this.state
    const image = show
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = show ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onClickButton}>
        <img src={image} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const {listOfItems} = this.props
    const {questionText} = listOfItems
    return (
      <li className="list-items-container">
        <div className="heading-para">
          <h1>{questionText}</h1>
          {this.renderAnswer()}
        </div>
        {this.renderActiveImage()}
      </li>
    )
  }
}

export default FaqItem
