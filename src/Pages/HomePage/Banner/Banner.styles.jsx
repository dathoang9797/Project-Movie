import tw, { styled } from 'twin.macro';
import { Images } from '@Assets/Images';

const { heroImgOne } = Images;

const Container = styled.div`
  ${tw`w-full h-auto relative  z-10 block bg-cover bg-no-repeat background-position[50%]  font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif]`};
  background-image: url(${heroImgOne});

  @media (max-width: 1440px) {
    height: 580px;
  }

  @media (max-width: 991px) {
    height: 640px;
  }
`;
const BannerContent = styled.div`
  ${tw` container mx-auto text-center relative block top-0 transform-none padding-top[210px] padding-bottom[150px]`};

  @media (max-width: 1024px) {
    padding-top: 180px;
    padding-bottom: 80px;
    text-align: left;
  }

  @media (max-width: 768px) {
    width: 100% !important;
    max-width: 100%;
  }

  @media (min-width: 1240px) and (max-width: 1440px) {
    padding-top: 170px;
    padding-bottom: 150px;
  }
`;

const BannerGrid = styled.div`
  ${tw`grid grid-cols-1 gap-4`}
  h1 {
    font-size: 44px;
    font-weight: 600;
    line-height: 50px;
    color: #fff;
    @media (max-width: 1240px) {
      ${tw`text-4xl`}
    }
  }
  span {
    font-size: 44px;
    font-weight: 600;
    line-height: 50px;
    color: #fff;
    @media (max-width: 1240px) {
      ${tw`text-4xl `}
    }

    @media (max-width: 768px) {
      & span:first-child {
        display: block;
        width: 100%;
        min-height: 46px;
      }
      .typed-cursor {
        display: none;
      }
    }
  }
  h4 {
    font-size: 24px;
    font-weight: 300;
    color: #777;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.65);
    @media (max-width: 767px) {
      font-size: 18px;
      font-weight: 400;
      line-height: 32px;
    }
  }
  form {
    ${tw`text-left`};
    margin-top: 50px;
    border-radius: 50px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 12%);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 9px;
    max-height: 68px;

    @media (max-width: 991px) {
      border-radius: 0;
      display: block;
      padding: 0;
      max-height: 100%;
      background-color: transparent;
      box-shadow: none;
    }

    @media (max-width: 1024px) {
      margin-top: 30px;
    }
  }
`;

const BannerButtonSearch = styled.button`
  font-size: 18px;
  font-weight: 600;
  padding: 0 40px;
  margin-right: 1px;
  height: 50px;
  outline: none;
  background-color: var(--color-primary);
  line-height: 26px;
  position: relative;
  top: 0;
  color: #fff;
  isplay: inline-block;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  border: none;
  border-radius: 50px;
  &:before {
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all 0.2s;
  }
  &:hover:before {
    opacity: 0.1;
  }
  @media (max-width: 991px) {
    margin-top: 10px;
  }
`;

export const BannerCSS = {
  Container,
  BannerContent,
  BannerGrid,
  BannerButtonSearch,
};
