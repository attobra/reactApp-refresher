import React, { Component } from 'react'

export default class ControlledForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
       lname: 'mimi',
       fname:'rashad',
       address:'',
       country:''
    }
  }

  fnameChange= (e) => {
    this.setState({
      fname: e.target.value
    })
  }

  lnameChange= (e) => {
    this.setState({
      lname: e.target.value
    })
  }
  addressChange= (e) =>{
    this.setState({
      address: e.target.value
    })
  }
  countryChange = (e) => {
    this.setState({
      country: e.target.value
    })
  }
displayValues = (e) => {
  alert("Form submitted for " + this.state.country)
  //console.log(this.state.country)
}

  render() {
    return (
      <form>
        <div>
          First Name:
          <input  type="text" name="fname"
          value={this.state.fname}
          onChange={this.fnameChange}/>
        </div>

        <div>
          Last Name: <input  type="text" name="lname"
          value={this.state.lname}
          onChange={this.lnameChange}/>
        </div>

        <div>
          Address: <textarea  type="text" name="address"
          value={this.state.address}
          onChange={this.addressChange}/>
        </div>
        <div>
          Country:
          <select
          value={this.state.country}
          onChange={this.countryChange}>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
          </select>
        </div>

        <button type="submit"
        onClick={this.displayValues}>CLICK Controlled form</button>
      </form>
    )
  }
}
