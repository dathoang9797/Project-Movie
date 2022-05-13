import React from 'react';
import FormSignUpPage from './FormSignUpPage';
import { SignUpCSS } from './SignUp.styles';
import { VectorSVG } from '@Assets/Svgs';

function Page() {
  const { Container, Content, ContentLeft, ContentRight, Form } = SignUpCSS;
  const { BackgroundSignInUpSVG } = VectorSVG;

  return (
    <Container>
      <Form>
        <Content>
          <ContentLeft>
            <BackgroundSignInUpSVG />
          </ContentLeft>
          <ContentRight>
            <FormSignUpPage />
          </ContentRight>
        </Content>
      </Form>
    </Container>
  );
}

export default Page;
