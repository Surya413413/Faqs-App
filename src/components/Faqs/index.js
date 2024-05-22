// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="second-container">
          <h1 className="heading-FAQs">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem listOfItems={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
