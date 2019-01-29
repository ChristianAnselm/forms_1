import React, { Component } from 'react';
import PopulateSelect from './displayCountries'
import PopulateDiet from './dietaryPref'

class Form extends Component {
    constructor(){
    super()
    this.state = {
        name: "",
        lastName: "",
        date: "",
        countries: "",
        formCompleted: false
       
      }
      this.changeHandle = this.changeHandle.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    changeHandle(event){
        this.setState({
        [event.target.name]: event.target.value
    })
}
    
    handleSubmit(event) {
        event.preventDefault()
        const { name, lastName, date, countries, formCompleted }= this.state
        if (name && lastName && date && countries) {
        this.setState({formCompleted:!formCompleted})
       
        }
    }

    
    render() {
        console.log(this.state)
        if (this.state.formCompleted) {
            return (<div>
                Form submitted
            </div>)
        }
        
        return (
            <div>
                <h1>Mission to Mars Registration Form</h1>
                <div>
                    <form className="form">
                    <label htmlFor="name">First Name: </label>
                    <input onChange={this.changeHandle} type="text" name="name" value={this.name}></input>
                    <br/>
                    <br/>
                    <label htmlFor="lastName">Last Name: </label>
                    <input onChange={this.changeHandle} type="text" name="lastName" value={this.lastName}></input>
                   < hr/>
                    <label for="start">DOB: </label>
                    <input onChange={this.changeHandle} type="date" name="date" min="1901-01-01" max="2019-12-31"/>
                    < br/>
                    <br/>
                    <p>Select your Country of Origin</p>
                    < select name = "countries" onChange = {this.changeHandle} >
                        <option value = "" > Country of Origin </option> 
                        <PopulateSelect />
                    </select>
                    <hr/>
                    <p>What's your dietary preference?</p>
                    <select name = "diet" onChange = {this.changeHandle} >
                        <option value = "" > Diet </option>
                        <PopulateDiet />
                    </select>
                    <br/>
                    <p> Why do you want to be a Mars explorer ? </p>
                    <input className="why" name = "whyMars" onChange = {this.changeHandle} type = "text"></input>
                    <br/>
                    <button name ="submit" onSubmit = {this.handleSubmit} >SUBMIT!</button>

                    </form>
                </div>
                <div className="Johnny">
                <img className="joy" src="https://www.washingtonpost.com/resizer/nF0Ep9wjnMUMs2xAw4PYBt6IiWY=/480x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EHBDQNJ6VY2E3JROUFOMONLBQQ.jpg"></img>
                </div>
            </div>
            
            )
        }
    }

export default Form;