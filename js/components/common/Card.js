import React from 'react';

import './card.scss';

const SpitBody = ({ bodyLeft, bodyRight }) => (
  <div className="card-body-row">
    <div className="card-body-left">{bodyLeft}</div>
    <div className="card-body-right">{bodyRight}</div>
  </div>
);

const Card = ({ type, header, bodyLeft, bodyRight, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="card mb-3">
        <div className="card-header bg-transparent">{header}</div>
        <div className="card-body">
          <SpitBody bodyLeft={bodyLeft} bodyRight={bodyRight}/>
        </div>
        <div className="card-footer bg-transparent float-right">
          <button type="submit" className="btn btn-info">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Card;