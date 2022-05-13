import tw, { styled } from 'twin.macro';
import { Dropdown } from 'antd';

const Container = styled.div`
  z-index: 202;
  flex: 1;
  border-right: 1px solid #e9e9e9;
  margin-top: 3px;
  position: relative;
  padding: 0 15px;

  @media (max-width: 992px) {
    margin-bottom: 10px;
    margin-bottom: 10px;
    padding: 0;
    border-color: transparent;
  }
`;

const BannerSelect = styled(Dropdown)`
  cursor: pointer;
  font-size: 16px !important;
  border: none;
  font-weight: 500 !important;
  margin: 0;
  padding: 0;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  outline: none;
  color: gray;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  display: block;
  border-radius: 3px;
  transition: all 0.1s ease-in-out;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  color: gray !important;

  &:hover {
    svg {
      ${tw`transition-colors duration-300`};
      color: var(--color-primary);
    }
  }

  @media (max-width: 992px) {
    background-color: #fff;
    padding: 0 15px;
    height: 55px;
    line-height: 55px;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
  }
`;

export const BannerSelectCSS = {
  Container,
  BannerSelect,
};
