import {Component} from 'react'
import './index.css'

class OnlineLabs extends Component {
  state = {fullname: '', city: '', contact: ''}

  changeUsername = event => {
    this.setState({fullname: event.target.value})
  }

  changeLocation = event => {
    this.setState({city: event.target.value})
  }

  changeUserContact = event => {
    this.setState({contact: event.target.value})
  }

  saveUserDetails = event => {
    event.preventDefault()
    const {fullname, city, contact} = this.state
    console.log(fullname)
    console.log(city)
    console.log(contact)
  }

  render() {
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
              <button type="button" className="book-test">
                Book Your Test
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default OnlineLabs
