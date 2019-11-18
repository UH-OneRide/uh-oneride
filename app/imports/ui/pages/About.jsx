import React from 'react';
import { Container, Header} from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class About extends React.Component {
  render() {
    return (
        <Container>
          <Header as='h1'>About Us</Header>
        </Container>
    );
  }
}

export default About;
