import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from '../Grid';
import { Text } from '../Typography';

const Wrapper = styled.div`
  flex-direction: column;
  background: white;
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 50px 0;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  z-index: 10000;
`;
const CloseButton = styled.div`
  cursor: pointer;
  padding: 8px;
  color: #505050;
`;
const MainImageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainImage = styled.img`
  max-width: 85%;
  height: 75vh;
  object-fit: contain;
`;
const ThumbnailWrapper = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
  height: 100px;
  margin-top: 50px;
  position: relative;
`;
const Thumbnails = styled.div`
  position: absolute;
  top: 0;
  left: ${props => `-${props.offset}px`};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: left 0.2s cubic-bezier(0.3, 0, 0.45, 1);
`;
const Thumbnail = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 4px;
  margin-right: 16px;
  cursor: pointer;
  opacity: ${props => (props.active ? '1' : '.5')};
  object-fit: cover;
  /*border: ${props => (props.active ? `2px solid ${props.theme.AFITO_UI.primaryColor}` : '2px solid transparent')};*/
`;
const Controls = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Arrow = styled.div`
  background: white;
  border-radius: 50%;
  color: rgb(164, 164, 164);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  cursor: pointer;
  box-shadow: 0px 5px 8.55px 0.45px rgba(0, 0, 0, 0.16);
`;

function Lightbox({ images, open }) {
  const [isOpen, setIsOpen] = useState(open);
  const [curr, setCurr] = useState(0);
  const [thumbnailOffset, setThumbnailOffset] = useState(0);
  const report = `${curr + 1} / ${images.length}`;
  console.log(thumbnailOffset);
  useEffect(() => {
    console.log('use effect runs');
    setThumbnailOffset(curr * (75 + 16));
  }, [curr]);

  return (
    <Wrapper isOpen={isOpen}>
      <Row>
        <Column xs={12} align="flex-end" style={{ paddingRight: '66px' }}>
          <CloseButton onClick={() => setIsOpen(false)}>
            <i className="fas fa-lg fa-times"></i>
          </CloseButton>
        </Column>
      </Row>
      <Row align="flex-start">
        <Column xs={12} sm={7}>
          <MainImageWrapper>
            <MainImage src={images[curr]} />
            <Controls>
              <Arrow
                onClick={() => {
                  if (curr > 0) setCurr(curr - 1);
                  if (curr === 0) setCurr(images.length - 1);
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </Arrow>
              <Arrow
                onClick={() => {
                  if (curr < images.length - 1) setCurr(curr + 1);
                  if (curr === images.length - 1) setCurr(0);
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </Arrow>
            </Controls>
          </MainImageWrapper>
        </Column>
        <Column xs={12} sm={5} style={{ padding: '0 100px' }}>
          <ThumbnailWrapper>
            <Thumbnails offset={thumbnailOffset}>
              {images.map((img, idx) => (
                <Thumbnail key={img + '_' + idx} src={img} active={idx === curr} onClick={() => setCurr(idx)} />
              ))}
            </Thumbnails>
          </ThumbnailWrapper>
          <Row>
            <Column xs={12} align="flex-start">
              <Text style={{ fontWeight: 'bold', color: '#505050' }}>{report}</Text>
            </Column>
          </Row>
        </Column>
      </Row>
    </Wrapper>
  );
}

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired
};

export default Lightbox;
