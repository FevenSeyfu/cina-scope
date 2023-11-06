import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';


const Error = () => {
  const styleContainer={
    marginTop:'10rem',
  }
  return (
    <Container textAlign="center" style={styleContainer} >
      <Header as="h1" icon inverted color='red'>
        <Icon name="exclamation triangle" />
        404 Error: Page Not Found
        <Header.Subheader >The page you're looking for doesn't exist.</Header.Subheader>
      </Header>
    </Container>
  );
};
export default Error