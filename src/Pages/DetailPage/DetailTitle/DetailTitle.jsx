import React from 'react';
import { DetailTitleCSS } from './DetailTitle.styles';
import { BsTranslate, BsHeart } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';

function DetailTitle({ name }) {
  const {
    Button,
    Container,
    Desc,
    DescLeft,
    DescLeftFirst,
    DescLeftSecond,
    DescLeftThird,
    DescRight,
    DescRightContent,
    DescRightContentItem,
    Heading,
    Icon,
    Text,
  } = DetailTitleCSS;

  return (
    <Container>
      <Icon>
        <button type='button'>
          <BsTranslate />
        </button>
      </Icon>
      <Heading>
        <h1>{name}</h1>
      </Heading>
      <Desc>
        <DescLeft>
          <DescLeftFirst>
            <span>
              <AiFillStar />
            </span>
            <Text aria-hidden='true'>4,75 ·</Text>
            <span>
              <Button aria-label='Xếp hạng 4,75/5 theo 16 đánh giá.' type='button'>
                16 đánh giá
              </Button>
            </span>
          </DescLeftFirst>
          <DescLeftSecond aria-hidden='true'>·</DescLeftSecond>
          <DescLeftThird>
            <Button type='button'>
              <Text aria-hidden='false'>Việt Nam</Text>
            </Button>
          </DescLeftThird>
        </DescLeft>
        <DescRight>
          <DescRightContent>
            <div>
              <Button>
                <DescRightContentItem>
                  <span>
                    <FiShare />
                  </span>
                  Chia sẻ
                </DescRightContentItem>
              </Button>
            </div>
            <div>
              <Button
                aria-label='Thêm nhà/phòng cho thuê vào danh sách'
                data-testid='pdp-save-button-unsaved'
                type='button'
              >
                <DescRightContentItem>
                  <span>
                    <BsHeart />
                  </span>
                  Lưu
                </DescRightContentItem>
              </Button>
            </div>
          </DescRightContent>
        </DescRight>
      </Desc>
    </Container>
  );
}

export default React.memo(DetailTitle);
