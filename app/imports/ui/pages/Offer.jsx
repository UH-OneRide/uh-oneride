import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Offers } from '../../api/offer/Offer';

const formSchema = new SimpleSchema({
  beginDate: String,
  endDate: String,
  destination: String,
  estimatedArrival: String,
  seats: Number,
  price: Number,
  car: String,
  description: String,
});

/** Renders the Page for adding a document. */
class AddOffer extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { beginDate, endDate, destination, estimatedArrival, seats, price, car, description } = data;
    let owner = Meteor.user().username;
    if (owner === null) {
      owner = 'temp';
    }
    Offers.insert({ beginDate, endDate, destination, estimatedArrival, seats, price, car, description, owner },
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
            <Header as="h2" textAlign="center">Offer A Ride</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='beginDate'/>
                <TextField name='endDate'/>
                <TextField name='destination'/>
                <TextField name='estimatedArrival'/>
                <NumField name='seats' decimal={false}/>
                <NumField name='price' decimal={true}/>
                <TextField name='car'/>
                <TextField name='description'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddOffer;
