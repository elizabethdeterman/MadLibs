import React, { component } from 'react';
import {
    Col,
    Row,
    Card    
}
from 'reactstrap'; 
import _ from'lodash';

function MadlibInput(props) {
    return (
        <Col md="3" className="input-wrapper">
                <Row>
                <Col md="2">
                    <label className="green-lable">{props.index}</label>
                    </Col>
                        <Col md="10">
                            <input placeholder={props.placeholder} value={props.state} tyepe='text' onChange={props.onChange}/> 
                        </Col>
            </Row>
            <Row>
                <Col md="2"></Col>
                    <Col md="10">
                    <div className="input-description">{props.placeholder}</div>
                </Col>
            </Row>
        </Col>
    );    
}

class MadlibForm extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                completedForm: false,
                color:'',
                pluralNoun:'',
                adjectiveOne:'',
                facultyOne:'',
                adjectiveTwo:'',
                nounOne:'',
                numberOne:'',
                numberTwo:'',
                nounTwo:'',
                adjectiveThree:'',
                facultyTwo:'',
                facultyThree:'',
                adjectiveFour:'',
                nounThree:'',
                facultyFour:'',
                adjectiveFive:'',
            }
            
        }
    handleChange = function(props) {
            return function(event) {
                //console.log(`value for input ${props.inputTitle} is: ${event.target.value}`)
                this.setState({[props.inputTitle]: event.target.value});
                console.log(`value for state ${props.inputTitle} is ${this.state[props.inputTitle]}`)
            }.bind(this);
        
         }

handleSubmit = function(event) {
    this.setState({completedForm: true }); 
    event.preventDefault();

}.bind(this);

handleClick = function() {
    this.setState  ({
        completedForm: false,
        color:'',
        pluralNoun:'',
        adjectiveOne:'',
        facultyOne:'',
        adjectiveTwo:'',
        nounOne:'',
        numberOne:'',
        numberTwo:'',
        nounTwo:'',
        adjectiveThree:'',
        facultyTwo:'',
        facultyThree:'',
        adjectiveFour:'',
        nounThree:'',
        facultyFour:'',
        adjectiveFive:'',
    });
}.bind(this);
renderButton= function(){
    if(this.state.completedForm){
        return <a className="clear-button" onClick={this.handleClick}>Clear Mad Lib </a>
    }
    return <input type="submit" className="generate-button" value="Generate Mad Lib" />
}

    render() {

    this.inputData = [
        {placeholder: 'Color', prop: 'color', state: this.state.color},
        {placeholder: 'Noun (Plural)', prop: 'pluralNoun', state: this.state.pluralNoun},
        {placeholder: 'Adjective', prop: 'adjectiveOne', state: this.state.adjectiveOne},
        {placeholder: 'Faculty', prop: 'facultyOne', state: this.state.facultyOne},
        {placeholder: 'Adjective', prop: 'adjectiveTwo', state: this.state.adjectiveTwo},
        {placeholder: 'Noun', prop: 'nounOne', state: this.state.nounOne},
        {placeholder: 'Number', prop: 'numberOne', state: this.state.numberOne},
        {placeholder: 'Number', prop: 'numberTwo', state: this.state.numberTwo},
        {placeholder: 'Noun', prop: 'nounTwo', state: this.state.nounTwo},        
        {placeholder: 'Adjective', prop: 'adjectiveThree', state: this.state.adjectiveThree},  
        {placeholder: 'Faculty', prop: 'facultyTwo', state: this.state.facultyTwo},  
        {placeholder: 'Faculty', prop: 'facultyThree', state: this.state.facultyThree}, 
        {placeholder: 'Adjective', prop: 'adjectiveFour', state: this.state.adjectiveFour},  
        {placeholder: 'Noun', prop: 'nounThree', state: this.state.nounThree},  
        {placeholder: 'Faculty', prop: 'facultyFour', state: this.state.facultyFour}, 
        {placeholder: 'Adjective', prop: 'adjectiveFive', state: this.state.adjectiveFive},  ]
        
      return (
        <div className="card-wrapper">
            <Card> 
                <form onSubmit={this.handleSubmit} id="madlib-form">
                <Row style={{textAlign:'center', color:'white'}}>
                    {
                        _.map(this.inputData, (data, indexKey) => {
                            return <MadlibInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
                        })
                }
                </Row>
                <Row>
                    <Col md="12" className="button-wrapper">
                    {this.renderButton()}
                    
                    </Col>
                </Row>
                </form>
             </Card>
             </div>
      );
    }
}

    
  export default MadlibForm; 