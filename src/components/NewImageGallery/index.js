import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Gallery = styled.div`
  display: flex;
`;
const Cover = styled.img`
  display: flex;
  width: 100%;
  object-fit: cover;
  transition: transform 0.25s ease-in-out;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    min-height: 230px;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    min-height: 475px;
  }
`;

const CoverWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 2px;
  margin-left: 0;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;

  &:hover {
    & ${Cover} {
      transform: scale(1.05);
    }
  }

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    width: 50%;
  }
`;

const ExtraImages = styled.div`
  width: 50%;
  display: none;
  flex-wrap: wrap;

  @media (min-width: ${props => props.theme.AFITO_UI.md}) {
    display: flex;
  }
`;

const Image = styled.img`
  display: flex;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.25s ease-in-out;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  cursor: pointer;
  flex-basis: calc(50% - 4px);
  margin: 2px;
  box-sizing: border-box;
  overflow: hidden;
  height: 250px;

  &:hover {
    & ${Image} {
      transform: scale(1.05);
    }
  }
`;

export default function ImageGallery({ images, onImageClick }) {
  const mainImage = images[0];
  const extraImages = images.slice(1, 5);

  return (
    <Gallery>
      <CoverWrapper>
        <Cover
          src={mainImage}
          alt="Cover"
          onClick={() => {
            onImageClick(0);
          }}
        />
      </CoverWrapper>

      <ExtraImages>
        {extraImages.map((img, i) => {
          return (
            <ImageWrapper key={i}>
              <Image src={img} alt="Extra" onClick={() => onImageClick(i + 1)} />
            </ImageWrapper>
          );
        })}
      </ExtraImages>
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func
};
