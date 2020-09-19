import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading, Text } from '../Typography';
import { Row } from '../Grid';
import LoadingBlock from '../LoadingBlock';
import Button from '../Button';
import Dropzone from '../Dropzone';

const ExtraImageWrapper = styled.div`
  position: relative;
`;

const CoverPhotoWrapper = styled.div`
  position: relative;
`;

const ExtraImage = styled.img`
  border-radius: 8px;
  object-fit: cover;
  margin-right: 16px;
  margin-bottom: 16px;
`;

const RemoveImage = styled.div`
  position: absolute;
  right: 5px;
  top: -10px;
  cursor: pointer;
  border-radius: 50%;
  background: white;
  color: ${props => props.theme.AFITO_UI.dangerColor};
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RemoveCoverImage = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  border-radius: 50%;
  background: white;
  color: ${props => props.theme.AFITO_UI.dangerColor};
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

ImageUpload.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  property: PropTypes.object
};

function ImageUpload({ onSubmit, loading, property }) {
  const [mainImage, setMainImage] = useState();
  const [extraImages, setExtraImages] = useState([]);

  useEffect(() => {
    if (property) {
      property.image_url && setMainImage({ preview: property.image_url });
      property.images && setExtraImages(property.images.map((img, idx) => ({ preview: img, name: `img_${idx}` })));
    }
  }, [property]);

  return (
    <>
      <div style={{ marginBottom: '25px' }}>
        <Heading level={3}>Cover Photo</Heading>
        <Text>
          The Cover Photo is the face of the property and it will be the first image that potential tenants see.
        </Text>
      </div>
      <>
        {loading ? (
          <Row justify="center" align="center" style={{ minHeight: '300px' }}>
            <LoadingBlock />
          </Row>
        ) : (
          <>
            <Dropzone onDrop={files => setMainImage(files[0])} multiple={false}>
              {mainImage ? (
                <CoverPhotoWrapper>
                  <img src={mainImage.preview} alt="Cover Photo" />
                  <RemoveCoverImage
                    onClick={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      setMainImage(null);
                    }}
                  >
                    <Text>
                      <b>X</b>
                    </Text>
                  </RemoveCoverImage>
                </CoverPhotoWrapper>
              ) : (
                <Text>
                  <b>Drag and Drop your Cover Photo here to see a preview!</b>
                </Text>
              )}
            </Dropzone>

            <div style={{ marginBottom: '25px' }}>
              <Heading level={3}>Extra Photos</Heading>
            </div>
            <Row justify="flex-start" canWrap>
              {extraImages.length > 0 &&
                extraImages.map((image, i) => {
                  return (
                    <ExtraImageWrapper key={i}>
                      <ExtraImage height="104" width="104" src={image.preview} alt={'extra_' + image.name} />
                      <RemoveImage
                        onClick={() => {
                          setExtraImages(extraImages.filter(img => img !== image));
                        }}
                      >
                        <Text>
                          <b>X</b>
                        </Text>
                      </RemoveImage>
                    </ExtraImageWrapper>
                  );
                })}
              <Dropzone
                style={{ margin: '0 16px 16px 0' }}
                width={100}
                height={100}
                onDrop={files => setExtraImages(extraImages.concat(files))}
                multiple={true}
              >
                <Text style={{ width: '100%' }}>+</Text>
              </Dropzone>
            </Row>
          </>
        )}
      </>
      <Row>
        <Button
          level="secondary"
          disabled={!mainImage || loading}
          onClick={() => {
            onSubmit([mainImage].concat(extraImages));
          }}
        >
          Done
        </Button>
      </Row>
    </>
  );
}

export default ImageUpload;
