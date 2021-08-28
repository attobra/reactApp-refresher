import React, { Component } from 'react'

export default class UncontrolledForm extends Component {
  constructor(props) {
    super(props)

    this.fnamectrl = React.createRef()
    this.lnamectrl = React.createRef()
    //event binding
    this.displayData = this.displayData.bind(this)

  }
  displayData(event){
    alert("first name and last name are being displayed")
    alert(this.fnamectrl.current.value)
    alert(this.lnamectrl.current.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.displayData}>
        <label> First Name:
          <input type="text" name="fname" ref={this.fnamectrl}/>
        </label>

        <label> Last Name:
          <input type="text" name="lname" ref={this.lnamectrl}/>
        </label>
        <input type="submit" value="click"/>
      </form>
    )
  }
}
