import React from 'react';
import { Contacts, ContactSchema } from '/imports/api/contact/Contact';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms

/** Renders the Page for adding a document. */
class Contact extends React.Component {

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

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Contact Us</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={ContactSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='name'/>
                <TextField name='email'/>
                <SelectField name='category'/>
                <TextField name='subject'/>
                <TextField name='description'/>
                <SelectField name='emailResponse'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Contact;
