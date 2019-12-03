import React from 'react';
import { Container, Form, Input, TextArea, Header, Segment } from 'semantic-ui-react';
import { Contacts, ContactSchema } from '/imports/api/contact/Contact';
import swal from 'sweetalert';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Meteor } from 'meteor/meteor';

import { array_to_object } from './Offer';

const contactCategories = [
    'Rider/Driver Complaint',
    'Found Bug',
    'Other',
]
const categories = array_to_object(contactCategories);

const contactResponses = [
    'Email Response',
    'No Response Required',
]
const responses = array_to_object(contactResponses);

class Contact extends React.Component {
  state = {
    name: (Meteor.user() ? (Meteor.user().username) : ''),
    email: (Meteor.user() ? (Meteor.user().emails[0].address) : ''),
    category: '',
    subject: '',
    description: '',
    response: '',
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
        <div className="content">
          <Container className="content-container">
            <Header as="h1" textAlign="center">Contact Us</Header>
            <Segment attached className="padding-30">
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input
                      onChange={this.handleChange}
                      id='form-input-control-name'
                      label='Name'
                      name={ 'name' }
                      placeholder={'Name'}
                      defaultValue={this.state.name}
                  />
                  <Form.Input
                      onChange={this.handleChange}
                      id='form-input-control-email'
                      label='Email'
                      name={ 'email' }
                      placeholder={'Email'}
                      defaultValue={this.state.email}
                  />
                </Form.Group>
                <Form.Dropdown
                    onChange={this.handleChange}
                    label='Category'
                    name={ 'category' }
                    options={categories}
                    selection
                    placeholder={'What\'s the issue?'}
                />
                <Form.Input
                    onChange={this.handleChange}
                    id='form-input-control-subject'
                    label='Subject'
                    placeholder='Subject'
                    name={ 'subject' }
                />
                <Form.Input
                    style={{ height: 200 }}
                    id='form-textarea-control-opinion'
                    label='Description'
                    control={TextArea}
                    placeholder='Please describe the issue'
                    name={ 'description' }
                />
                <Form.Dropdown
                    onChange={this.handleChange}
                    label='Response'
                    name={ 'response' }
                    options={responses}
                    selection
                    placeholder={'Would you like a response?'}
                  />
                <Form.Button onClick={this.submit} content='SUBMIT'/>
              </Form>
            </Segment>
          </Container>
        </div>
    );
  }

  /** On submit, insert the data. */
  submit(data, formRef) {
    console.log(this.state);
    const { name, email, category, subject, description, emailResponse } = this.state;
    const owner = Meteor.user()._Id;
    Contacts.insert({ name, email, subject, category,  description, emailResponse, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
    }

}

export default (Contact);
