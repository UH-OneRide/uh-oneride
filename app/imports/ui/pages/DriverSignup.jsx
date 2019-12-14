import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Drivers } from '../../api/driver/Driver';

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class DriverSignup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { ownerID: {}, error: '', redirectToReferer: false };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
 }

  /** Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { username, email, password } = this.state;
    console.log(this.state);
    Accounts.createUser({ username, email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/add' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
        <div className="content">
        <Container className="content-container">
        <Grid textAlign="center" verticalAlign="middle" centered >
          <Grid.Column>
            <Header as="h2" textAlign="center">
            </Header>
            <Form onSubmit={this.submit}>
                <Form.Group widths='equal'>
                  <Form.Input
                      label="Maker"
                      name="maker"
                      placeholder="Car Brand"
                      type="maker"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Model"
                      name="model"
                      placeholder="Car Model"
                      type="model"
                      onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                      label="Type"
                      name="type"
                      placeholder="Car Type"
                      type="type"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Year"
                      name="year"
                      placeholder="Model Year"
                      type="year"
                      onChange={this.handleChange}
                  />
                </Form.Group><br/>
               <Form.Button fluid positive className="green-button" content="SUBMIT"/>
            </Form>
            <Message>
              Already have an account? Login <Link to="/signin">here</Link>
            </Message>
            {this.state.error === '' ? (
              ''
            ) : (
              <Message
                error
                header="Registration was not successful"
                content={this.state.error}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
        </div>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;
