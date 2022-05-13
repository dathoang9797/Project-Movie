import tw, { styled } from 'twin.macro';

const NotHaveAccountLink = styled.div`
  ${tw`text-right absolute bottom[-50px] right[20px] transition-all duration-300`};
  a {
    ${tw`hover:text-[var(--color-primary)] `}
  }
 
`;

export const FormSignInPageCSS = { NotHaveAccountLink };
