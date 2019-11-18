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
            <Menu secondary widths={9}>
          <Menu.Item as={NavLink} activeClassName="active" exact to="/" key='home'>
            <Image size='small' src="/images/UHOneRide_logo.png"/>
          </Menu.Item>
          <Menu.Item style={{ color: '#fff' }} as={NavLink} activeClassName="active" exact to="/offer" key='offer'>
            Offer a Ride
          </Menu.Item>
          <Menu.Item style={{ color: '#fff' }} as={NavLink} activeClassName="active" exact to="/find" key='find'>
            Find a Ride
          </Menu.Item>
          <Menu.Item style={{ color: '#fff' }} as={NavLink} activeClassName="active" exact to="/about" key='about'>
            About Us
          </Menu.Item>
          <Menu.Item style={{ color: '#fff' }} as={NavLink} activeClassName="active" exact to="/contact" key='contact'>
            Contact Us
          </Menu.Item>
          <Menu.Item style={{ color: '#fff' }} as={NavLink} activeClassName="active" exact to="/signin" key='signin'>
            Log in
          </Menu.Item>
          <Menu.Item style={{ color: '#fff' }} as={NavLink} activeClassName="active" exact to="/signup" key='signup'>
            Sign up
          </Menu.Item>
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
