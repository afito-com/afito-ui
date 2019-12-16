import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading, Text } from '../../Typography';
import { Row } from '../../Grid';
import LoadingBlock from '../../LoadingBlock';
import Button from '../../Button';
import Controls from '../Controls';
import Dropzone from '../../Dropzone';

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

const CoverPreview = styled.img`
  width: 100%;
`;

ImageUpload.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currScreen: PropTypes.number.isRequired,
  prevScreen: PropTypes.func.isRequired,
  promptExit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  property: PropTypes.object.isRequired
};

function ImageUpload({ onSubmit, currScreen, prevScreen, promptExit, loading, property }) {
  const [mainImage, setMainImage] = useState();
  const [extraImages, setExtraImages] = useState([]);

  // if (property.image_url) {
  //   return (
  //     <>
  //       <div style={{ marginBottom: '25px' }}>
  //         <Heading level={3}>Cover Photo</Heading>
  //         <Text>
  //           Your Cover Photo is the face of your property and it will be the first image that potential tenants see.
  //         </Text>
  //       </div>
  //       <CoverPreview src={property.image_url} alt="Cover" />
  //       <Button
  //         level="secondary"
  //         onClick={() => {
  //           setMainImage(null);
  //         }}
  //       >
  //         Choose a different image
  //       </Button>
  //     </>
  //   );
  // }

  return (
    <>
      <div style={{ marginBottom: '25px' }}>
        <Heading level={3}>Cover Photo</Heading>
        <Text>
          Your Cover Photo is the face of your property and it will be the first image that potential tenants see.
        </Text>
      </div>
      <>
        {loading ? (
          <LoadingBlock />
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
      <Controls justify="space-between">
        <Button
          level="secondary"
          disabled={!mainImage}
          onClick={() => {
            //uploadPhotos();
            //onUploadExtra(extraImages);
            onSubmit([mainImage].concat(extraImages));
          }}
          style={{ width: '100%' }}
        >
          Done
        </Button>
      </Controls>
    </>
  );
}

export default ImageUpload;
