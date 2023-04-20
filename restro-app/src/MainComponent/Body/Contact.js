import React, { Component } from 'react';
import { Button, FormGroup, Label, Col, Alert } from 'reactstrap';
import { Form, Errors, Control, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import { baseURL } from '../../Redux/baseURL';

const mapDispatchToProps = dispatch => {
    return {
        resetFeedBackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}

const isRequired = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const isValidEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {

    state = {
        alertShown: false,
        alertText: null,
        alertType: null
    }

    handleSubmit = values => {
        // console.log(values);
        axios.post(baseURL + "feedback", values)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        alertShown: true,
                        alertText: "Submitted successfully",
                        alertType: "success"
                    });
                    setTimeout(() => {
                        this.setState({
                            alertShown: false
                        });
                    }, 2000);
                }
                this.props.resetFeedBackForm();
            })
            .catch(error => {
                this.setState({
                    alertShown: true,
                    alertText: error.message,
                    alertType: "danger"
                });
                setTimeout(() => {
                    this.setState({
                        alertShown: false
                    });
                }, 5000);
            })
    };

    render() {
        document.title = 'Contact';
        return (
            <div className='container'>
                <div className='row row-content' style={{ paddingLeft: "20px", textAlign: "left" }}>

                    <div className='col-12'>
                        <h3>Send us your Feedback</h3>
                        <Alert isOpen={this.state.alertShown} color={this.state.alertType}>
                            {this.state.alertText}
                        </Alert>
                    </div>
                    <div className='col-12 col-md-7'>
                        <Form model='feedback' onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor='firstName' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model='.firstName'
                                        name='firstName'
                                        placeholder='First Name'
                                        className='form-control'
                                        validators={{
                                            isRequired
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.firstName'
                                        show='touched'
                                        messages={{
                                            isRequired: "Required"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastName' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model='.lastName'
                                        name='lastName'
                                        placeholder='Last Name'
                                        className='form-control'
                                        validators={{
                                            isRequired
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.lastName'
                                        show='touched'
                                        messages={{
                                            isRequired: "Required"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telNum' md={2}>Contact No</Label>
                                <Col md={10}>
                                    <Control.text
                                        model='.telNum'
                                        name='telNum'
                                        placeholder='Contact No'
                                        className='form-control'
                                        validators={{
                                            isRequired,
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.telNum'
                                        show='touched'
                                        messages={{
                                            isRequired: "Required, ",
                                            isNumber: "Valid number is required"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        model='.email'
                                        name='email'
                                        placeholder='email'
                                        className='form-control'
                                        validators={{
                                            isRequired,
                                            isValidEmail
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.email'
                                        show='touched'
                                        messages={{
                                            isRequired: "Required, ",
                                            isValidEmail: "Valid email is required"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model='.agree'
                                                name='agree'
                                                className='form-check-input'
                                            />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model='.contactType'
                                        name='contactType'
                                        className='form-control'
                                    >
                                        <option>Tel</option>
                                        <option>Email</option>
                                    </Control.select >
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Message</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model='.message'
                                        name='message'
                                        placeholder='Your Message'
                                        rows="10"
                                        className='form-control'
                                        validators={{
                                            isRequired
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className='text-danger'
                                    model='.message'
                                    show='touched'
                                    messages={{
                                        isRequired: "Required"
                                    }}
                                />
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
            </div >
        );
    }
};

export default connect(null, mapDispatchToProps)(Contact);