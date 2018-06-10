import React, { component } from 'react';
import {
    Col,
    Row    
}
from 'reactstrap'; 

class MadlibForm extends React.Component {
    handleChange = function() {
                console.log('trying to handle change');
            }
    render() {
      return (
          <Row style={{textAlign:'center', color:'white'}}>
              <Col md="3" className="inputWrapper">
              <Row>
                  <Col md="2">
                    <lable className="greenlable">1</lable>
                  </Col>
                  <Col md="10">
                  <input placeholder='Color' type='text' onChange={this.handleChange}/>
                  </Col>
              </Row>
              </Col>
              <Col md="3" className="inputWrapper">
              <Row>
                  <Col md="2">
                    <lable className="greenlable">1</lable>
                  </Col>
                  <Col md="10">
                  <input placeholder='Color' type='text' onChange={this.handleChange}/>
                  </Col>
              </Row>
              </Col>
              <Col md="3" className="inputWrapper">
              <Row>
                  <Col md="2">
                    <lable className="greenlable">1</lable>
                  </Col>
                  <Col md="10">
                  <input placeholder='Color' type='text' onChange={this.handleChange}/>
                  </Col>
              </Row>
              </Col>
              <Col md="3" className="inputWrapper">
              <Row>
                  <Col md="2">
                    <lable className="greenlable">1</lable>
                  </Col>
                  <Col md="10">
                  <input placeholder='Color' type='text' onChange={this.handleChange}/>
                  </Col>
              </Row>
              </Col>
          </Row>

      );
    }
  }

  export default MadlibForm; 