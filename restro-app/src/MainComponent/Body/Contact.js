import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            telNum: "",
            email: "",
            agree: false,
            contactType: "Tel",
            message: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    };


    render() {
        document.title = 'Contact';
        return (
            <div className='container'>
                <div className='row row-content' style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className='col-12'>
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className='col-12 col-md-7'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstName' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' name='firstName' placeholder='First Name'
                                        value={this.state.firstName} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastName' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' name='lastName' placeholder='Last Name'
                                        value={this.state.lastName} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telNum' md={2}>Contact No</Label>
                                <Col md={10}>
                                    <Input type='text' name='telNum' placeholder='Contact No'
                                        value={this.state.telNum} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email' name='email' placeholder='Email'
                                        value={this.state.email} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' name='agree'
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type='select' name='contactType'
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}
                                    >
                                        <option>Tel</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Message</Label>
                                <Col md={10}>
                                    <Input type='textarea' name='message' placeholder='Your Message'
                                        value={this.state.message} rows={10}
                                        onChange={this.handleInputChange} ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send us feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Contact;