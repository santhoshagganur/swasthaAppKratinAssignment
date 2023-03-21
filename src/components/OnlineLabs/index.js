import {Component} from 'react'
import './index.css'

class OnlineLabs extends Component {
  state = {fullName: '', city: '', contact: '', isSuccess: false}

  changeUsername = event => {
    const {target} = event
    const {value} = target

    this.setState({fullName: value})
  }

  changeLocation = event => {
    const {target} = event
    const {value} = target
    this.setState({city: value})
  }

  changeUserContact = event => {
    const {target} = event
    const {value} = target

    this.setState({contact: value})
  }

  checkFirstName = () => {
    const {fullName} = this.state
    return fullName !== ''
  }

  checkCity = () => {
    const {city} = this.state
    return city !== ''
  }

  checkContact = () => {
    const {contact} = this.state
    return contact !== ''
  }

  saveUserDetails = event => {
    console.log(event)
    event.preventDefault()
    const isValidFirstName = this.checkFirstName()
    const isValidCity = this.checkCity()
    const isValidContact = this.checkContact()
    console.log(isValidCity)
    console.log(isValidContact)
    console.log(isValidFirstName)

    if (isValidCity && isValidContact && isValidFirstName) {
      this.setState({isSuccess: true})
    } else {
      this.setState({isSuccess: false})
    }
  }

  renderSuccessView = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <h1 className="success-status">
        Our health advisor will contact you with in 15 Mins!
      </h1>
    </div>
  )

  renderForm = () => (
    <form className="user-details" onSubmit={this.saveUserDetails}>
      <label htmlFor="full-name" className="label-element">
        Full Name
      </label>
      <input
        type="text"
        className="input-element"
        id="full-name"
        placeholder="Patient Name"
        onChange={this.changeUsername}
      />
      <label htmlFor="city" className="label-element">
        City
      </label>
      <input
        type="text"
        className="input-element"
        id="city"
        placeholder="City"
        onChange={this.changeLocation}
      />
      <label htmlFor="contact" className="label-element">
        Contact Number
      </label>
      <input
        type="number"
        className="input-element"
        id="contact"
        placeholder="Mobile number"
        onChange={this.changeUserContact}
      />
      <div className="book-your-test-container">
        <button type="submit" className="book-test">
          Book Your Test
        </button>
      </div>
    </form>
  )

  render() {
    const {isSuccess} = this.state

    return (
      <div className="online-labs-container">
        <div className="online-labs-card-container">
          <h1 className="online-labs-heading">
            Fast & Accurate Lab Test Reports
          </h1>
          <p className="online-labs-description">
            We provide a quick response, and tests are at a reasonable price you
            will get a timely updates over a whatsapp.
          </p>
          {isSuccess ? this.renderSuccessView() : this.renderForm()}
        </div>
      </div>
    )
  }
}

export default OnlineLabs
