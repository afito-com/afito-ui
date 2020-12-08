import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { usePrevious } from '../../utils';

const IMAGE_MARGIN = 5;

const GalleryWrapper = styled.div`
  position: relative;
`;
const ImageWrapper = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
  /*height: ${props => `${props.height}px`};*/
  position: relative;
`;

const Images = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: transform 0.2s cubic-bezier(0.3, 0, 0.45, 1);

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    transform: ${props => (props.offset ? `translateX(-${props.offset}px)` : `translateX(0px)`)};
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    transform: ${props =>
      props.offset ? `translateX(${props.width / 2 / 2 - props.offset / 2}px)` : `translateX(0px)`};
  }
`;

const ImageContainer = styled.div`
  margin-right: ${() => `${IMAGE_MARGIN}px`};
  cursor: pointer;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    height: 230px;
    min-width: ${props => `${props.width}px`};
  }

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    height: 475px;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    min-width: ${props => `${props.width / 2}px`};
  }
`;

const Image = styled.img`
  margin-right: ${() => `${IMAGE_MARGIN}px`};
  object-fit: cover;
  cursor: pointer;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    height: 230px;
    min-width: ${props => `${props.width}px`};
  }

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    height: 475px;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    min-width: ${props => `${props.width / 2}px`};
  }
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
const Controls = styled.div`
  width: calc(100% - 20px);
  margin: 0 10px;
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & ${Arrow} {
    pointer-events: auto;
  }
`;
const ThumbnailWrapper = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
  height: 40px;
  position: relative;
`;
const Thumbnails = styled.div`
  margin-top: ${() => `${IMAGE_MARGIN}px`};
  position: absolute;
  top: 0;
  left: ${props => (props.offset ? `-${props.offset}px` : '0')};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: left 0.2s cubic-bezier(0.3, 0, 0.45, 1);
`;
const Thumbnail = styled.img`
  height: 33px;
  width: 50px;
  cursor: pointer;
  opacity: ${props => (props.active ? '1' : '.5')};
  object-fit: cover;

  & + & {
    margin-left: ${() => `${IMAGE_MARGIN}px`};
  }
`;

export default function ImageGallery({ images, loop, onImageClick }) {
  const THUMBNAIL_WIDTH = 50 + IMAGE_MARGIN;
  const [curr, setCurr] = useState(0);
  const prev = usePrevious(curr);
  const [offset, setOffset] = useState();
  const [thumbnailOffset, setThumbnailOffset] = useState(0);
  const thumbnailSliderWidth = THUMBNAIL_WIDTH * images.length;
  const wrapperElement = useRef();
  const width = useWrapperWidth();

  function useWrapperWidth() {
    let [size, setSize] = useState(0);
    useEffect(() => {
      function updateWidth() {
        setSize(wrapperElement.current.offsetWidth);
      }

      window.addEventListener('resize', updateWidth);
      updateWidth();

      return () => window.removeEventListener('resize', updateWidth);
    }, []);
    return size;
  }

  useEffect(() => {
    if (curr === 0) {
      return setOffset(0);
    }
    setOffset(curr * (width + IMAGE_MARGIN));

    if (curr === 0) {
      return setThumbnailOffset(0);
    }

    if (curr === images.length - 1) {
      return setThumbnailOffset(thumbnailSliderWidth - 15 * THUMBNAIL_WIDTH);
    }

    // moving forward
    if (curr > prev) {
      //console.log("moving forward")
      //thumbnails run out
      if (curr >= 15 && curr < images.length) {
        //console.log("out of thumbnails, show new one")
        //move to right to show new one
        setThumbnailOffset(thumbnailOffset + THUMBNAIL_WIDTH);
      }
      // moving backward
    } else if (prev > curr) {
      //console.log("moving backward")
      //thumbnails run out
      if (curr <= 15 && thumbnailOffset > 0) {
        //console.log("out of thumbnails, show new one")
        // move to left to show past one
        setThumbnailOffset(thumbnailOffset - THUMBNAIL_WIDTH);
      }
    }
  }, [THUMBNAIL_WIDTH, curr, images.length, prev, thumbnailOffset, thumbnailSliderWidth, width]);

  return (
    <GalleryWrapper ref={wrapperElement}>
      <ImageWrapper>
        <Images offset={offset} width={width}>
          {images.map((img, idx) => {
            return (
              <>
                <Image
                  onClick={() => {
                    onImageClick(idx);
                  }}
                  key={`Image_${idx}`}
                  width={width}
                  src={img}
                  alt={`Image #${idx}`}
                />
              </>
            );
          })}
        </Images>
        <Controls>
          <Arrow
            onClick={() => {
              if (curr > 0) setCurr(curr - 1);
              if (loop && curr === 0) setCurr(images.length - 1);
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </Arrow>
          <Arrow
            onClick={() => {
              if (curr < images.length - 1) setCurr(curr + 1);
              if (loop && curr === images.length - 1) setCurr(0);
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </Arrow>
        </Controls>
      </ImageWrapper>

      <ThumbnailWrapper>
        <Thumbnails offset={thumbnailOffset}>
          {images.map((img, idx) => {
            return (
              <>
                <Thumbnail
                  key={`Thumbnail_${idx}`}
                  active={curr === idx}
                  onClick={() => setCurr(idx)}
                  src={img}
                  height="33"
                  width="50"
                  alt={`Thumbnail #${idx}`}
                />
              </>
            );
          })}
        </Thumbnails>
      </ThumbnailWrapper>
    </GalleryWrapper>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  // nextImg: PropTypes.func,
  loop: PropTypes.bool,
  onImageClick: PropTypes.func
};
