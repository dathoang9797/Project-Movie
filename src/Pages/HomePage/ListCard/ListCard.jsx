import React, { useMemo } from 'react';
import { ListCardCSS } from './ListCard.styles';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { useSelector } from 'react-redux';

function ListCard({ src, title, description, price }) {
  const { selectDanhSachPhongChoThue } = quanLyPhongChoThueSelector;
  const danhSachPhongChoThue = useSelector(selectDanhSachPhongChoThue);
  const {
    Container,
    TitleContainer,
    TitleHeader,
    CardContainer,
    CardItem,
    CardHeading,
    CardDesc,
    CardPrice,
  } = ListCardCSS;
  const maxLengthDesc = 30;
  const maxLengthName = 20;
  const urlDetail = process.env.REACT_APP_LINK_DETAIL;

  const idRoomsBestSale = useMemo(
    () => ['620604c6fee2fc001cd7b8f0', '61698c5fefe193001c0a5baa', '6172397eefe193001c0a7a4a'],
    []
  );

  const roomsBestSale = useMemo(() => {
    return idRoomsBestSale
      .map((idPhong) => {
        return danhSachPhongChoThue.filter((phong) => phong._id === idPhong);
      })
      .flat();
  }, [danhSachPhongChoThue, idRoomsBestSale]);

  const renderRoomBestSale = () => {
    if (!roomsBestSale.length) return [];
    return roomsBestSale.map((room, index) => {
      const { image, name, price, description, _id } = room;
      return (
        <CardItem to={`${urlDetail}/${_id}`} key={`${_id}-${index}`}>
          <img src={image} alt={image} />
          <CardHeading>
            {name.length > maxLengthName ? name.slice(0, maxLengthName) : name}
          </CardHeading>
          <CardDesc>
            {description.length > maxLengthDesc
              ? description.slice(0, maxLengthDesc) + '...'
              : description}
          </CardDesc>
          <CardPrice>${price.toLocaleString()}/night</CardPrice>
        </CardItem>
      );
    });
  };

  return (
    <Container>
      <TitleContainer>
        <TitleHeader>Khám phá danh sách của chúng tôi</TitleHeader>
      </TitleContainer>
      <CardContainer>{renderRoomBestSale()}</CardContainer>
    </Container>
  );
}

export default React.memo(ListCard);
