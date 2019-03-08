import React, {Component} from 'react';
import axios from 'axios';
import {Form, Icon, Container, Modal, Button, Segment} from 'semantic-ui-react';

class EmailSubmissionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert("Thank You, Your Email Has Been Submitted but not stored yet!");
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
            <Form.Input
                name="Email Address" 
                placeholder="Email Address" 
                value={this.state.value} 
                onChange={this.handleChange} 
                required
                />
            <Button  value="Submit">
            Submit
            </Button>
            </Form>
                </div>
        );
    }
}


export default EmailSubmissionForm;