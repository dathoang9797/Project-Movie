import { DetailGridImageModalCSS } from './DetailGridImageModal.styles';
import React, { useState } from 'react';
import { Image } from 'antd';

function DetailGridImageModal({ image }) {
  const { Container, ModalContent, ModalItem, ModalItemLink, ModalImage } = DetailGridImageModalCSS;
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <ModalContent>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <ModalItem>
          <ModalItemLink>
            <ModalImage preview={{ visible: false }} onClick={() => setVisible(true)} src={image} />
          </ModalItemLink>
        </ModalItem>
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
            <Image src='https://picsum.photos/600/400?random=1' />
            <Image src='https://picsum.photos/600/400?random=2' />
            <Image src='https://picsum.photos/600/400?random=3' />
          </Image.PreviewGroup>
        </div>
      </ModalContent>
    </Container>
  );
}

export default DetailGridImageModal;
