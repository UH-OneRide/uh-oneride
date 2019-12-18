import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { _ } from 'meteor/underscore';
import { withTracker } from 'meteor/react-meteor-data';
import { Loader } from 'semantic-ui-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import AddOffer from '../pages/AddOffer';
import Find from '../pages/Find';
import Contact from '../pages/Contact';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import OfferView from '../pages/OfferView';
import UserProfile from '../pages/UserProfile';
import EditOffer from '../pages/EditOffer';
import ContactView from '../pages/ContactView';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/newoffer" component={AddOffer}/>
              <Route path="/find" component={Find}/>
              <Route path="/about" component={About}/>
              <Route path="/newcontact" component={Contact}/>
              <Route path="/profile/:_id" component={UserProfile}/>
              <Route path="/offer/:_id" component={OfferView}/>
              <Route path="/editoffer/:_id" component={EditOffer}/>
              <AdminProtectedRoute path="/viewcontacts" component={ContactView}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

App.propTypes = {
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const names = ['Offers', 'UserInfo'];
  const collections = _.map(names, function (collection) { return Meteor.subscribe(collection); });
  const ready = _.every(collections, function (collection) { return collection.ready(); });
  return {
    ready: ready,
  };
})(App);
