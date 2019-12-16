import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Column } from '../../Grid';
import { Heading, Text } from '../../Typography';
import Switch from '../../Switch';
import Button from '../../Button';
import Controls from '../Controls';
import LoadingBlock from '../../LoadingBlock';

AmenitiesPicker.propTypes = {
  property: PropTypes.object.isRequired,
  amenities: PropTypes.array.isRequired,
  setAmenity: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  currScreen: PropTypes.number.isRequired,
  prevScreen: PropTypes.func.isRequired,
  promptExit: PropTypes.func.isRequired
};

function AmenitiesPicker({ property, amenities, setAmenity, onSubmit, currScreen, prevScreen, promptExit }) {
  const Amenity = styled(Column)`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  `;

  return (
    <>
      {amenities.length > 0 ? (
        <>
          <div style={{ marginBottom: '25px' }}>
            <Heading level={3}>Amenities</Heading>
            <Text>
              Tenants will be able to filter your property based on what amenities you provide. Make sure to include as
              many as you can to appear on the most searches!
            </Text>
          </div>
          <Row canWrap={true}>
            {amenities.map((a, i) => {
              let isChecked = property.amenities.find(id => id === a.id);

              return (
                <Amenity key={a.amenity_name + '_' + i} xs={12} sm={6} md={6} lg={6}>
                  <Row align="center">
                    <Switch
                      name={a.amenity_name}
                      checked={isChecked}
                      onClick={e => e.stopPropagation()}
                      onChange={() => {
                        if (isChecked) {
                          setAmenity(property.amenities.filter(id => id !== a.id));
                        } else {
                          setAmenity(property.amenities.concat([a.id]));
                        }
                      }}
                    />
                    <img width="30" style={{ marginRight: '10px' }} src={a.amenity_icon} alt={a.amenity_name} />
                    <Text>{a.amenity_name}</Text>
                  </Row>
                </Amenity>
              );
            })}
          </Row>
        </>
      ) : (
        <LoadingBlock />
      )}
      <Row>
        <Button type="submit" level="secondary" onClick={onSubmit}>
          Continue
        </Button>
      </Row>
    </>
  );
}

export default AmenitiesPicker;
