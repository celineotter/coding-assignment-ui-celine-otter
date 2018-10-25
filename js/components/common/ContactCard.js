import React from 'react';

import Card from './Card';
import './profile-banner.scss';

const headers = {
  generalInfo: 'General Contact Information',
  digitalInfo: 'Further Contact Information',
};

const leftPanel = {
  generalInfo: [{ label: 'First Name', type: 'text' }, { label: 'Home Address', type: 'text' }],
  digitalInfo: [{ label: 'Personal Email', type: 'email' }, { label: 'Work Email', type:'email' }]
};

const rightPanel = {
  generalInfo: [{ label: 'Last Name', type: "text" }, { label: 'Work Address', type: "text"}],
  digitalInfo: [{ label: 'Phone Number', type: "text" }]
};

const InputUnit = (data, index) => {
  return (
    <div key={`input${index}`}>
      <label>{data.label}</label>
      <input type={data.type}/>
    </div>
  );
}

const ContactCard = ({ type, onSubmit }) => {
  return (
    <Card
      header={headers[type]}
      bodyLeft={<div>{leftPanel[type].map(InputUnit)}</div>}
      bodyRight={<div>{rightPanel[type].map(InputUnit)}</div>}
      onSubmit={onSubmit}
    />
  );
}

export default ContactCard;

