import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { NavLink, withRouter } from 'react-router-dom';
import { Image, Menu, Container, Loader } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import { UserInfo } from '../../api/user/User';


/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className="TopNavBar" >
          <Container>

                <Menu className="menuMain" inverted borderless >
                <Menu.Item as={NavLink} activeClassName="" exact to="/">
                  <Image size='small' src="/images/UHOneRide_logo.png"/>
                </Menu.Item>
                  {this.props.currentUser ? (
                      [<Menu.Item as={NavLink} activeClassName="active" exact to="/newoffer" key='offer'>
                        Offer a Ride</Menu.Item>,
                      <Menu.Item as={NavLink} activeClassName="active" exact to="/find" key='find'>
                        Find a Ride</Menu.Item>,
                      ]
                  ) : ''}
                  {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                      <Menu.Item as={NavLink} activeClassName="active" exact to="/viewcontacts" key='viewcontacts'>
                        View Contacts
                      </Menu.Item>
                  ) : ''}
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/about" key='about'>
                    About Us
                  </Menu.Item>
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/newcontact" key='contact'>
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
                        <Menu.Item
                            as={NavLink}
                            activeClassName="active"
                            exact to={`/profile/${Meteor.user()._id}`}
                            key='profile'>
                          Hello  {this.props.name}!
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
  name: PropTypes.string,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => {
    const subscription = Meteor.subscribe('UserInfo');
    const userID = Meteor.userId();
    return {
      ready: subscription.ready(),
      currentUser: Meteor.user() ? Meteor.user().username : '',
      name: Meteor.user() ? UserInfo.find({ userID: userID }).fetch()[0].firstName : '',
    };
    })(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
