import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { UserInfo } from '../../api/user/User';


/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      job: '',
      hobbies: '',
      image: '',
      error: '',
      redirectToReferer: false,
    };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
 }

  /** Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { email, password, firstName, lastName, job, hobbies, image } = this.state;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        console.log(err);
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
    Meteor.setTimeout(function () {
      UserInfo.insert({
        email,
        firstName,
        lastName,
        job,
        hobbies,
        image,
        userID: Meteor.userId(),
        isDriver: false,
        isAdmin: false,
      }, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        }
      });
      }, 5000);
  };

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
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
                Register with UH email
              </Header>
              <Form onSubmit={this.submit}>
                <Segment attached className="padding-30">
                  <Form.Group widths='equal'>
                  <Form.Input
                    label="Email"
                    icon="user"
                    iconPosition="left"
                    name="email"
                    type="email"
                    placeholder="E-mail address (e.g. emailaddress@hawaii.edu)"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Password"
                    icon="lock"
                    iconPosition="left"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={this.handleChange}
                  />
                  </Form.Group>
                  <Form.Group widths='equal'>
                  <Form.Input
                      label="First Name"
                      name="firstName"
                      placeholder="First Name"
                      type="firstName"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Last Name"
                      name="lastName"
                      placeholder="Last Name"
                      type="lastName"
                      onChange={this.handleChange}
                  />
                  </Form.Group>
                  <Form.Group widths='equal'>
                  <Form.Input
                      label="Major/Area of Study/Job"
                      name="job"
                      placeholder="Major/Area of Study/Job"
                      type="lastName"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Interests and hobbies"
                      name="hobbies"
                      placeholder="Hobbies/Interests"
                      type="lastName"
                      onChange={this.handleChange}
                  />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                        style={{ width: 525 }}
                        label='Profile Image'
                        name='image'
                        placeholder="Upload your profile image"
                        type="profileImage"
                        onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Button fluid positive className="green-button" content="SUBMIT"/>
                </Segment>
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
