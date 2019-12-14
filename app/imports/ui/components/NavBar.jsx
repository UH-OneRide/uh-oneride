import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { NavLink, withRouter } from 'react-router-dom';
import { Image, Menu, Container } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
        <div className="TopNavBar" >
          <Container>

                <Menu className="menuMain" inverted borderless >
                <Menu.Item as={NavLink} activeClassName="" exact to="/">
                  <Image size='small' src="/images/UHOneRide_logo.png"/>
                </Menu.Item>
                  {this.props.currentUser ? (
                      [<Menu.Item as={NavLink} activeClassName="active" exact to="/offer" key='offer'>
                        Offer a Ride</Menu.Item>,
                      <Menu.Item as={NavLink} activeClassName="active" exact to="/find" key='find'>
                        Find a Ride</Menu.Item>,
                      ]
                  ) : ''}
                  {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                      <Menu.Item>
                        Admin Placeholder
                      </Menu.Item>
                  ) : ''}
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/about" key='about'>
                    About Us
                  </Menu.Item>
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/contact" key='contact'>
                    Contact Us
                  </Menu.Item>


                  {this.props.currentUser === '' ? (
                      <Menu.Menu position='right'>
                        <Menu.Item as={NavLink} activeClassName="active" exact to="/signin" key='signin'>
                          Log in
                        </Menu.Item>
                        <Menu.Item as={NavLink} activeClassName="active" exact to="/signup" key='signup'>
                          Sign up
                        </Menu.Item>
                      </Menu.Menu>
                  ) : (
                      <Menu.Menu position='right'>
                        <Menu.Item as={NavLink} activeClassName="active" exact to="/profile/:_id" key='profile'>
                          Hello  {Meteor.user().username}!
                        </Menu.Item>
                        <Menu.Item as={NavLink} activeClassName="active" exact to="/signout" key='signout'>
                          Sign Out
                        </Menu.Item>
                      </Menu.Menu>
                  )}
                </Menu>
          </Container>
        </div>

    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
