import React from 'react';
import { Container, Header} from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Find extends React.Component {
  render() {
    return (
        <div className="content">
          <Container className="content-container">
        <Header as="h1" textAlign="center">Find a Ride</Header>

          </Container>
        </div>
    );
  }
}

export default Find;
