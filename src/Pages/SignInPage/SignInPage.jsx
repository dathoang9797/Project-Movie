import React from 'react';
import FormSignInPage from './FormSignInPage';
import { SignInCSS } from './SignIn.styles';
import { VectorSVG } from '@Assets/Svgs';

function SignInPage() {
  const { Container, Content, ContentLeft, ContentRight, Form } = SignInCSS;
  const { BackgroundSignInUpSVG } = VectorSVG;
  
  return (
    <Container>
      <Form>
        <Content>
          <ContentLeft>
            <BackgroundSignInUpSVG />
          </ContentLeft>
          <ContentRight>
            <FormSignInPage />
          </ContentRight>
        </Content>
      </Form>
    </Container>
  );
}

export default SignInPage;
