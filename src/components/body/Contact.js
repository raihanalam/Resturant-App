import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';


class Contact extends Component {
     constructor(props){
          super(props);
          this.state = {
               firstname: "",
               lastname: "",
               telnum: "",
               email: "",
               agree: false,
               contacttype: 'Tel.',
               message: ''

          }
     }

     render() {

          return (
               <div className="container">
                    <div className="row row-content" style={{paddinLeft: "20px", textAlign: "left"}}>
                         <div className="col-12">
                              <h3>Send us your Feedback</h3>
                         </div>
                         <div className="col-12 col-md-7">
                              <Form>
                                   <FormGroup row>
                                        <Label htmlFor="firstname"firstname md={2}>First Name</Label>
                                        <Col md={10}>
                                             <Input type="text" name="firstname" placeholder="First Name"
                                             value={this.state.firstname}/>
                                        </Col>
                                   </FormGroup>
                                   <FormGroup row>
                                        <Label htmlFor="lastname" md={2}>Latst Name</Label>
                                        <Col md={10}>
                                             <Input type="text" name="lastname" placeholder="Last Name"
                                             value={this.state.lastname}/>
                                        </Col>
                                   </FormGroup>
                                   <FormGroup row>
                                        <Label htmlFor="telnum" md={2}>Tel. Number</Label>
                                        <Col md={10}>
                                             <Input type="text" name="telnum" placeholder="Tel. Number"
                                             value={this.state.telnum}/>
                                        </Col>
                                   </FormGroup>
                                   <FormGroup row>
                                        <Label htmlFor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                             <Input type="text" name="email" placeholder="Email"
                                             value={this.state.email}/>
                                        </Col>
                                   </FormGroup>
                                   <FormGroup row>
                                        <Col md={{size:6, offset:2}}>
                                             <FormGroup check>
                                                  <Label check>
                                                       <Input type="checkbox" name="agree" checked={this.state.agree}/><strong>May we contact you?</strong>
                                                  </Label>
                                             </FormGroup>
                                             
                                        </Col>
                                        <Col md={{size:2, offset:1}}>
                                             <Input type="select" name="contactType" value={this.state.contacttype}>
                                                  <option>Tel.</option>
                                                  <option>Email</option>
                                             </Input>
                                             
                                        </Col>

                                   </FormGroup>
                                   <FormGroup row>
                                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                                        <Col md={10}>
                                             <Input type="textarea" name="message" value={this.state.message} rows="12">

                                             </Input>
                                        </Col>
                                   </FormGroup>
                                   <FormGroup>
                                        <Col md={{size:10, offset:2}}>
                                             <Button type="submit" color="primary">
                                                  Send Feedback
                                             </Button>
                                        </Col>
                                   </FormGroup>
                              </Form>
                         </div>
                    </div>
               </div>
          );
     }
}

export default Contact