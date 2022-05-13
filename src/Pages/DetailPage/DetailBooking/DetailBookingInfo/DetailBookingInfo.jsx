import React from 'react';
import { DetailBookingInfoCSS } from './DetailBookingInfo.styles';
import { BsDoorClosed, BsCalendar2 } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { GrKey } from 'react-icons/gr';

function DetailBookingInfo(props) {
  const { guests, bedRoom, bath, description } = props;
  const {
    Container,
    Header,
    HeaderButton,
    HeaderDesc,
    HeaderImage,
    HeaderImageContent,
    DetailContent,
    DetailItem,
    DetailDesc,
    DetailIcon,
    DetailCancelDay,
    DetailParagraph,
    DetailParagraphItem,
    DetailParagraphItemShowMore,
  } = DetailBookingInfoCSS;
  return (
    <Container>
      <Header>
        <HeaderDesc>
          <div>
            <h2 tabIndex={-1} elementtiming='LCP-target'>
              Phòng riêng tại nhà. Chủ nhà&nbsp;Dat
            </h2>
          </div>
          <ol>
            <li>
              <span>{guests} khách&nbsp;</span>
            </li>
            <li>
              <span aria-hidden='true'>·&nbsp;</span>
              <span>{bedRoom} phòng ngủ&nbsp;</span>
            </li>
            <li>
              <span aria-hidden='true'>·&nbsp;</span>
              <span>1 giường&nbsp;</span>
            </li>
            <li>
              <span aria-hidden='true'> ·&nbsp;</span>
              <span>{bath} phòng tắm riêng</span>
            </li>
          </ol>
        </HeaderDesc>
        <HeaderImage>
          <div>
            <HeaderButton aria-label='Tìm hiểu thêm về chủ nhà – Huynh.' type='button'>
              <HeaderImageContent>
                <div role='img' aria-busy='false' aria-label='Tìm hiểu thêm về chủ nhà – Huynh.'>
                  <img
                    aria-hidden='true'
                    alt='Tìm hiểu thêm về chủ nhà – Huynh.'
                    decoding='async'
                    elementtiming='LCP-target'
                    src='https://a0.muscache.com/im/pictures/user/ceee1049-e8a0-4a7e-850e-7becdace46e2.jpg?im_w=240'
                    data-original-uri='https://a0.muscache.com/im/pictures/user/ceee1049-e8a0-4a7e-850e-7becdace46e2.jpg?im_w=240'
                  />
                  <div
                    style={{
                      backgroundImage:
                        'url("https://a0.muscache.com/im/pictures/user/ceee1049-e8a0-4a7e-850e-7becdace46e2.jpg?im_w=240")',
                    }}
                  />
                </div>
              </HeaderImageContent>
            </HeaderButton>
          </div>
        </HeaderImage>
      </Header>
      <DetailContent>
        <DetailItem>
          <DetailIcon>
            <BsDoorClosed className='h-6 w-6' />
          </DetailIcon>
          <DetailDesc>
            <h1>Tự nhận phòng</h1>
            <span>Tự nhận phòng bằng khóa thông minh.</span>
          </DetailDesc>
        </DetailItem>
        <DetailItem>
          <DetailIcon>
            <GrKey className='h-6 w-6' />
          </DetailIcon>
          <DetailDesc>
            <h1>Trải nghiệm nhận phòng tuyệt vời</h1>
            <span>100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.</span>
          </DetailDesc>
        </DetailItem>
        <DetailCancelDay>
          <DetailIcon>
            <BsCalendar2 className='h-6 w-6' />
          </DetailIcon>
          <DetailDesc>
            <h1>Hủy miễn phí trước 3 thg 5.</h1>
          </DetailDesc>
        </DetailCancelDay>
      </DetailContent>
      <DetailParagraph>
        <DetailParagraphItem>
          <span>
            <span>{description}</span>
          </span>
        </DetailParagraphItem>
        <DetailParagraphItemShowMore>
          <button type='button'>
            <span>
              <span>Hiển thị thêm</span>
              <IoIosArrowForward />
            </span>
          </button>
        </DetailParagraphItemShowMore>
      </DetailParagraph>
    </Container>
  );
}
export default DetailBookingInfo;
