import React from 'react';
import Switch from '../Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Floorplan.scss';

function Floorplan({ floorplan, onToggle, onRemove }) {
  const {
    floorplan_id,
    floorplanActive,
    floorplanName,
    floorplanPrice,
    floorplanBeds,
    floorplanBaths,
    floorplanSquareFootage
  } = floorplan;

  return (
    <div className="Floorplan">
      <div className="Floorplan__item Floorplan__name">{floorplanName}</div>
      <div className="Floorplan__item Floorplan__price">${floorplanPrice}</div>
      <div className="Floorplan__item Floorplan__beds">{floorplanBeds}</div>
      <div className="Floorplan__item Floorplan__baths">{floorplanBaths}</div>
      <div className="Floorplan__item Floorplan__squareFootage">
        {floorplanSquareFootage ? <span>{floorplanSquareFootage}&nbsp;ft&sup2;</span> : <span>N/A</span>}
      </div>
      {floorplanActive !== undefined && (
        <div className="Floorplan__item Floorplan__toggle">
          <Switch
            name={`toggleFloorplan_${floorplan_id}`}
            defaultChecked={floorplanActive}
            onClick={e => e.stopPropagation()}
            onChange={e => onToggle(floorplan_id, floorplanActive)}
          />
        </div>
      )}
      {onRemove && (
        <div className="Floorplan__item Floorplan__remove">
          <FontAwesomeIcon icon="minus-circle" className="danger clickable" onClick={e => onRemove(floorplan_id)} />
        </div>
      )}
      {/*<div className="Floorplan__item Floorplan__maxOcc">{maxOcc}&nbsp;<i className="fa fa-user"></i></div>*/}
      {/*<div className="Floorplan__item Floorplan__image" style={{ backgroundImage: 'url(${image})' }}></div>*/}
    </div>
  );
}

export default Floorplan;
