import React from 'react';
import { Container, Form, Input, TextArea, Header, Segment } from 'semantic-ui-react';
import { Contacts, ContactSchema } from '/imports/api/contact/Contact';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms

class Contact extends React.Component {
  render() {
    return (
        <div className="content">
          <Container className="content-container">
            <Header as="h1" textAlign="center">Contact Us</Header>
            <Segment attached className="padding-30">
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-name'
                    control={Input}
                    label='Name'
                    placeholder='Name'
                />
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    placeholder='emailaddress@hawaii.edu'
                />
              </Form.Group>
              <Form.Field
                  id='form-input-control-subject'
                  control={Input}
                  label='Subject'
                  placeholder='Subject'
              />
              <Form.Field
                  style={{ height: 200 }}
                  id='form-textarea-control-opinion'
                  control={TextArea}
                  label='Message'
                  placeholder='Message'
              />
              <Form.Button content='SUBMIT' />
            </Form>
            </Segment>
          </Container>
        </div>
    );

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, email, category, subject, time, description, emailResponse } = data;
//    const owner = Meteor.user().username;
    Contacts.insert({ name, email, subject, category, time, description, emailResponse },
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
