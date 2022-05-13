import React from 'react';
import { NotFoundCSS } from './NotFound.styles';

function NotFoundPage() {
  const { Container, Content, Item, NavLinkNotFound } = NotFoundCSS;
  return (
    <Container>
      <Content>
        <Item>
          <h1>
            <span>Error</span>404
          </h1>
          <p>Sorry, we couldn't find this page.</p>
          <p>But dont worry, you can find plenty of other things on our homepage.</p>
          <NavLinkNotFound to={process.env.REACT_APP_LINK_HOME}>Back to homepage</NavLinkNotFound>
        </Item>
      </Content>
    </Container>
  );
}

export default NotFoundPage;
