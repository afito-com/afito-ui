import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from '../../Typography';
import { Row } from '../../Grid';
import LoadingBlock from '../../LoadingBlock';
import Button from '../../Button';
import Controls from '../Controls';
import Dropzone from '../../Dropzone';

ExtraImages.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onUploadExtra: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

function ExtraImages({ onSubmit, onUploadExtra, currScreen, prevScreen, promptExit, loading, property }) {
  const [extraImages, setExtraImages] = useState([]);

  return (
    <>
      <div style={{ marginBottom: '25px' }}>
        <Heading level={3}>Extra Photos</Heading>
        <Text>Upload any additional photos of the property you may have.</Text>
      </div>

      <>
        {loading ? (
          <LoadingBlock />
        ) : (
          <>
            <Dropzone onDrop={files => setExtraImages(files)} multiple={true}>
              {extraImages.length > 0 ? (
                extraImages.map((image, i) => {
                  return (
                    <Row key={i}>
                      <img src={image.preview} alt={'extra_' + image.name} />
                      <i
                        style={{ marginRight: '30px' }}
                        className="fas fa-minus-circle"
                        onClick={e => {
                          e.stopPropagation();
                          e.preventDefault();
                          setExtraImages(
                            extraImages.filter(img => {
                              return img !== image;
                            })
                          );
                        }}
                      />
                    </Row>
                  );
                })
              ) : (
                <Text style={{ width: '100%' }}>Upload the rest of your listing&apos;s images here</Text>
              )}
            </Dropzone>
          </>
        )}
      </>

      <Controls justify="space-between">
        <Button level="outline" onClick={() => promptExit()}>
          Cancel
        </Button>
        <div>
          {currScreen > 0 && (
            <Button level="outline" onClick={() => prevScreen()}>
              Go Back
            </Button>
          )}
          <Button level="secondary" disabled={!extraImages.length > 0} onClick={() => onUploadExtra(extraImages)}>
            Continue
          </Button>
        </div>
      </Controls>
    </>
  );
}

export default ExtraImages;
