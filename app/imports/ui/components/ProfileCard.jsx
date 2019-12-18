import React from 'react';
import {
  Container,
  Card,
  Image,
  Icon,
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class ProfileCard extends React.Component {
  render() {
    return (
        <div className="content">
          <Container className="content-container">
            <Card verticalAlign='top' className="card">
              <Image src={this.props.userID.image} wrapped ui={false} />
              <Card.Content className="card">
                <Card.Header>{this.props.userID.firstName} {this.props.userID.lastName}</Card.Header>
                <Card.Meta>{this.props.userID.email}</Card.Meta>
                <Card.Description>
                  Major/Area of Study/Job: {this.props.userID.job}<br/>
                  Interest/Hobbies: {this.props.userID.hobbies}
                </Card.Description><br/>
              </Card.Content>
            </Card>
          </Container>
        </div>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileCard.propTypes = {
  userID: PropTypes.object.isRequired,
  offer: PropTypes.array,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ProfileCard);
