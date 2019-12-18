import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export class ContactCard extends React.Component {

  render() {
    return (
        <Card>
          <Card.Content className="card-style">
            <div className="card-left">
              <Card.Header size="medium">{this.props.contact.subject}</Card.Header>
            </div>
            <Card.Meta>{this.props.contact.name}</Card.Meta>
            <Card.Meta>{this.props.contact.emailResponse}</Card.Meta>
            <Card.Meta>{this.props.contact.description}</Card.Meta><br/>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ContactCard);
